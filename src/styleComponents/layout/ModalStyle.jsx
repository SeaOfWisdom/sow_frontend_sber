import styled from "styled-components";

export const ModalContainer = styled.div`
 
  & .chakra-modal__content {
    max-width: 552px;
    background: #f0f3f4;
    border-radius: 12px;
    margin: 10px;
  }
  & .chakra-modal__header {
    padding: 25px 50px;
    text-align: center;
  }
  & .chakra-modal__body {
    padding: 10px 50px;
    @media (max-width: 500px) {
      padding: 16px;
    }
  }
  & .chakra-modal__footer {
    /* padding: 25px 50px; */
    padding: 8px;
  }
  & .close_btn {
    background: #ffffff;
    border-radius: 30px;
    height: 30px;
    width: 30px;
    top: 24px;
    right: 24px;
    color: #847f99;
  }
`;
export const ModalContainerHelp = styled.div`
  & .chakra-modal__content {
    max-width: 552px;
    background: #f0f3f4;
    border-radius: 12px;
    margin: 10px;
  }
  & .chakra-modal__header {
    padding: 15px 50px;
  }
  & .chakra-modal__body {
    padding: 10px 50px;
    @media (max-width: 500px) {
      padding: 16px;
    }
    display: flex;
    justify-content: center;
    & img {
      height: 623px;
      width: 305px;
    }
  }
  & .chakra-modal__footer {
    padding: 15px 50px;
  }
  & .close_btn {
    background: #ffffff;
    border-radius: 30px;
    height: 30px;
    width: 30px;
    top: 16px;
    left: 16px;
    color: #847f99;
  }
`;
