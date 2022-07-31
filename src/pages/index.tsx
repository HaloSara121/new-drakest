import type { NextPage } from 'next'

import { Flex, Image } from '@chakra-ui/react'
import { HomeHeader } from '../components/home/HomeHeader/HomeHeader'
import { JoinRoomForm } from '../components/home/JoinRoomForm'
import { CreateRoomForm } from '../components/home/CreateRoomForm'

const Home: NextPage = () => {
  return (
    <Flex align="center" flexDirection="column" px="4">
      <HomeHeader />

      <Image src="/images/bg.png" w="35rem" mt="-10" alt="" />

      <Flex justify="space-between" w="100%" maxW="700px" mt="20">
        <CreateRoomForm />

        <JoinRoomForm />
      </Flex>
    </Flex>
  )
}

export default Home
