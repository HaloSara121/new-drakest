import { NextComponentType } from 'next'

import { Divider, Flex, Icon, IconButton, Image, Text } from '@chakra-ui/react'

import { FcGoogle } from 'react-icons/fc'
import { SignOut } from 'phosphor-react'

export const LoginButton: NextComponentType = () => {
  const user: null | { name: string } = { name: 'vinicius' }

  return (
    <Flex color="black">
      {user ? (
        <Flex borderRadius="md" gap="3" h="12" align="center" bg="gray.100">
          <Image
            src="https://github.com/HaloSara121.png"
            w="12"
            cursor="pointer"
            borderRadius="md"
            _hover={{ boxShadow: '0 0 0 3px #D69E2E' }}
            alt="Imagem de perfil"
          />

          <Text fontWeight="bold" fontFamily="Quicksand">
            Vinicius Paes Berna
          </Text>

          <Divider orientation="vertical" borderColor="gray.800" border="1px" />

          <Icon
            mr="3"
            fontSize="20"
            as={SignOut}
            cursor="pointer"
            weight="bold"
            _hover={{ transform: 'scale(1.1)', color: 'red.500' }}
          />
        </Flex>
      ) : (
        <IconButton
          aria-label="botão de login"
          w="12"
          h="12"
          _hover={{ filter: 'brightness(0.8)' }}
        >
          <FcGoogle size={32} />
        </IconButton>
      )}
    </Flex>
  )
}
