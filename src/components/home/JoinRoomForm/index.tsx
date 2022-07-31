import type { NextComponentType } from 'next'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { Button, Flex, Text } from '@chakra-ui/react'

import { Input } from '../../common/Form/Input'

const JoinRoomFormValidationSchema = zod.object({
  roomId: zod.string().length(6, 'O id da sala deve ter 6 digitos'),
})

type JoinRoomFormData = zod.infer<typeof JoinRoomFormValidationSchema>

export const JoinRoomForm: NextComponentType = () => {
  const { register, handleSubmit } = useForm<JoinRoomFormData>({
    resolver: zodResolver(JoinRoomFormValidationSchema),
    defaultValues: {
      roomId: '000000',
    },
  })

  function handleJoinRoom(data: any) {
    console.log(data)
  }

  return (
    <Flex
      as="form"
      onSubmit={handleSubmit(handleJoinRoom)}
      flexDir="column"
      gap="4"
      align="center"
    >
      <Text fontWeight="medium" fontSize="2xl">
        Entrar em uma sala
      </Text>

      <Input placeholder="ID da sala" {...register('roomId')} />

      <Button
        type="submit"
        w="100%"
        colorScheme="yellow"
        fontSize="lg"
        fontWeight="medium"
      >
        Entrar
      </Button>
    </Flex>
  )
}
