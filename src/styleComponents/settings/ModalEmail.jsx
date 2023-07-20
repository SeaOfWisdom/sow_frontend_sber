import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

export const ModalEmailStyle = styled.div`
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
        font-family: 'Golos';
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
`;
const ModalEmail = ({ setmodal, setTab, setmodasms }) => {
  const { t, i18n } = useTranslation();
  const OpenModal = () => {
    setTab(2);
    setmodal(false);
    setmodasms(true);
  };
  return (
    <ModalEmailStyle>
      <h2>{t('modal_email.editEmail')}</h2>
      <hr />
      <div className="form">
        <div className="input-target">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="">
            {t('modal_email.email')} <span>*</span>
          </label>
          <input type="text" />
          <button type="button" onClick={OpenModal}>
            {t('modal_email.confirm')}
          </button>
        </div>
      </div>
    </ModalEmailStyle>
  );
};

export default ModalEmail;
