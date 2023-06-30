import { forwardRef, ForwardRefRenderFunction } from "react";

import {
  Flex,
  FormLabel,
  Icon,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FieldError } from "react-hook-form";
import { Eye, EyeClosed } from "phosphor-react";

interface InputProps extends ChakraInputProps {
  label?: string;
  id?: string;
  isPassword?: boolean;
  error?: FieldError | undefined;
}

export const InputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = ({ label, id, error, isPassword, ...rest }: InputProps, ref) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex flexDir="column" w="100%" position="relative">
      {label && <FormLabel htmlFor={id}>{label}</FormLabel>}

      <ChakraInput
        ref={ref}
        id={id}
        variant="unstyled"
        rounded="md"
        transition="all .5s"
        type={isPassword ? (isOpen ? "text" : "password") : "text"}
        py="1"
        fontSize="lg"
        w="100%"
        h="3rem"
        bg="gray.800"
        borderColor={error ? "red.500" : ""}
        _hover={{ bg: "gray.900" }}
        _focus={{
          outlineColor: "yellow.500",
        }}
        {...rest}
      />
      {error && <Text color="red.500">{error.message}</Text>}
      {isPassword && (
        <Icon
          as={isOpen ? EyeClosed : Eye}
          onClick={onToggle}
          cursor="pointer"
          position="absolute"
          fontSize="22"
          right="1rem"
          bottom={error ? "2.30rem" : ".75rem"}
          rounded="md"
          zIndex="2"
          my="auto"
        />
      )}
    </Flex>
  );
};

export const Input = forwardRef(InputBase);
