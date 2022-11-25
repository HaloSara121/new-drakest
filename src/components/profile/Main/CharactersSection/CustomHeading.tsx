import { Button, Flex, Heading, Input } from '@chakra-ui/react'
import { Plus } from 'phosphor-react'

export const CustomHeading = () => {
  return (
    <Flex justify="space-between" p="4" align="center">
      <Heading>Personagens</Heading>

      <Flex gap="1rem">
        <Input variant="filled" placeholder="Procure um personagem" />

        <Button
          w="18rem"
          leftIcon={<Plus weight="bold" />}
          p="3"
          colorScheme="yellow"
        >
          Novo Personagem
        </Button>
      </Flex>
    </Flex>
  )
}
