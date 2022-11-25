import { Button, Flex, Heading, Input } from '@chakra-ui/react'
import { Plus } from 'phosphor-react'

export const CustomHeading = () => {
  return (
    <Flex justify="space-between" p="4" align="center">
      <Heading>Salas</Heading>

      <Flex gap="1rem">
        <Input variant="filled" placeholder="Procure uma Sala" />

        <Button
          w="15rem"
          leftIcon={<Plus weight="bold" />}
          p="3"
          colorScheme="yellow"
        >
          Nova Sala
        </Button>
      </Flex>
    </Flex>
  )
}
