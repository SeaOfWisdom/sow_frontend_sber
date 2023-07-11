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
import styled from "styled-components";
const Style = styled.div`
  .modal {
    display: none;
  }
  display: none;
  @media (max-width: 500px) {
    .modal {
      display: block;
    }
    display: block;
  }
`;
const ModalMobile = ({
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
    <Style>
      <div className="modal">
        <ChakraModal
          scrollBehavior={scrollBehavior}
          finalFocusRef={btnRef}
          isOpen={isOpen}
          // mobile_none={mobile_none}
          className="modal"
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
      </div>
    </Style>
  );
};
export default ModalMobile;
