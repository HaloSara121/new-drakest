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

import { api } from "@/services/api";
import { Input } from "../common/Form/Input";

const ForgotPasswordFormValidationSchema = z.object({
  email: z.string().email("Formato do e-mail incorreto!").trim(),
});

type ForgotPasswordFormData = z.infer<
  typeof ForgotPasswordFormValidationSchema
>;

export const ForgotPasswordSection: NextComponentType = () => {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(ForgotPasswordFormValidationSchema),
    defaultValues: {
      email: "",
    },
  });

  const forgotPasswordFormSubmit = async (data: ForgotPasswordFormData) => {
    setIsLoading(true);

    await api
      .post(`/auth/forgot-password/`, {
        ...data,
      })
      .then((response) => {
        toast({
          status: "success",
          position: "top",
          description: response.data.message,
        });
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
        onSubmit={handleSubmit(forgotPasswordFormSubmit)}
        flexDir="column"
        maxW="25rem"
        w="100%"
        p="4"
        rounded="md"
        align="center"
        gap="4"
      >
        <Heading color="yellow.500">Esqueceu sua senha?</Heading>

        <Divider my="2" />

        <Flex flexDir="column" gap="1rem" w="100%">
          <Input
            variant="outline"
            label="E-mail"
            autoComplete="off"
            pr="2.7rem"
            placeholder="Digite seu e-mail"
            error={errors.email}
            {...register("email")}
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
          Enviar email
        </Button>
      </Flex>
    </Flex>
  );
};
