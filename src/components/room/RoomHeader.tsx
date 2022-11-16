import type { NextComponentType } from 'next'

import {
  Flex,
  HStack,
  Icon,
  Link,
  Text,
  Image,
  Button,
  useToast,
} from '@chakra-ui/react'
import { ArrowLeft, Copy, Gear, List } from 'phosphor-react'
import { useRouter } from 'next/router'

export const RoomHeader: NextComponentType = () => {
  const router = useRouter()
  const toast = useToast()

  const roomId = router.asPath.split('/')[2]

  const copyToClipboard = () => {
    navigator.clipboard.writeText(roomId)

    toast({
      description: 'O ID da sala foi copiado!',
      status: 'success',
    })
  }

  return (
    <Flex as="header" h="4rem" bg="gray.700" justify="center" w="100%">
      <Flex justify="space-between" align="center" w="100%" maxW="1400px">
        <Flex gap="2rem" align="center">
          <Link href="/" fontSize="0">
            <Icon
              as={ArrowLeft}
              fontSize="28px"
              _hover={{ transform: 'scale(1.1)' }}
            />
          </Link>

          <HStack alignItems="center" spacing="4">
            <Icon
              as={Gear}
              fontSize="24px"
              _hover={{ transform: 'scale(1.1)' }}
              cursor="pointer"
            />

            <Icon
              as={List}
              fontSize="24px"
              _hover={{ transform: 'scale(1.1)' }}
              cursor="pointer"
            />
          </HStack>
        </Flex>

        <Text fontWeight="semibold" letterSpacing="wide" fontSize="2xl">
          Torre Negra
        </Text>

        <Flex align="center" gap="1rem">
          <Button
            colorScheme="yellow"
            display="flex"
            gap=".5rem"
            px=".8rem"
            onClick={copyToClipboard}
          >
            <Copy weight="bold" /> #{roomId}
          </Button>

          <Flex rounded="md" gap="3" h="12" pr="3" align="center" bg="gray.600">
            <Image
              src="https://github.com/HaloSara121.png"
              w="12"
              cursor="pointer"
              rounded="md"
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
