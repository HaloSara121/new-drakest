import { Flex } from '@chakra-ui/react'
import { NextPage } from 'next'
import { Aside } from '../components/profile/Aside'
import { Main } from '../components/profile/Main'

const Profile: NextPage = () => {
  return (
    <Flex
      maxW="1420px"
      w="100%"
      h="100vh"
      flexDir={['column', 'column', 'column', 'row']}
      align={['center', 'center', 'center', 'flex-start']}
      justify="space-between"
      gap="2rem"
      mx="auto"
      py="5rem"
      px="4"
    >
      <Aside />

      <Main />
    </Flex>
  )
}

export default Profile
