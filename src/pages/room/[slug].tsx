import type { NextPage } from 'next'

import { Flex } from '@chakra-ui/react'

import { RoomHeader } from '../../components/room/RoomHeader'
import { PlayersList } from '../../components/room/Players'
import { ShieldMaster } from '../../components/room/ShieldMaster'

const Room: NextPage = () => {
  return (
    <Flex flexDir="column" h="100vh">
      <RoomHeader />

      <Flex>
        <Flex flex="1" pb="3.6rem"></Flex>

        <PlayersList />
        <ShieldMaster />
      </Flex>
    </Flex>
  )
}

export default Room
