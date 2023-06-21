import { useState } from "react";
import { NextComponentType } from "next";
import { ChatCircleDots, X } from "phosphor-react";

import { Box, Flex, useDisclosure } from "@chakra-ui/react";

import { Message } from "./Message";
import { MessageInput } from "./MessageInput";

type Message = {
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

export const Chat: NextComponentType = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "message",
      author: {
        name: "HaloSara121",
        image:
          "https://img.wattpad.com/0b27397dc2ba5e804348d79bd5d84ff0c95f3d52/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6a315341595174437672655a57413d3d2d3837373230323537372e313630623063613065333664306664313334353438393932333132322e6a7067",
      },
      text: "Prólogo Neste último exercício da Parte 1, iremos praticar não só o que vimos até agora no curso mas também outra habilidade importante de um programador: utilizar e interagir com código escrito por terceiros. Aqui, você não irá implementar o seu programa do zero. Você irá partir de um programa já iniciado e irá completá-lo. Na verdade, esse é o caso mais comum na indústria de software, onde muitos desenvolvedores trabalham colaborativamente em um mesmo programa. Introdução Manuel Estandarte é monitor na disciplina Introdução à Produção Textual I na Universidade de Pasárgada (UPA). Durante o período letivo, Manuel descobriu que uma epidemia de COH-PIAH estava se espalhando pela UPA. Essa doença rara e altamente contagiosa faz com que indivíduos contaminados produzam, involuntariamente, textos muito semelhantes aos de outras pessoas. Após a entrega da primeira redação, Manuel desconfiou que alguns alunos estavam sofrendo de COH-PIAH. Manuel, preocupado com a saúde da turma, resolveu buscar um método para identificar os casos de COH-PIAH. Para isso, ele necessita da sua ajuda para desenvolver um programa que o auxilie a identificar os alunos contaminados.",
    },
    {
      type: "message",
      author: {
        name: "HaloSara121",
        image:
          "https://img.wattpad.com/0b27397dc2ba5e804348d79bd5d84ff0c95f3d52/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6a315341595174437672655a57413d3d2d3837373230323537372e313630623063613065333664306664313334353438393932333132322e6a7067",
      },
      text: "Prólogo Neste último exercício da Parte 1, iremos praticar não só o que vimos até agora no curso mas também outra habilidade importante de um programador: utilizar e interagir com código escrito por terceiros. Aqui, você não irá implementar o seu programa do zero. Você irá partir de um programa já iniciado e irá completá-lo. Na verdade, esse é o caso mais comum na indústria de software, onde muitos desenvolvedores trabalham colaborativamente em um mesmo programa. Introdução Manuel Estandarte é monitor na disciplina Introdução à Produção Textual I na Universidade de Pasárgada (UPA). Durante o período letivo, Manuel descobriu que uma epidemia de COH-PIAH estava se espalhando pela UPA. Essa doença rara e altamente contagiosa faz com que indivíduos contaminados produzam, involuntariamente, textos muito semelhantes aos de outras pessoas. Após a entrega da primeira redação, Manuel desconfiou que alguns alunos estavam sofrendo de COH-PIAH. Manuel, preocupado com a saúde da turma, resolveu buscar um método para identificar os casos de COH-PIAH. Para isso, ele necessita da sua ajuda para desenvolver um programa que o auxilie a identificar os alunos contaminados.",
    },
  ]);

  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex
      position="absolute"
      align="flex-end"
      bottom="4.6rem"
      gap={!isOpen ? "1rem" : "1"}
      left="1rem"
    >
      <Flex
        w={isOpen ? "35rem" : "1px"}
        h={isOpen ? "45rem" : "45rem"}
        opacity={isOpen ? "1" : "0"}
        ml={!isOpen ? "-2rem" : ""}
        flexDir="column"
        bg="gray.900"
        px="2"
        pb="0"
        rounded="lg"
        transition="width .5s, height .5s, opacity .5s"
        overflow="auto"
        border="1px"
        borderColor="black"
        zIndex={6}
        position="relative"
        className="noScroll"
      >
        {isOpen && (
          <Flex flexDir="column">
            <Flex gap="2" flexDir="column">
              {messages.map((message) => (
                <Message data={message} />
              ))}
            </Flex>
            <Box id="chat-end" h="2" />

            <Flex
              zIndex={8}
              bg="gray.900"
              w="100%"
              py="2"
              position="sticky"
              bottom="0"
            >
              <MessageInput setMessages={setMessages} />
            </Flex>
          </Flex>
        )}
      </Flex>

      <Flex
        w="16"
        h="16"
        align="center"
        justify="center"
        p="3"
        bg="gray.800"
        rounded="full"
        cursor="pointer"
        zIndex={5}
        transition="background .5s, transform .5s, color .5s"
        _hover={{ transform: "scale(1.1)", bg: "yellow.500", color: "black" }}
        onClick={onToggle}
      >
        {!isOpen ? <ChatCircleDots size={32} /> : <X size={32} />}
      </Flex>
    </Flex>
  );
};
