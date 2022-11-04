import type { NextComponentType } from 'next'

import { Flex, HStack, Icon, Link, Text, Image } from '@chakra-ui/react'
import { ArrowLeft, Gear, List } from 'phosphor-react'

export const RoomHeader: NextComponentType = () => {
  return (
    <Flex as="header" h="4rem" bg="gray.700" justify="center" w="100%">
      <Flex justify="space-between" align="center" w="100%" maxW="1400px">
        <HStack alignItems="center" spacing="4">
          <Link href="/" fontSize="0">
            <Icon
              as={ArrowLeft}
              fontSize="24px"
              _hover={{ transform: 'scale(1.1)' }}
            />
          </Link>

          <Link href="" fontSize="0">
            <Icon
              as={Gear}
              fontSize="24px"
              _hover={{ transform: 'scale(1.1)' }}
            />
          </Link>

          <Link href="" fontSize="0">
            <Icon
              as={List}
              fontSize="24px"
              _hover={{ transform: 'scale(1.1)' }}
            />
          </Link>
        </HStack>

        <Text fontWeight="semibold" letterSpacing="wide" fontSize="2xl">
          Torre Negra
        </Text>

        <Flex>
          <Flex
            borderRadius="md"
            gap="3"
            h="12"
            pr="3"
            align="center"
            bg="gray.600"
          >
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
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
