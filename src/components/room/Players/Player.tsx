import { Flex, Image, Text } from '@chakra-ui/react'
import { NextComponentType } from 'next'

export const Player: NextComponentType = () => {
  return (
    <Flex
      draggable
      bg="gray.800"
      w="100%"
      align="center"
      flexDir="column"
      p="2"
      rounded="md"
    >
      <Image src="https://github.com/HaloSara121.png" alt="" />

      <Flex w="100%" mt="2">
        <Text textAlign="left" w="100%">
          HaloSara121
        </Text>
      </Flex>
    </Flex>
  )
}
