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
import { ModalContainer } from '../../styleComponents/layout/ModalStyle';

type Props = {
  isOpen?: boolean;
  onOpen?: (v: boolean) => void;
  header?: string;
  children?: React.ReactNode | string;
  footer?: string;
  isStrong?: boolean;
};

const Modal: React.FC<Props> = ({
  isOpen = false,
  onOpen = () => {},
  header = '',
  children = '',
  footer = '',
  isStrong = false,
}) => {
  const btnRef = React.useRef(null);
  return (
    <ChakraModal
      scrollBehavior="inside"
      finalFocusRef={btnRef}
      isOpen={isOpen}
      // mobile_none={mobile_none}
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
  );
};
export default Modal;
