import { Flex } from "@chakra-ui/react";
import { CharacterSection } from "./CharactersSection";
import { RoomsSection } from "./RoomsSections";

export const Main = () => {
  return (
    <Flex
      as="main"
      flex="1"
      w="100%"
      h="100%"
      bg="gray.900"
      rounded="xl"
      boxShadow="dark-lg"
      flexDir="column"
      overflow="auto"
      className="customScroll"
    >
      <CharacterSection />
      <RoomsSection />
    </Flex>
  );
};
