import { useForm } from 'react-hook-form'
import type { NextComponentType } from 'next'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { Button, Flex, Text } from '@chakra-ui/react'

import { Input } from '../../common/Form/Input'

const createRoomFormValidationSchema = zod.object({
  roomName: zod.string().min(1, 'Informe o nome da sala'),
})

type CreateRoomFormData = zod.infer<typeof createRoomFormValidationSchema>

export const CreateRoomForm: NextComponentType = () => {
  const { register, handleSubmit, reset } = useForm<CreateRoomFormData>({
    resolver: zodResolver(createRoomFormValidationSchema),
    defaultValues: {
      roomName: '',
    },
  })

  function handleCreateRoom(data: CreateRoomFormData) {
    console.log(data)
    reset()
  }

  return (
    <Flex
      as="form"
      onSubmit={handleSubmit(handleCreateRoom)}
      flexDir="column"
      gap="4"
      align="center"
    >
      <Text fontWeight="medium" fontSize="2xl">
        Criar uma sala
      </Text>

      <Input
        placeholder="Nome da Sala"
        {...register('roomName')}
        autoComplete="off"
      />

      <Button
        type="submit"
        w="100%"
        colorScheme="yellow"
        fontSize="lg"
        fontWeight="medium"
      >
        Criar
      </Button>
    </Flex>
  )
}
