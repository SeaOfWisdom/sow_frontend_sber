import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  RadioGroup,
  Stack,
  Radio,
} from "@chakra-ui/react";
import { ModalContainer } from "../../styleComponents/layout/ModalStyle";
import { ModalContainerMobile } from "../../styleComponents/settings/ModalSetting";
import React from "react";

const ModalSetting = ({
  isOpen = false,
  onOpen = () => {},
  header = "",
  children = "",
  footer = "",
}) => {
  const [scrollBehavior, setScrollBehavior] = React.useState("inside");
  const btnRef = React.useRef(null)
  return (
    <>
      
      <ChakraModal
        isOpen={isOpen}
        onClose={() => onOpen(false)}
        isCentered
        size="lg"
        scrollBehavior={scrollBehavior}
        finalFocusRef={btnRef}
      >
        <ModalOverlay />
        <ModalContainerMobile>
          <ModalContent>
            <ModalHeader>{header}</ModalHeader>
            <ModalCloseButton className="close_btn" />
            <ModalBody>{children}</ModalBody>
            <ModalFooter>{footer}</ModalFooter>
          </ModalContent>
        </ModalContainerMobile>
      </ChakraModal>
    </>
  );
};
export default ModalSetting;
