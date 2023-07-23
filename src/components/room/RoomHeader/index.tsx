import type { NextComponentType } from "next";

import {
  Flex,
  HStack,
  Icon,
  Link,
  Text,
  Image,
  Button,
  useToast,
  useDisclosure,
  Avatar,
} from "@chakra-ui/react";
import {
  ArrowLeft,
  CaretLeft,
  CaretRight,
  Copy,
  Gear,
  List,
} from "phosphor-react";
import { useRouter } from "next/router";
import { useContext, useRef } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { ConfigDrawer } from "./ConfigDrawer";
import { ToolsDrawer } from "./ToolsDrawer";

export const RoomHeader: NextComponentType = () => {
  const {
    isOpen: configDrawerIsOpen,
    onClose: configDrawerOnClose,
    onOpen: configDrawerOnOpen,
  } = useDisclosure({ id: "configDrawer" });
  const {
    isOpen: toolsDrawerIsOpen,
    onClose: toolsDrawerOnClose,
    onOpen: toolsDrawerOnOpen,
    onToggle: toolsDrawerToggle,
  } = useDisclosure({ id: "toolsDrawer" });
  const { user } = useContext(AuthContext);
  const btnRef = useRef(null);
  const router = useRouter();
  const toast = useToast();

  const roomId = router.asPath.split("/")[2];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(roomId);

    toast({
      description: "O ID da sala foi copiado!",
      status: "success",
    });
  };

  return (
    <Flex as="header" h="4rem" bg="gray.900" justify="center" w="100%">
      <Flex justify="space-between" align="center" w="100%" maxW="1400px">
        <Flex gap="2rem" align="center">
          <Link href="/" fontSize="0">
            <Icon
              as={ArrowLeft}
              fontSize="28px"
              _hover={{ transform: "scale(1.1)" }}
            />
          </Link>

          <HStack alignItems="center" spacing="4">
            <Icon
              as={Gear}
              fontSize="24px"
              _hover={{ transform: "scale(1.1)" }}
              cursor="pointer"
              onClick={configDrawerOnOpen}
            />

            <Icon
              as={List}
              fontSize="24px"
              _hover={{ transform: "scale(1.1)" }}
              cursor="pointer"
              onClick={toolsDrawerOnOpen}
            />
          </HStack>
        </Flex>

        <Text fontWeight="semibold" letterSpacing="wide" fontSize="2xl">
          Torre Negra
        </Text>

        <Flex align="center" gap="1rem">
          <Button
            colorScheme="yellow"
            display="flex"
            gap=".5rem"
            px=".8rem"
            onClick={copyToClipboard}
          >
            <Copy weight="bold" /> #{roomId}
          </Button>

          <Flex rounded="md" gap="3" h="12" pr="3" align="center" bg="gray.600">
            <Link href="/profile">
              <Image
                as={user?.image ? Image : Avatar}
                name={user?.name}
                src={user?.image}
                w="12"
                cursor="pointer"
                rounded="md"
                _hover={{ boxShadow: "0 0 0 3px #D69E2E" }}
                alt="Imagem de perfil"
              />
            </Link>

            <Text fontWeight="bold" fontFamily="Quicksand">
              {user?.name}
            </Text>
          </Flex>
        </Flex>

        <ConfigDrawer
          isOpen={configDrawerIsOpen}
          onClose={configDrawerOnClose}
        />

        <Flex
          bg="gray.900"
          position="absolute"
          left="0"
          top="0"
          w={toolsDrawerIsOpen ? "33.1rem" : "4"}
          h="100vh"
          transition="width .150s "
          align="center"
          justify="flex-end"
          onClick={toolsDrawerToggle}
          cursor="pointer"
          zIndex={20}
        >
          <Flex
            h="20"
            bg="gray.700"
            border="1px solid"
            borderColor="gray.900"
            align="center"
            justify="center"
          >
            <Icon as={toolsDrawerIsOpen ? CaretLeft : CaretRight} />
          </Flex>

          <ToolsDrawer
            isOpen={toolsDrawerIsOpen}
            onClose={toolsDrawerOnClose}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
