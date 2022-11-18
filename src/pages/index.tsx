import type { NextPage } from 'next'

import { Flex } from '@chakra-ui/react'

import { Banner } from '../components/home/Banner'
import { Actions } from '../components/home/Actions'

const Home: NextPage = () => {
  return (
    <Flex align="center">
      <Banner />

      <Actions />
    </Flex>
  )
}

export default Home
