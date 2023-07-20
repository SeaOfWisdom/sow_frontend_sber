import { useState } from 'react';
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import { ModalDiplomContainer } from '../../styleComponents/layout/ModalDiplomStyle';

const ModalDiplom = ({ isOpen = false, onOpen = () => {}, images = [] }) => {
  const [active, setActive] = useState(1);
  return (
    <ChakraModal
      isOpen={isOpen}
      onClose={() => onOpen(false)}
      isCentered
      size="lg"
      autoFocus={false}
    >
      <ModalOverlay />
      <ModalDiplomContainer>
        <ModalContent>
          <ModalHeader>
            <div className="title">Примеры дипломов для загрузки</div>
            <div className="pagination">
              {active}/{images.length}
            </div>
          </ModalHeader>
          <ModalCloseButton className="close_btn" />
          <ModalBody>
            <div className="slide">
              <Swiper
                onActiveIndexChange={e => {
                  setActive((e?.activeIndex ?? 0) + 1);
                }}
                navigation
                modules={[Navigation]}
                className="mySwiper"
              >
                {images.map(item => (
                  <SwiperSlide
                    key={Math.random() * Date.now()}
                    className="sitem"
                  >
                    <img src={item} alt="" className="simage" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </ModalDiplomContainer>
    </ChakraModal>
  );
};
export default ModalDiplom;
