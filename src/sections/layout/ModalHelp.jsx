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
import { ModalContainerHelp } from '../../styleComponents/layout/ModalStyle';

const ModalHelp = ({
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
    <ChakraModal
      scrollBehavior={scrollBehavior}
      finalFocusRef={btnRef}
      isOpen={isOpen}
      onClose={() => {
        if (!isStrong) {
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
          {isStrong ? null : <ModalCloseButton className="close_btn" />}
          <ModalBody>{children}</ModalBody>
          <ModalFooter>{footer}</ModalFooter>
        </ModalContent>
      </ModalContainerHelp>
    </ChakraModal>
  );
};
export default ModalHelp;
