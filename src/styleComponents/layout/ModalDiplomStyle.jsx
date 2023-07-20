import styled from 'styled-components';

export const ModalDiplomContainer = styled.div`
  & .chakra-modal__content-container {
    padding: 10px;
  }
  & .chakra-modal__content {
    max-width: 886px;
    background: #f0f3f4;
    border-radius: 12px;
  }
  & .chakra-modal__header {
    padding: 36px 60px;
    border-bottom: 1px solid #cfd2d8;
    & .title {
      font-family: 'Lora';
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 140%;
      text-align: center;
      color: #2a2c35;
    }
    & .pagination {
      font-family: 'Lora';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 140%;
      text-align: center;
      color: #2a2c35;
      position: absolute;
      top: 42px;
      left: 24px;
    }
  }
  & .chakra-modal__body {
    padding: 36px 50px;
    min-height: calc(100vh - 210px);
    & .sitem {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto;
      & .simage {
        max-height: calc(100vh - 210px);
        min-height: 100px;
        height: auto;
        width: auto;
        max-width: 100%;
      }
    }
    & .swiper-button-prev,
    .swiper-button-next {
      width: 50px;
      height: 50px;
      background: #e0e5e7;
      border-radius: 50px;
      &::after {
        width: 10x;
        height: 16px;
        font-size: 18px;
        color: #847f99;
        font-weight: bolder;
      }
    }
    & .swiper-button-prev {
      left: 0;
    }
    & .swiper-button-next {
      right: 0;
    }
  }
  & .chakra-modal__footer {
    padding: 0px 50px;
  }
  & .close_btn {
    background: #ffffff;
    border-radius: 30px;
    height: 30px;
    width: 30px;
    top: 36px;
    right: 24px;
    color: #847f99;
  }
`;
