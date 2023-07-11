import {
    Modal as ChakraModal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton 
  } from '@chakra-ui/react' 
import { ModalDiplomContainer } from '../../styleComponents/layout/ModalDiplomStyle.jsx';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/navigation"; 
import { Navigation } from "swiper";
import { useState } from 'react';

const ModalDiplom = ({
    isOpen=false, 
    onOpen=()=>{},  
    images=[],
}) => { 
    const [active, setActive] = useState(1);
    return(
        <ChakraModal isOpen={isOpen} onClose={()=>onOpen(false)} isCentered size='lg' autoFocus={false}>
            <ModalOverlay />
                <ModalDiplomContainer> 
                    <ModalContent>
                        <ModalHeader> 
                            <div className='title'>Примеры дипломов для загрузки</div>
                            <div className='pagination'>{active}/{images.length}</div>
                        </ModalHeader>
                        <ModalCloseButton className='close_btn'/>
                        <ModalBody>
                            <div className='slide'>
                            <Swiper 
                                onActiveIndexChange={(e)=>{setActive((e?.activeIndex??0)+1)}} 
                                navigation={true}
                                modules={[Navigation]}
                                className="mySwiper"
                            >
                                {images.map((item, index)=>(
                                    <SwiperSlide key={index} className='sitem'>
                                        <img src={item} alt='' className='simage'/>
                                    </SwiperSlide> 
                                ))}
                            </Swiper>
                            </div>
                        </ModalBody>
                        <ModalFooter></ModalFooter>
                    </ModalContent>
                </ModalDiplomContainer>
        </ChakraModal>
    )
}
export default ModalDiplom;