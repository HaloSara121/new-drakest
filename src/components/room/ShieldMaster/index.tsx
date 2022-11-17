import {
  Flex,
  Text,
  Tab,
  TabList,
  Tabs,
  Icon,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { CaretUp, CaretDown } from 'phosphor-react'

interface ShieldMasterProps {
  isOpen: boolean
  onClose: () => void
  onOpen: () => void
}

export const ShieldMaster = ({
  isOpen,
  onClose,
  onOpen,
}: ShieldMasterProps) => {
  return (
    <Flex
      as={motion.div}
      bg="gray.900"
      w="100%"
      h={isOpen ? '20rem' : '3rem'}
      transition="height .5s"
      position="absolute"
      bottom="0"
      p="1"
    >
      <Tabs
        variant="soft-rounded"
        rounded="md"
        isFitted
        w="100%"
        mx="auto"
        px="1rem"
      >
        <TabList flex="1">
          <Tab
            bg="gray.800"
            color="white"
            transition="all .2s"
            onClick={onOpen}
            _selected={{
              bg: 'yellow.500',
              color: 'black',
              _hover: { filter: 'none' },
            }}
            _hover={{ filter: 'brightness(.8)' }}
          >
            BOSSES
          </Tab>

          <Tab
            bg="gray.800"
            color="white"
            transition="all .2s"
            onClick={onOpen}
            _selected={{
              bg: 'yellow.500',
              color: 'black',
              _hover: { filter: 'none' },
            }}
            _hover={{ filter: 'brightness(.8)' }}
          >
            NPCs
          </Tab>

          <Tab
            bg="gray.800"
            color="white"
            transition="all .2s"
            onClick={onOpen}
            _selected={{
              bg: 'yellow.500',
              color: 'black',
              _hover: { filter: 'none' },
            }}
            _hover={{ filter: 'brightness(.8)' }}
          >
            PLAYERS
          </Tab>

          <Tab
            bg="gray.800"
            color="white"
            transition="all .2s"
            onClick={onOpen}
            _selected={{
              bg: 'yellow.500',
              color: 'black',
              _hover: { filter: 'none' },
            }}
            _hover={{ filter: 'brightness(.8)' }}
          >
            SALA
          </Tab>

          <Flex align="center" justify="flex-end" w="50%">
            {isOpen ? (
              <Icon
                as={CaretDown}
                fontSize="24"
                cursor="pointer"
                onClick={onClose}
                _hover={{ transform: 'scale(1.2)', transition: 'all .2s' }}
              />
            ) : (
              <Icon
                as={CaretUp}
                fontSize="24"
                cursor="pointer"
                onClick={onOpen}
                _hover={{ transform: 'scale(1.2)', transition: 'all .2s' }}
              />
            )}
          </Flex>
        </TabList>
        {isOpen && (
          <TabPanels as={motion.div}>
            <TabPanel h="16rem">
              <Text>BOSSES</Text>
            </TabPanel>
            <TabPanel h="16rem">
              <Text>NPCs</Text>
            </TabPanel>
            <TabPanel h="16rem">
              <Text>PLAYERS</Text>
            </TabPanel>
            <TabPanel h="16rem">
              <Text>SALA</Text>
            </TabPanel>
          </TabPanels>
        )}
      </Tabs>
    </Flex>
  )
}
