import { NextComponentType } from "next";

import {
  Divider,
  Flex,
  Icon,
  IconButton,
  Text,
  Image,
  Tooltip,
} from "@chakra-ui/react";

import { FcGoogle } from "react-icons/fc";
import { SignOut } from "phosphor-react";
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { useRouter } from "next/router";

export const LoginButton: NextComponentType = () => {
  const { user, signOut } = useContext(AuthContext);
  const router = useRouter();
  // const user: null | { name: string } = { name: "vinicius" };

  const customSignOut = () => {
    signOut();
    router.push("/login");
  };

  return (
    <Flex color="black">
      {/* {user ? ( */}
      <Flex borderRadius="md" gap="3" h="12" align="center" bg="gray.100">
        <Link href="/profile">
          <Image
            src={
              user?.image ||
              "https://i.pinimg.com/564x/c1/b9/b7/c1b9b728c7f2bd396ceb2a85d48277b9.jpg"
            }
            w="12"
            cursor="pointer"
            borderRadius="md"
            _hover={{ boxShadow: "0 0 0 3px #D69E2E" }}
            alt="Imagem de perfil"
          />
        </Link>

        <Text fontWeight="bold" fontFamily="Quicksand">
          {user?.name}
        </Text>

        <Divider orientation="vertical" borderColor="gray.800" border="1px" />

        <Tooltip label="Desconectar">
          <Icon
            mr="3"
            fontSize="20"
            as={SignOut}
            onClick={customSignOut}
            cursor="pointer"
            weight="bold"
            _hover={{ transform: "scale(1.1)" }}
          />
        </Tooltip>
      </Flex>
      {/*) : (
      //   <IconButton
      //     aria-label="botão de login"
      //     w="12"
      //     h="12"
      //     _hover={{ filter: "brightness(0.8)" }}
      //   >
      //     <FcGoogle size={32} />
      //   </IconButton>
      // )} */}
    </Flex>
  );
};
