import { Flex, Text, Image } from '@chakra-ui/react'
import { NextComponentType } from 'next'

export const Banner: NextComponentType = () => {
  return (
    <Flex
      flexDir="column"
      align="center"
      justify="center"
      gap="3rem"
      bg="gray.700"
      flex="1"
      h="100vh"
      px="4px"
      boxShadow="3px 3px 10px #0004"
    >
      <Text fontSize="6xl" color="yellow.500" fontFamily="Aclonica">
        Drakest
      </Text>

      <Image src="/images/bg.png" w="35rem" mt="-10" alt="" />

      <Text fontSize="2xl">O seu site de RPG, simples e fácil.</Text>
    </Flex>
  )
}
