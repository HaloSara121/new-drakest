import Link from "next/link";
import { NextComponentType } from "next";
import { FcGoogle } from "react-icons/fc";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Button,
  Divider,
  Flex,
  Heading,
  Text,
  useToast,
} from "@chakra-ui/react";

import { Input } from "../common/Form/Input";
import { api } from "@/services/api";
import { useRouter } from "next/router";
import { useState } from "react";

const LoginFormValidationSchema = z.object({
  email: z.string().email("Formato de e-mail inválido").trim(),
  password: z
    .string()
    .min(6, "A senha deve conter no mínimo 6 caracteres")
    .trim(),
});

type LoginFormData = z.infer<typeof LoginFormValidationSchema>;

export const LoginSection: NextComponentType = () => {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginFormValidationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginFormSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    await api
      .post("/auth/login", {
        ...data,
      })
      .then((response) => {
        toast({
          status: "success",
          position: "top",
          description: response.data.message,
        });

        alert(response.data.token);

        reset();
        setTimeout(() => {
          router.push("/login");
        }, 10000);
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
    <Flex
      w="50rem"
      h="100vh"
      flexDir="column"
      justify="center"
      align="center"
      bg="gray.800"
    >
      <Flex
        as="form"
        id="login_form"
        onSubmit={handleSubmit(loginFormSubmit)}
        flexDir="column"
        maxW="25rem"
        w="100%"
        p="4"
        rounded="md"
        align="center"
        gap="4"
      >
        <Heading color="yellow.500">Faça login</Heading>

        <Divider my="2" />

        <Flex flexDir="column" gap="1rem" w="100%">
          <Input
            id="email"
            variant="outline"
            label="E-mail"
            placeholder="Digite seu e-mail"
            error={errors.email}
            {...register("email")}
          />

          <Input
            id="password"
            variant="outline"
            label="Senha"
            autoComplete="off"
            pr="2.7rem"
            placeholder="Digite sua senha"
            isPassword
            error={errors.password}
            {...register("password")}
          />

          <Button w="fit-content" alignSelf="center" variant="link">
            Esqueceu sua senha?
          </Button>
        </Flex>

        <Button
          type="submit"
          form="login_form"
          w="100%"
          h="3.5rem"
          px="2rem"
          mt="1rem"
          colorScheme="green"
        >
          Fazer login
        </Button>

        <Flex gap="1" color="gray.200">
          <Text fontWeight="bold">Não tem uma conta?</Text>
          <Button
            w="fit-content"
            color="yellow.500"
            alignSelf="center"
            variant="link"
          >
            <Link href="/register">Crie Uma!</Link>
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
