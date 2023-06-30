import Link from "next/link";
import { NextComponentType } from "next";
import { Eye, EyeClosed } from "phosphor-react";
import { FcGoogle } from "react-icons/fc";

import {
  Button,
  Divider,
  Flex,
  Heading,
  Icon,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Input } from "../common/Form/Input";

export const RegisterSection: NextComponentType = () => {
  const { isOpen: passwordIsOpen, onToggle: passwordOnToggle } = useDisclosure({
    id: "password",
  });
  const { isOpen: confirmPasswordIsOpen, onToggle: confirmPasswordOnToggle } =
    useDisclosure({
      id: "confirm_password",
    });

  return (
    <Flex w="50rem" h="100vh" justify="center" align="center" bg="gray.800">
      <Flex
        as="form"
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
            id="name"
            variant="outline"
            label="Nome"
            placeholder="Digite seu nome"
          />

          <Input
            id="email"
            variant="outline"
            label="E-mail"
            placeholder="Digite seu e-mail"
          />

          <Flex position="relative">
            <Input
              id="password"
              type={passwordIsOpen ? "text" : "password"}
              variant="outline"
              label="Senha"
              autoComplete="off"
              pr="2.7rem"
              placeholder="Digite sua senha"
            />
            <Icon
              as={passwordIsOpen ? EyeClosed : Eye}
              onClick={passwordOnToggle}
              cursor="pointer"
              position="absolute"
              fontSize="22"
              right="1rem"
              bottom=".75rem"
              rounded="md"
              zIndex="2"
              my="auto"
            />
          </Flex>

          <Flex position="relative">
            <Input
              id="confirm-password"
              type={confirmPasswordIsOpen ? "text" : "password"}
              variant="outline"
              label="Confirmar senha"
              autoComplete="off"
              pr="2.7rem"
              placeholder="Confirme sua senha"
            />
            <Icon
              as={confirmPasswordIsOpen ? EyeClosed : Eye}
              onClick={confirmPasswordOnToggle}
              cursor="pointer"
              position="absolute"
              fontSize="22"
              right="1rem"
              bottom=".75rem"
              rounded="md"
              zIndex="2"
              my="auto"
            />
          </Flex>
        </Flex>

        <Button w="100%" h="3.5rem" px="2rem" mt="1rem" colorScheme="green">
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
