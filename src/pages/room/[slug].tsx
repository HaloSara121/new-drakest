import type { NextPage } from 'next'

import { Button, Flex, useDisclosure } from '@chakra-ui/react'

import { RoomHeader } from '../../components/room/RoomHeader'
import { PlayersList } from '../../components/room/Players'
import { ShieldMaster } from '../../components/room/ShieldMaster'

const Room: NextPage = () => {
  const { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <Flex flexDir="column" h="100vh">
      <RoomHeader />

      <Flex>
        <Button onClick={onOpen}></Button>
        <PlayersList />
        <ShieldMaster isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
      </Flex>
    </Flex>
  )
}

export default Room
