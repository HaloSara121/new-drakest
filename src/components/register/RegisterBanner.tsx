import { Flex, Text, Image } from "@chakra-ui/react";
import { NextComponentType } from "next";

export const RegisterBanner: NextComponentType = () => {
  return (
    <Flex
      flexDir="column"
      align="center"
      justify="center"
      gap="3rem"
      bg="gray.700"
      flex="1"
      h="100vh"
      px="4px"
      boxShadow="dark-lg"
      position="relative"
      zIndex={2}
    >
      <Text fontSize="6xl" color="yellow.500" fontFamily="Aclonica">
        Drakest
      </Text>

      <Image src="/images/bg.png" w="35rem" mt="-10" alt="" />

      <Text fontSize="2xl">O seu site de RPG, simples e fácil.</Text>
    </Flex>
  );
};
