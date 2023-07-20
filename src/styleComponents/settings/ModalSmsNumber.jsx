import React from 'react';
import styled from 'styled-components';
import { HStack, PinInput, PinInputField } from '@chakra-ui/react';

const ModalEmailStyle = styled.div`
  & h2 {
    font-family: 'Lora';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    text-align: center;
    color: #2a2c35;
    margin-bottom: 18px;
  }
  & hr {
    border: none;
    height: 1px;
    width: 100%;
    background-color: #e0e5e7;
  }
  & > .mtitle {
    font-family: 'Lora';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 150%;
    text-align: center;
    color: #2a2c35;
  }
  & > .desc {
    font-family: 'Golos';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 180%;
    text-align: center;
    color: #2a2c35;
    margin: 24px 16px 0px 16px;
  }
  & > .code {
    padding: 24px 0;
    display: flex;
    justify-content: center;
    & .chakra-pin-input {
      background: #ffffff;
      border: 1px solid #cfd2d8;
      border-radius: 6px;
      width: 48px;
      height: 60px;
      font-family: 'Golos';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #2a2c35;
    }
  }
  & .form {
    display: flex;
    justify-content: space-between;
    & .input-target {
      margin-top: 24px;
      width: 100%;
      padding-left: 16px;
      padding-right: 16px;
      & input {
        height: 47px;
        padding: 24px 0 24px 24px;
        border: 1px solid #cfd2d8;
        border-radius: 6px;
        width: 100%;
        margin-bottom: 36px;
      }
      & label {
        font-family: 'Golos';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        margin-bottom: 10px;
        color: #2a2c35;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        & span {
          font-family: 'Golos';
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 17px;
          color: #ff6a6a;
          padding-left: 4px;
        }
      }
      & button {
        font-family: 'Golos';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #2a2c35;
        background: #8be4d4;
        width: 100%;
        border: 1px solid #2a2c35;
        box-shadow: 0px 3px 0px #2a2c35;
        border-radius: 1000px;
        padding: 20px;
      }
    }
    @media (max-width: 600px) {
      display: block;
    }
  }
  & > .footext {
    font-family: 'Golos';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 180%;
    text-align: center;
    color: #2a2c35;
    padding-top: 36px;
    & > span {
      font-weight: 500;
      padding-left: 8px;
      text-decoration-line: underline;
    }
  }
`;
const ModalSmsNumber = ({ setmodal }) => (
  <ModalEmailStyle>
    <h2>Подтвердите почту</h2>
    <hr />

    <div className="desc">
      Мы отправили Вам на почту верификационный код. Введите его в поле ниже,
      чтобы продолжить
    </div>
    <div className="code">
      <HStack>
        <PinInput placeholder="" focusBorderColor="transparent">
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
    </div>
    <div className="form">
      <div className="input-target">
        <button type="button" onClick={() => setmodal(false)}>
          Подтвердить
        </button>
      </div>
    </div>
    <div className="footext">
      Не получили код?
      <span>Отправить повторно</span>
    </div>
  </ModalEmailStyle>
);

export default ModalSmsNumber;
