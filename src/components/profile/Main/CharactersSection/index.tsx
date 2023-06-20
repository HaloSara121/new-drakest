import { Divider, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { NoteBlank } from "phosphor-react";
import { useState } from "react";
import { CharacterCard } from "./CharacterCard";
import { CustomHeading } from "./CustomHeading";

export const CharacterSection = () => {
  const [characters] = useState<number[]>([1, 2]);

  return (
    <Flex as="section" w="100%" flexDir="column">
      <CustomHeading />

      <Divider boxShadow="dark-lg" w="100%" />

      {characters.length > 0 ? (
        <SimpleGrid p="4" templateColumns="1fr 1fr 1fr" gap="4" w="100%">
          {characters.map((character) => (
            <CharacterCard key={character} />
          ))}
        </SimpleGrid>
      ) : (
        <Flex w="100%" h="20rem" justify="center" align="center">
          <NoteBlank weight="thin" size="32" />
          <Text fontSize="xl">
            &nbsp;Crie um personagem e poderá ve-lo aqui!
          </Text>
        </Flex>
      )}
    </Flex>
  );
};
