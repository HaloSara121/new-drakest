import { useCallback } from "react";
import { motion } from "framer-motion";

import { Avatar, Flex, Text } from "@chakra-ui/react";

interface MessageProps {
  data: {
    type:
      | "speak"
      | "command"
      | "action"
      | "whisper"
      | "thought"
      | "notification";
    author: {
      name: string;
      image: string;
    };
    text: string;
  };
}

const item = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.2,
    },
  },
};

export const Message = ({ data }: MessageProps) => {
  const selectedMessageTypePT = useCallback(() => {
    switch (data.type) {
      case "command":
        return "Comando";
      case "action":
        return "Ação";
      case "thought":
        return "Pensamento";
      case "whisper":
        return "Sussuro";
      default:
        return "Mensagem";
    }
  }, []);

  const selectedMessageTypeColor = useCallback(() => {
    switch (data.type) {
      case "command":
        return "yellow.500";
      case "action":
        return "red.500";
      case "thought":
        return "teal.500";
      case "whisper":
        return "whiteAlpha.500";
      default:
        return "gray.50";
    }
  }, []);

  if (data.type === "notification") {
    return (
      <Text
        as={motion.div}
        variants={item}
        initial="hidden"
        animate="show"
        w="100%"
        my="2"
        textAlign="center"
      >
        {data.text}
      </Text>
    );
  }

  return (
    <Flex
      as={motion.div}
      variants={item}
      initial="hidden"
      animate="show"
      minW="100%"
      p="2"
      gap="1rem"
      rounded="lg"
      boxShadow="2xl"
      bg="gray.700"
      overflow="hidden"
      opacity="1"
    >
      <Avatar src={data.author.image} size="md" />

      <Flex w="100%" flexDir="column">
        <Flex gap="4" align="center" pr="4">
          <Text fontWeight="bold" fontSize="lg">
            {data.author.name}
          </Text>

          <Flex
            border="1px solid"
            borderColor={selectedMessageTypeColor()}
            rounded="full"
          >
            <Text
              color={selectedMessageTypeColor()}
              px="2"
              fontWeight="medium"
              fontSize="xs"
            >
              {selectedMessageTypePT()}
            </Text>
          </Flex>
        </Flex>

        {data.type === "command" ? (
          <Text
            w="100%"
            px="4"
            py="2"
            bg="gray.600"
            rounded="lg"
            boxShadow="inner"
            textAlign="center"
            mt="1"
          >
            {data.text}
          </Text>
        ) : (
          <Text
            color={data.type === "whisper" ? "whiteAlpha.600" : "normal"}
            fontStyle={data.type === "thought" ? "italic" : "normal"}
            fontWeight={data.type === "action" ? "black" : "normal"}
            textShadow={
              data.type === "action" || data.type === "thought"
                ? "-1px 1px black"
                : "normal"
            }
          >
            {data.text}
          </Text>
        )}
      </Flex>
    </Flex>
  );
};
