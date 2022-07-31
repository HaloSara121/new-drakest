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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<JoinRoomFormData>({
    resolver: zodResolver(JoinRoomFormValidationSchema),
    defaultValues: {
      roomId: '',
    },
  })

  function handleJoinRoom(data: JoinRoomFormData) {
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

      {errors.roomId && (
        <Text fontWeight="normal" fontSize="sm" my="-4" color="red.500">
          {errors.roomId.message}
        </Text>
      )}

      <Input
        placeholder="ID da sala"
        {...register('roomId')}
        borderColor={errors.roomId ? 'red.500 !important' : ''}
      />

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
