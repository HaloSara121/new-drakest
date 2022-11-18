import { VStack } from '@chakra-ui/react'
import { NextComponentType } from 'next'
import { Player } from './Player'

export const PlayersList: NextComponentType = () => {
  return (
    <VStack
      bg="gray.700"
      w="10rem"
      h="49rem"
      p="2"
      rounded="lg"
      position="absolute"
      right="6"
      top="5.5rem"
      boxShadow="3px 3px 10px #0009"
      overflow="auto"
      className="noScroll"
    >
      <Player />
      <Player />
      <Player />
      <Player />
      <Player />
      <Player />
    </VStack>
  )
}
