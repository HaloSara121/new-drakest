import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Portal,
} from "@chakra-ui/react";

interface ConfigDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConfigDrawer = ({ isOpen, onClose }: ConfigDrawerProps) => {
  return (
    <Portal>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="md">
        <DrawerOverlay />
        <DrawerContent bg="gray.800" w="25vw">
          <DrawerCloseButton />
          <DrawerHeader>Menu de configurações</DrawerHeader>

          <DrawerBody></DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="yellow">Salvar</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Portal>
  );
};
