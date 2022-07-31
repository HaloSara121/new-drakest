import type { NextComponentType } from 'next'

import { Flex, Text } from '@chakra-ui/react'
import { LoginButton } from './LoginButton'

export const HomeHeader: NextComponentType = () => {
  return (
    <Flex
      as="header"
      h="10rem"
      w="100%"
      maxW="1400px"
      py="10"
      px="10"
      align="center"
      justify="space-between"
    >
      <Text fontSize="4xl" color="yellow.500" fontFamily="Aclonica">
        Drakest
      </Text>

      <LoginButton />
    </Flex>
  )
}
