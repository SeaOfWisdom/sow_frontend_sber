import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { ModalContainer } from "../../styleComponents/layout/ModalStyle";
import React from "react";

const Modal = ({
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
    <>
      <ChakraModal
        scrollBehavior={scrollBehavior}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        // mobile_none={mobile_none}
        onClose={() => {
          if (!is_strong) {
            onOpen(false);
          }
        }}
        isCentered
        size="lg"
      >
        <ModalOverlay />
        <ModalContainer>
          <ModalContent>
            <ModalHeader>{header}</ModalHeader>
            {is_strong ? <></> : <ModalCloseButton className="close_btn" />}
            <ModalBody>{children}</ModalBody>
            <ModalFooter>{footer}</ModalFooter>
          </ModalContent>
        </ModalContainer>
      </ChakraModal>
    </>
  );
};
export default Modal;
