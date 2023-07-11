import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { ModalContainerHelp } from "../../styleComponents/layout/ModalStyle";
import React from "react";

const ModalHelp = ({
  isOpen = false,
  onOpen = () => {},
  header = "",
  children = "",
  footer = "",
  is_strong = false,
}) => {
  const [scrollBehavior, setScrollBehavior] = React.useState("inside");
  const btnRef = React.useRef(null);
  return (
    <ChakraModal
      scrollBehavior={scrollBehavior}
      finalFocusRef={btnRef}
      isOpen={isOpen}
      onClose={() => {
        if (!is_strong) {
          onOpen(false);
        }
      }}
      isCentered
      size="lg"
    >
      <ModalOverlay />
      <ModalContainerHelp>
        <ModalContent>
          <ModalHeader>{header}</ModalHeader>
          {is_strong ? <></> : <ModalCloseButton className="close_btn" />}
          <ModalBody>{children}</ModalBody>
          <ModalFooter>{footer}</ModalFooter>
        </ModalContent>
      </ModalContainerHelp>
    </ChakraModal>
  );
};
export default ModalHelp;
