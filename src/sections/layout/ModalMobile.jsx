import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';
import { ModalContainer } from '../../styleComponents/layout/ModalStyle';

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
  header = '',
  children = '',
  footer = '',
  isStrong = false,
}) => {
  const [scrollBehavior, setScrollBehavior] = React.useState('inside');
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
            if (!isStrong) {
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
              {isStrong ? null : <ModalCloseButton className="close_btn" />}
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
