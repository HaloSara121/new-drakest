import {
  Flex,
  Text,
  Tab,
  TabList,
  Tabs,
  TabPanels,
  TabPanel,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ToggleShieldMasterButton } from "./ToggleShieldMastarButton";

export const ShieldMaster = () => {
  const { onToggle, isOpen, onOpen } = useDisclosure();

  return (
    <Flex
      as={motion.div}
      bg="gray.900"
      w="100%"
      h={isOpen ? "20rem" : "3.6rem"}
      transition="height .5s"
      position="absolute"
      bottom="0"
      zIndex={10}
      py="2"
      boxShadow="-3px 3px 10px #0004"
      borderTop="3px solid"
      borderColor="gray.600"
    >
      <Tabs
        variant="soft-rounded"
        rounded="md"
        isFitted
        w="100%"
        mx="auto"
        px="1rem"
      >
        <TabList flex="1" gap="2">
          <Tab
            bg="gray.700"
            color="white"
            transition="all .2s"
            onClick={onOpen}
            rounded="md"
            _selected={{
              bg: "yellow.500",
              color: "black",
              _hover: { filter: "none" },
            }}
            _hover={{ filter: "brightness(.8)" }}
          >
            BOSSES
          </Tab>

          <Tab
            bg="gray.700"
            color="white"
            transition="all .2s"
            onClick={onOpen}
            rounded="md"
            _selected={{
              bg: "yellow.500",
              color: "black",
              _hover: { filter: "none" },
            }}
            _hover={{ filter: "brightness(.8)" }}
          >
            NPCs
          </Tab>

          <Tab
            bg="gray.700"
            color="white"
            transition="all .2s"
            onClick={onOpen}
            rounded="md"
            _selected={{
              bg: "yellow.500",
              color: "black",
              _hover: { filter: "none" },
            }}
            _hover={{ filter: "brightness(.8)" }}
          >
            PLAYERS
          </Tab>

          <Tab
            bg="gray.700"
            color="white"
            transition="all .2s"
            onClick={onOpen}
            rounded="md"
            _selected={{
              bg: "yellow.500",
              color: "black",
              _hover: { filter: "none" },
            }}
            _hover={{ filter: "brightness(.8)" }}
          >
            SALA
          </Tab>

          <ToggleShieldMasterButton isOpen={isOpen} onToggle={onToggle} />
        </TabList>
        {isOpen && (
          <TabPanels mt="2">
            <TabPanel h="16rem">
              <Text>BOSSES</Text>
            </TabPanel>
            <TabPanel h="16rem">
              <Text>NPCs</Text>
            </TabPanel>
            <TabPanel h="16rem">
              <Text>PLAYERS</Text>
            </TabPanel>
            <TabPanel h="16rem">
              <Text>SALA</Text>
            </TabPanel>
          </TabPanels>
        )}
      </Tabs>
    </Flex>
  );
};
