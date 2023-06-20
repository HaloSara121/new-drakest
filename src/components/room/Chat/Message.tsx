import { Avatar, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface MessageProps {
  data: {
    type: "message" | "command" | "notification";
    author: string;
    text: string;
    socket_id: string;
  };
}

const item = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.3,
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
      minH="fit-content"
      p="2"
      gap="1rem"
      rounded="lg"
      boxShadow="2xl"
      bg="gray.700"
      overflow="hidden"
      opacity="1"
    >
      <Avatar
        src="https://img.wattpad.com/0b27397dc2ba5e804348d79bd5d84ff0c95f3d52/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6a315341595174437672655a57413d3d2d3837373230323537372e313630623063613065333664306664313334353438393932333132322e6a7067"
        size="md"
      />

      <Flex w="100%" flexDir="column">
        <Text fontWeight="bold">{data.author}</Text>

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
