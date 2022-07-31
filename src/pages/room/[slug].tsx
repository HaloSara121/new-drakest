import type { NextPage } from 'next'

import { Flex } from '@chakra-ui/react'

import { RoomHeader } from '../../components/room/RoomHeader'

const Room: NextPage = () => {
  return (
    <Flex>
      <RoomHeader />
    </Flex>
  )
}

export default Room
