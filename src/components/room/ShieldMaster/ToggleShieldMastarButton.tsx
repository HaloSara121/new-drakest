import { Flex, Icon } from "@chakra-ui/react";
import { CaretDown, CaretUp } from "phosphor-react";

interface ToggleShieldMasterButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const ToggleShieldMasterButton = ({
  isOpen,
  onToggle,
}: ToggleShieldMasterButtonProps) => {
  return (
    <Flex align="center" justify="flex-end" w="50%">
      {isOpen ? (
        <Icon
          as={CaretDown}
          fontSize="24"
          cursor="pointer"
          onClick={onToggle}
          _hover={{ transform: "scale(1.2)", transition: "all .2s" }}
        />
      ) : (
        <Icon
          as={CaretUp}
          fontSize="24"
          cursor="pointer"
          onClick={onToggle}
          _hover={{ transform: "scale(1.2)", transition: "all .2s" }}
        />
      )}
    </Flex>
  );
};
