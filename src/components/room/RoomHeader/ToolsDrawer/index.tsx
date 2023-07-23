import { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Link,
  Portal,
  SimpleGrid,
  Text,
  Tooltip,
} from "@chakra-ui/react";

import { Input } from "@/components/common/Form/Input";
import { RoomContext } from "@/contexts/RoomContext";

interface ToolsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const RollDiceValidationSchema = z.object({
  amount: z.number().max(100, "A quatidade maxima de dados é 100"),
  size: z.number().max(100, "O tamanho maximo dos dados é 999"),
  amplifier: z.number(),
});

type RollDiceFormData = z.infer<typeof RollDiceValidationSchema>;

export const ToolsDrawer = ({ isOpen, onClose }: ToolsDrawerProps) => {
  const { diceValues, rollDice, clearDiceValues } = useContext(RoomContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
  } = useForm<RollDiceFormData>({
    resolver: zodResolver(RollDiceValidationSchema),
    defaultValues: {
      amount: 0,
      size: 0,
      amplifier: 0,
    },
  });

  const RollDiceFormSubmit = (data: RollDiceFormData) => {
    if (!data) return;
    if (data.amount < 1) {
      return setError("amount", { message: "A quatidade minima de dados é 1" });
    }
    if (data.size < 2) {
      return setError("size", { message: "O tamanho minimo dos dados é 2" });
    }

    rollDice(data.size, data.amount, data.amplifier);
    reset();
  };

  return (
    <Portal>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="md">
        <DrawerOverlay bg="#0000" />
        <DrawerContent bg="gray.800" w="25vw">
          <DrawerCloseButton />
          <DrawerHeader>Ferramentas</DrawerHeader>

          <DrawerBody>
            <Flex as="section" flexDir="column">
              <Heading>Rolar Dados</Heading>
              <Divider mt="2" />
              <Flex
                mt="4"
                flexDir="column"
                align="center"
                justify="center"
                gap="4"
                w="100%"
              >
                <Flex
                  as="form"
                  id="rollDiceForm"
                  onSubmit={handleSubmit(RollDiceFormSubmit)}
                  align="center"
                >
                  <Tooltip label="Quantidade de dados">
                    <Input
                      w="16"
                      p="1"
                      type="number"
                      textAlign="center"
                      fontSize="2xl"
                      variant="filled"
                      {...register("amount", { valueAsNumber: true })}
                    />
                  </Tooltip>
                  <Text fontSize="2xl" mx="2">
                    D
                  </Text>
                  <Tooltip label="Tamanho dos dados">
                    <Input
                      w="16"
                      p="1"
                      type="number"
                      textAlign="center"
                      fontSize="2xl"
                      variant="filled"
                      {...register("size", { valueAsNumber: true })}
                    />
                  </Tooltip>
                  <Text fontSize="2xl" mx="1">
                    +
                  </Text>
                  <Tooltip label="Valor a ser somado ou subtraído">
                    <Input
                      w="16"
                      p="1"
                      type="number"
                      textAlign="center"
                      fontSize="2xl"
                      variant="filled"
                      {...register("amplifier", { valueAsNumber: true })}
                    />
                  </Tooltip>

                  <Button
                    form="rollDiceForm"
                    type="submit"
                    minW="16"
                    ml="2"
                    colorScheme="yellow"
                  >
                    Rolar
                  </Button>
                </Flex>

                {errors && (
                  <Flex flexDir="column" mt="-4" color="red.500">
                    <Text>{errors?.amount?.message}</Text>
                    <Text>{errors?.size?.message}</Text>
                    <Text>{errors?.amplifier?.message}</Text>
                  </Flex>
                )}

                <Flex align="center" gap="4" mt="4" position="relative">
                  <Link
                    fontSize="sm"
                    position="absolute"
                    top="-5"
                    left="20"
                    zIndex="20"
                    onClick={clearDiceValues}
                  >
                    Limpar resultados
                  </Link>
                  <SimpleGrid
                    bg="gray.700"
                    w="12rem"
                    h="12rem"
                    templateColumns="1fr 1fr 1fr"
                    rounded="lg"
                    boxShadow="inner"
                    className="customScroll"
                    overflow="auto"
                    spacing="2"
                    p="2"
                  >
                    {diceValues.map((die) => (
                      <Flex
                        bg="gray.800"
                        align="center"
                        justify="center"
                        rounded="lg"
                        h="3.5rem"
                        boxShadow="dark-lg"
                      >
                        <Text fontSize="2xl">{die}</Text>
                      </Flex>
                    ))}
                  </SimpleGrid>

                  <SimpleGrid templateColumns="1fr 1fr" gap="4">
                    <Tooltip label="Rola um dado de 4 lados">
                      <Button
                        w="3.5rem"
                        h="3.5rem"
                        colorScheme="yellow"
                        letterSpacing="wide"
                        fontWeight="bold"
                        onClick={() => rollDice(4)}
                      >
                        D4
                      </Button>
                    </Tooltip>

                    <Tooltip label="Rola um dado de 6 lados">
                      <Button
                        w="3.5rem"
                        h="3.5rem"
                        colorScheme="yellow"
                        letterSpacing="wide"
                        fontWeight="bold"
                        onClick={() => rollDice(6)}
                      >
                        D6
                      </Button>
                    </Tooltip>

                    <Tooltip label="Rola um dado de 8 lados">
                      <Button
                        w="3.5rem"
                        h="3.5rem"
                        colorScheme="yellow"
                        letterSpacing="wide"
                        fontWeight="bold"
                        onClick={() => rollDice(8)}
                      >
                        D8
                      </Button>
                    </Tooltip>

                    <Tooltip label="Rola um dado de 10 lados">
                      <Button
                        w="3.5rem"
                        h="3.5rem"
                        colorScheme="yellow"
                        letterSpacing="wide"
                        fontWeight="bold"
                        onClick={() => rollDice(10)}
                      >
                        D10
                      </Button>
                    </Tooltip>

                    <Tooltip label="Rola um dado de 12 lados">
                      <Button
                        w="3.5rem"
                        h="3.5rem"
                        colorScheme="yellow"
                        letterSpacing="wide"
                        fontWeight="bold"
                        onClick={() => rollDice(12)}
                      >
                        D12
                      </Button>
                    </Tooltip>

                    <Tooltip label="Rola um dado de 20 lados">
                      <Button
                        w="3.5rem"
                        h="3.5rem"
                        colorScheme="yellow"
                        letterSpacing="wide"
                        fontWeight="bold"
                        onClick={() => rollDice(20)}
                      >
                        D20
                      </Button>
                    </Tooltip>
                  </SimpleGrid>
                </Flex>
              </Flex>
            </Flex>
          </DrawerBody>

          <DrawerFooter>
            {/* <Button variant="outline" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="yellow">Salvar</Button> */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Portal>
  );
};
