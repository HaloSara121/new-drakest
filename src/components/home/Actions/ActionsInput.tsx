import { forwardRef, ForwardRefRenderFunction } from "react";

import { Input as ChakraInput, InputProps } from "@chakra-ui/react";

export const ActionsInputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = ({ ...rest }: InputProps, ref) => {
  return (
    <ChakraInput
      ref={ref}
      variant="unstyled"
      borderBottom="2px"
      rounded="none"
      transition="all .5s"
      py="1"
      textAlign="center"
      fontSize="lg"
      w="90%"
      _focus={{
        borderColor: "yellow.500",
        width: "100%",
      }}
      {...rest}
    />
  );
};

export const ActionsInput = forwardRef(ActionsInputBase);
