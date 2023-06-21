import type { NextPage } from "next";

import { Flex } from "@chakra-ui/react";

import { io } from "socket.io-client";

import { RoomHeader } from "../../components/room/RoomHeader";
import { PlayersList } from "../../components/room/Players";
import { ShieldMaster } from "../../components/room/ShieldMaster";
import { Chat } from "@/components/room/Chat";

const Room: NextPage = () => {
  // const socket = io("http://localhost:3333");
  // socket.emit("entrei", `socket ${socket.id} entrou sala`);

  return (
    <Flex flexDir="column" h="100vh">
      <RoomHeader />

      <Flex>
        <Flex flex="1" pb="3.6rem"></Flex>

        <PlayersList />
        {/* <ShieldMaster /> */}
        <Chat />
      </Flex>
    </Flex>
  );
};

export default Room;
