import { Divider, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { RoomCard } from "./RoomCard";
import { CustomHeading } from "./CustomHeading";
import { useState } from "react";
import { NoteBlank } from "phosphor-react";

export const RoomsSection = () => {
  const [rooms] = useState<number[]>([1, 2]);

  return (
    <Flex as="section" w="100%" flexDir="column" mt="1rem">
      <CustomHeading />

      <Divider boxShadow="dark-lg" w="100%" />

      {rooms.length > 0 ? (
        <SimpleGrid p="4" templateColumns="1fr 1fr" gap="4" w="100%">
          {rooms.map((room) => (
            <RoomCard key={room} />
          ))}
        </SimpleGrid>
      ) : (
        <Flex w="100%" h="18rem" justify="center" align="center">
          <NoteBlank weight="thin" size="32" />
          <Text fontSize="xl">&nbsp;Crie uma sala e poderá ve-la aqui!</Text>
        </Flex>
      )}
    </Flex>
  );
};
