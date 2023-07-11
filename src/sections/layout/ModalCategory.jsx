import {
    Modal as ChakraModal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton 
  } from '@chakra-ui/react'  
import { ModalCategoryContainer } from '../../styleComponents/layout/ModalCategoryStyle';

const ModalCategory = ({
    isOpen=false, 
    onOpen=()=>{},
    header = '',
    children = '',
    footer = ''
}) => { 
    return(
        <ChakraModal isOpen={isOpen} onClose={()=>onOpen(false)} isCentered size='lg'>
            <ModalOverlay />
                <ModalCategoryContainer> 
                    <ModalContent>
                        <ModalHeader>{header}</ModalHeader>
                        <ModalCloseButton className='close_btn'/>
                        <ModalBody>{children}</ModalBody>
                        <ModalFooter>{footer}</ModalFooter>
                    </ModalContent>
                </ModalCategoryContainer>
        </ChakraModal>
    )
}
export default ModalCategory;