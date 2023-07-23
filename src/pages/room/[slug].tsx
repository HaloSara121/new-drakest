import type { GetServerSideProps, NextPage } from "next";

import { Flex } from "@chakra-ui/react";

import { io } from "socket.io-client";

import { RoomHeader } from "../../components/room/RoomHeader";
import { PlayersList } from "../../components/room/Players";
import { ShieldMaster } from "../../components/room/ShieldMaster";
import { Chat } from "@/components/room/Chat";
import { api } from "@/services/api";
import { RoomContextProvider } from "@/contexts/RoomContext";

const Room: NextPage = () => {
  // const socket = io("http://localhost:3333");
  // socket.emit("entrei", `socket ${socket.id} entrou sala`);

  return (
    <RoomContextProvider>
      <Flex flexDir="column" h="100vh">
        <RoomHeader />

        <Flex>
          <Flex flex="1" pb="3.6rem"></Flex>

          <PlayersList />
          <ShieldMaster />
          <Chat />
        </Flex>
      </Flex>
    </RoomContextProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const token = req.cookies["auth-token"];

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const response = await api.get("/auth/validate", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status !== 200) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default Room;
