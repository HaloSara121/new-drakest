import type { NextComponentType } from 'next'

import { Flex } from '@chakra-ui/react'
import { LoginButton } from './LoginButton'

export const HomeHeader: NextComponentType = () => {
  return (
    <Flex
      as="header"
      h="10rem"
      py="10"
      px="10"
      position="absolute"
      top="2rem"
      right="5rem"
    >
      <LoginButton />
    </Flex>
  )
}
