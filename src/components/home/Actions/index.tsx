import { Flex } from "@chakra-ui/react";
import { NextComponentType } from "next";

import { HomeHeader } from "../HomeHeader/HomeHeader";
import { CreateRoomForm } from "./CreateRoomForm";
import { JoinRoomForm } from "./JoinRoomForm";

export const Actions: NextComponentType = () => {
  return (
    <Flex
      minW="50rem"
      h="100vh"
      justify="center"
      align="center"
      position="relative"
      px="4px"
      bg="gray.800"
    >
      <HomeHeader />

      <Flex flexDir="column" gap="6rem" w="25rem" mt="8rem">
        <CreateRoomForm />

        <JoinRoomForm />
      </Flex>
    </Flex>
  );
};
