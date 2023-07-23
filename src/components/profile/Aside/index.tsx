import { HouseLine, SignOut } from "phosphor-react";

import { Flex, Link, Tooltip } from "@chakra-ui/react";

import { AvatarSection } from "./AvatarSection";
import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";
import { useRouter } from "next/router";

export const Aside = () => {
  const { signOut } = useContext(AuthContext);
  const router = useRouter();

  const customSignOut = () => {
    signOut();
    router.push("/login");
  };

  return (
    <Flex
      as="aside"
      w="25rem"
      h="fit-content"
      bg="gray.900"
      rounded="xl"
      flexDir="column"
      pl="7"
      p="6"
      boxShadow="dark-lg"
    >
      <Flex as="header" justify="space-between" w="100%">
        <Link href="/">
          <Tooltip label="Home">
            <HouseLine size={32} />
          </Tooltip>
        </Link>

        <Link href="/login" onClick={customSignOut}>
          <Tooltip label="Desconectar">
            <SignOut size={32} />
          </Tooltip>
        </Link>
      </Flex>

      <AvatarSection />
    </Flex>
  );
};
