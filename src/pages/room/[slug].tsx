import type { NextPage } from 'next'

import { Flex } from '@chakra-ui/react'

import { RoomHeader } from '../../components/room/RoomHeader'
import { PlayersList } from '../../components/room/Players'

const Room: NextPage = () => {
  return (
    <Flex flexDir="column">
      <RoomHeader />

      <Flex>
        <PlayersList />
      </Flex>
    </Flex>
  )
}

export default Room
