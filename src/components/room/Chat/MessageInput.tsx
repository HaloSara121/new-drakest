import { IconButton, Flex, Input } from "@chakra-ui/react";
import { PaperPlaneRight } from "phosphor-react";

export const MessageInput = () => {
  return (
    <Flex gap="1" w="100%">
      <Input variant="filled" placeholder="Escreva uma mensagem..." />

      <IconButton
        aria-label="enviar mensagem"
        color="gray.900"
        colorScheme="yellow"
      >
        <PaperPlaneRight weight="fill" size={24} />
      </IconButton>
    </Flex>
  );
};
