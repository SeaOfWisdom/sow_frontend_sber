import styled from 'styled-components';

export const ModalContainerMobile = styled.div`
  & .chakra-modal__content {
    max-width: 552px;
    background: #f0f3f4;
    border-radius: 12px;
    margin: 10px;
  }
  & .chakra-modal__header {
    padding: 6.5px 50px;
  }
  & .chakra-modal__body {
    padding: 10px 0px;
  }
  & .chakra-modal__footer {
    padding: 18px 50px;
  }
  & .close_btn {
    background: #ffffff;
    border-radius: 30px;
    height: 30px;
    width: 30px;
    top: 19px;
    right: 19px;
    color: #847f99;
  }
`;
