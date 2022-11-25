import { Card, CardBody, CardFooter } from '@chakra-ui/card'
import {
  HStack,
  IconButton,
  Text,
  Image,
  Button,
  useToast,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { Copy, Pencil, SignIn, Trash } from 'phosphor-react'

export const RoomCard = () => {
  const router = useRouter()
  const toast = useToast()

  const roomId = '123456'

  const copyToClipboard = () => {
    navigator.clipboard.writeText(roomId)

    toast({
      description: 'O ID da sala foi copiado!',
      status: 'success',
    })
  }

  return (
    <Card
      variant="elevated"
      w="100%"
      rounded="lg"
      flex="1"
      bg="gray.700"
      flexDir="row"
      align="center"
    >
      <CardBody display="flex" justifyContent="center" p="1">
        <Image
          src="https://img.wattpad.com/0b27397dc2ba5e804348d79bd5d84ff0c95f3d52/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6a315341595174437672655a57413d3d2d3837373230323537372e313630623063613065333664306664313334353438393932333132322e6a7067"
          alt=""
          w="5rem"
          h="5rem"
          bg="gray.400"
          objectFit="scale-down"
          rounded="md"
          flexShrink="0"
        />
      </CardBody>
      <CardFooter display="flex" flexDir="column" p="2">
        <Text letterSpacing="wide" fontSize="lg" fontFamily="aclonica">
          Rossato Boldelair
        </Text>

        <HStack w="100%" justify="flex-end">
          <Button
            colorScheme="yellow"
            display="flex"
            gap=".5rem"
            px=".8rem"
            pl=".7rem"
            onClick={copyToClipboard}
          >
            <Copy weight="bold" /> #{roomId}
          </Button>

          <IconButton
            colorScheme="green"
            onClick={() => router.push(`room/${roomId}`)}
            aria-label="editar personagem"
          >
            <SignIn size={20} />
          </IconButton>

          <IconButton colorScheme="blue" aria-label="editar personagem">
            <Pencil size={20} />
          </IconButton>

          <IconButton colorScheme="red" aria-label="deletar personagem">
            <Trash size={20} />
          </IconButton>
        </HStack>
      </CardFooter>
    </Card>
  )
}
