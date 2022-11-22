import { Avatar, Flex, Icon, Text } from '@chakra-ui/react'
import { Pencil } from 'phosphor-react'

export const AvatarSection = () => {
  return (
    <Flex
      as="section"
      p="4"
      justify="center"
      h="20rem"
      // borderBottom="1px solid"
      // borderColor="gray.400"
    >
      <Flex flexDir="column" align="center" gap="2rem" justify="center">
        <Flex position="relative">
          <Flex
            position="absolute"
            top="5px"
            right="0"
            zIndex="100"
            bg="gray.600"
            rounded="full"
            align="center"
            justify="center"
            w="8"
            h="8"
            boxShadow="xl"
            cursor="pointer"
            _hover={{
              transform: 'scale(1.1)',
              color: 'yellow.400',
            }}
          >
            <Icon as={Pencil} fontSize="24px" />
          </Flex>

          <Avatar
            src="https://github.com/HaloSara121.png"
            size="3xl"
            zIndex="99"
          />
        </Flex>

        <Text fontWeight="medium" fontSize="2xl">
          Vinicius Paes Berna
        </Text>
      </Flex>
    </Flex>
  )
}
