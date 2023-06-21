import { Avatar, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface MessageProps {
  data: {
    type:
      | "message"
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
        <Text fontWeight="bold">{data.author.name}</Text>

        {data.type === "command" ? (
          <Text
            w="100%"
            px="4"
            py="2"
            rounded="lg"
            boxShadow="inner"
            bg="gray.600"
            textAlign="center"
          >
            {data.text}
          </Text>
        ) : (
          <Text>{data.text}</Text>
        )}
      </Flex>
    </Flex>
  );
};
