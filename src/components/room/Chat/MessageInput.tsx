import { AuthContext } from "@/contexts/AuthContext";
import {
  IconButton,
  Flex,
  Input,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { PaperPlaneRight } from "phosphor-react";
import { useContext, useState } from "react";

type MessageType =
  | "speak"
  | "command"
  | "action"
  | "whisper"
  | "thought"
  | "notification";

type Message = {
  type: MessageType;
  author: {
    name: string;
    image: string;
  };
  text: string;
};

interface MessageInputProps {
  setMessages: (
    messages: Message[] | ((prevState: Message[]) => Message[])
  ) => void;
}

export const MessageInput = ({ setMessages }: MessageInputProps) => {
  const { user } = useContext(AuthContext);

  const [message, setMessage] = useState("");
  const [selectedMessageType, setSelectedMessageType] =
    useState<MessageType>("speak");

  const selectedMessageTypePT = () => {
    switch (selectedMessageType) {
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
  };

  const selectedMessageTypeColor = () => {
    switch (selectedMessageType) {
      case "command":
        return "yellow";
      case "action":
        return "red";
      case "thought":
        return "teal";
      case "whisper":
        return "whiteAlpha";
      default:
        return "gray";
    }
  };

  const createNewMessage = () => {
    if (message === "") return;

    const newMessage: Message = {
      type: selectedMessageType,
      author: {
        name: `HaloSara121 (${user?.name})`,
        image:
          "https://img.wattpad.com/0b27397dc2ba5e804348d79bd5d84ff0c95f3d52/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6a315341595174437672655a57413d3d2d3837373230323537372e313630623063613065333664306664313334353438393932333132322e6a7067",
      },
      text: message,
    };

    setMessages((state) => [...state, newMessage]);
    setMessage("");
    scrollToChatEnd();
  };

  const scrollToChatEnd = () => {
    const chatEnd = document.getElementById("chat-end");
    if (chatEnd)
      setTimeout(() => chatEnd.scrollIntoView({ behavior: "smooth" }), 50);
  };

  return (
    <Flex gap="2" w="100%" maxH="2.5rem" overflow="hidden">
      <Flex w="100%" gap="2">
        <Input
          variant="filled"
          color="gray.900"
          bg="white"
          flex="1"
          _focus={{ bg: "white" }}
          value={message}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              createNewMessage();
            }
          }}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          placeholder="Escreva uma mensagem..."
        />

        <Menu strategy="fixed">
          <MenuButton
            as={Button}
            w="fit-content"
            colorScheme={selectedMessageTypeColor()}
            aria-label="Options"
            variant="outline"
            transition="filter .2s"
            bg="gray.900"
            _hover={{ filter: "brightness(.8)" }}
            _active={{}}
            px="2"
          >
            {selectedMessageTypePT()}
          </MenuButton>

          <MenuList bg="gray.800">
            <MenuItem
              onClick={() => setSelectedMessageType("speak")}
              _focus={{ bg: "gray.700" }}
              _active={{ bg: "gray.700" }}
            >
              Mensagem
            </MenuItem>
            <MenuItem
              onClick={() => setSelectedMessageType("action")}
              _focus={{ bg: "gray.700" }}
              _active={{ bg: "gray.700" }}
            >
              Ação
            </MenuItem>
            <MenuItem
              onClick={() => setSelectedMessageType("thought")}
              _focus={{ bg: "gray.700" }}
              _active={{ bg: "gray.700" }}
            >
              Pensamento
            </MenuItem>
            <MenuItem
              onClick={() => setSelectedMessageType("whisper")}
              _focus={{ bg: "gray.700" }}
              _active={{ bg: "gray.700" }}
            >
              Sussurro
            </MenuItem>
            <MenuItem
              onClick={() => setSelectedMessageType("command")}
              _focus={{ bg: "gray.700" }}
              _active={{ bg: "gray.700" }}
            >
              Comando
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>

      <IconButton
        aria-label="enviar mensagem"
        color="gray.900"
        colorScheme="yellow"
        onClick={createNewMessage}
      >
        <PaperPlaneRight weight="fill" size={24} />
      </IconButton>
    </Flex>
  );
};
