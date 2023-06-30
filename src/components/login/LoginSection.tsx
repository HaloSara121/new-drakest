import Link from "next/link";
import { NextComponentType } from "next";
import { FcGoogle } from "react-icons/fc";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button, Divider, Flex, Heading, Text } from "@chakra-ui/react";

import { Input } from "../common/Form/Input";

const LoginFormValidationSchema = z.object({
  email: z.string().email("Formato de e-mail inválido").trim(),
  password: z
    .string()
    .min(6, "A senha deve conter no mínimo 6 caracteres")
    .trim(),
});

type LoginFormData = z.infer<typeof LoginFormValidationSchema>;

export const LoginSection: NextComponentType = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginFormValidationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const customSubmit = (data: LoginFormData) => {
    console.log(data);
    reset();
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
        flexDir="column"
        onSubmit={handleSubmit(customSubmit)}
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
