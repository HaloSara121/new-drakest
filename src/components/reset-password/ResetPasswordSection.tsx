import Link from "next/link";
import { useContext, useState } from "react";
import { useRouter } from "next/router";
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

import { AuthContext } from "@/contexts/AuthContext";
import { api } from "@/services/api";
import { Input } from "../common/Form/Input";

const ResetPasswordFormValidationSchema = z.object({
  password: z
    .string()
    .min(6, "A senha deve conter no mínimo 6 caracteres")
    .trim(),
  passwordConfirmation: z.string().trim(),
});

type ResetPasswordFormData = z.infer<typeof ResetPasswordFormValidationSchema>;

export const ResetPasswordSection: NextComponentType = () => {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(ResetPasswordFormValidationSchema),
    defaultValues: {
      password: "",
      passwordConfirmation: "",
    },
  });

  const resetPasswordFormSubmit = async (data: ResetPasswordFormData) => {
    setIsLoading(true);

    const params = router.asPath.split("/");
    const userId = params[2];
    const resetPasswordToken = params[3];
    console.log(params);

    await api
      .post(`/auth/password-reset/${userId}/${resetPasswordToken}`, {
        ...data,
      })
      .then((response) => {
        toast({
          status: "success",
          position: "top",
          description: response.data.message,
        });

        reset();
        return router.push("/login");
      })
      .catch((err) => {
        console.log(err);
        if (err.response?.data.fieldMessage !== "toast") {
          return setError(err.response?.data.fieldMessage, {
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

    return;
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
        onSubmit={handleSubmit(resetPasswordFormSubmit)}
        flexDir="column"
        maxW="25rem"
        w="100%"
        p="4"
        rounded="md"
        align="center"
        gap="4"
      >
        <Heading color="yellow.500">Redefinir senha</Heading>

        <Divider my="2" />

        <Flex flexDir="column" gap="1rem" w="100%">
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
          type="submit"
          isLoading={isLoading}
          form="login_form"
          w="100%"
          h="3.5rem"
          px="2rem"
          mt="1rem"
          colorScheme="green"
        >
          Redefinir senha
        </Button>
      </Flex>
    </Flex>
  );
};
