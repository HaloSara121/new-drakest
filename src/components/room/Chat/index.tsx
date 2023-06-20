import { Flex, useDisclosure } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { NextComponentType } from "next";
import { ChatCircleDots, X } from "phosphor-react";
import { Message } from "./Message";
import { MessageInput } from "./MessageInput";

export const Chat: NextComponentType = () => {
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
        w={isOpen ? "30rem" : "1px"}
        h={isOpen ? "30rem" : "30rem"}
        flexDir="column"
        opacity={isOpen ? "1" : "0"}
        bg="gray.900"
        p="2"
        pb="0"
        ml={!isOpen ? "-2rem" : ""}
        rounded="lg"
        transition="width .5s, height .5s"
        overflowX="hidden"
        position="relative"
        border="1px"
        borderColor="black"
        zIndex={6}
        className="noScroll"
      >
        {isOpen && (
          <Flex gap="4" flexDir="column" position="relative">
            <Flex gap="2" flexDir="column" overflowY="auto">
              <Message
                data={{
                  type: "message",
                  author: "HaloSara121",
                  text: "Prólogo Neste último exercício da Parte 1, iremos praticar não só o que vimos até agora no curso mas também outra habilidade importante de um programador: utilizar e interagir com código escrito por terceiros. Aqui, você não irá implementar o seu programa do zero. Você irá partir de um programa já iniciado e irá completá-lo. Na verdade, esse é o caso mais comum na indústria de software, onde muitos desenvolvedores trabalham colaborativamente em um mesmo programa. Introdução Manuel Estandarte é monitor na disciplina Introdução à Produção Textual I na Universidade de Pasárgada (UPA). Durante o período letivo, Manuel descobriu que uma epidemia de COH-PIAH estava se espalhando pela UPA. Essa doença rara e altamente contagiosa faz com que indivíduos contaminados produzam, involuntariamente, textos muito semelhantes aos de outras pessoas. Após a entrega da primeira redação, Manuel desconfiou que alguns alunos estavam sofrendo de COH-PIAH. Manuel, preocupado com a saúde da turma, resolveu buscar um método para identificar os casos de COH-PIAH. Para isso, ele necessita da sua ajuda para desenvolver um programa que o auxilie a identificar os alunos contaminados.",
                  socket_id: "algo",
                }}
              />
              <Message
                data={{
                  type: "command",
                  author: "HaloSara121",
                  text: "Rolou os dados: 1D20",
                  socket_id: "algo",
                }}
              />
              <Message
                data={{
                  type: "notification",
                  author: "server",
                  text: "HaloSara121 deixou a sala",
                  socket_id: "algo",
                }}
              />
            </Flex>

            <Flex position="sticky" bg="gray.900" w="100%" py="2" bottom="0">
              <MessageInput />
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
        // ml={isOpen ? "-1.5rem" : ""}
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
