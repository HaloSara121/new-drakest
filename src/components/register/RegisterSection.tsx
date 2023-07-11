import { useState } from "react";
import Link from "next/link";
import { NextComponentType } from "next";
import { FcGoogle } from "react-icons/fc";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@/services/api";

import {
  Button,
  Divider,
  Flex,
  Heading,
  Text,
  useToast,
} from "@chakra-ui/react";

import { Input } from "../common/Form/Input";
import { useRouter } from "next/router";

const RegisterFormValidationSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  email: z
    .string()
    .min(1, "O E-mail é obrigatório!")
    .email("Formato de e-mail inválido")
    .trim(),
  password: z
    .string()
    .min(6, "A senha deve conter no mínimo 6 caracteres")
    .trim(),
  passwordConfirmation: z
    .string()
    .min(1, "A confirmação de senha é obrigatória")
    .trim(),
});

type RegisterFormData = z.infer<typeof RegisterFormValidationSchema>;

export const RegisterSection: NextComponentType = () => {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterFormValidationSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
  });

  const registerFormSubmit = async (data: RegisterFormData) => {
    if (data.password !== data.passwordConfirmation) {
      return setError("passwordConfirmation", {
        type: "value",
        message: "A senha de confirmação não confere!",
      });
    }

    setIsLoading(true);
    await api
      .post("/auth/register", {
        ...data,
      })
      .then((response) => {
        toast({
          status: "success",
          position: "top",
          description: response.data.message,
        });

        reset();
        setTimeout(() => {
          router.push("/login");
        }, 1000);
      })
      .catch((err) => {
        if (err.response.data.fieldMessage !== "toast") {
          return setError(err.response.data.fieldMessage, {
            type: "value",
            message: err.response.data.message,
          });
        } else {
          toast({
            status: "error",
            position: "top",
            description: err.response.data.message,
          });
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Flex w="50rem" h="100vh" justify="center" align="center" bg="gray.800">
      <Flex
        as="form"
        id="register_form"
        onSubmit={handleSubmit(registerFormSubmit)}
        flexDir="column"
        maxW="25rem"
        w="100%"
        p="4"
        rounded="md"
        align="center"
        gap="4"
      >
        <Heading color="yellow.500">Registre-se</Heading>

        <Divider my="2" />

        <Flex flexDir="column" gap="1rem" w="100%">
          <Input
            variant="outline"
            label="Nome"
            placeholder="Digite seu nome"
            error={errors.name}
            {...register("name")}
          />

          <Input
            variant="outline"
            label="E-mail"
            placeholder="Digite seu e-mail"
            error={errors.email}
            {...register("email")}
          />

          <Input
            variant="outline"
            label="Senha"
            autoComplete="off"
            pr="2.7rem"
            placeholder="Digite sua senha"
            isPassword
            error={errors.password}
            {...register("password")}
          />

          <Input
            variant="outline"
            label="Confirmar senha"
            autoComplete="off"
            pr="2.7rem"
            placeholder="Confirme sua senha"
            isPassword
            error={errors.passwordConfirmation}
            {...register("passwordConfirmation")}
          />
        </Flex>

        <Button
          form="register_form"
          type="submit"
          w="100%"
          h="3.5rem"
          px="2rem"
          mt="1rem"
          colorScheme="green"
          isLoading={isLoading}
        >
          Registrar-se
        </Button>

        <Flex gap="1" color="gray.200">
          <Text fontWeight="bold">Já tem uma conta?</Text>
          <Button
            w="fit-content"
            color="yellow.500"
            alignSelf="center"
            variant="link"
          >
            <Link href="/login">Faça login!</Link>
          </Button>
        </Flex>

        <Flex w="100%" align="center" gap="1rem">
          <Divider />
          <Text>ou</Text>
          <Divider />
        </Flex>

        <Button
          w="100%"
          h="3.5rem"
          px="2rem"
          border="2px solid"
          color="black"
          fontWeight="bold"
          transition="filter .2s"
          _hover={{ filter: "brightness(.8)" }}
          leftIcon={<FcGoogle size="32" />}
        >
          Continue com o Google
        </Button>
      </Flex>
    </Flex>
  );
};
