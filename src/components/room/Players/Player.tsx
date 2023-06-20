import { Flex, Image, Text } from "@chakra-ui/react";
import { NextComponentType } from "next";

export const Player: NextComponentType = () => {
  return (
    <Flex
      draggable
      bg="gray.700"
      w="100%"
      align="center"
      flexDir="column"
      p="2"
      rounded="md"
    >
      <Image
        src="https://img.wattpad.com/0b27397dc2ba5e804348d79bd5d84ff0c95f3d52/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6a315341595174437672655a57413d3d2d3837373230323537372e313630623063613065333664306664313334353438393932333132322e6a7067"
        width="calc(10rem - 16px)"
        height="calc(10rem - 16px)"
        objectFit="cover"
        alt=""
      />

      <Flex w="100%" mt="2">
        <Text textAlign="left" w="100%">
          HaloSara121
        </Text>
      </Flex>
    </Flex>
  );
};
