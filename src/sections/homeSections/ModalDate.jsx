import React from "react";
import styled from "styled-components";
const ModalDateStyle = styled.div`
  & h2 {
    font-weight: 600;
    font-size: 24px;
    font-family: "Lora";
    color: #2a2c35;
    text-align: center;
    margin-bottom: 24px;
  }
  & .form {
    display: flex;
    justify-content: space-between;

    & .input-target {
      padding-bottom: 24px;
      & input {
        height: 47px;
        padding: 24px 0 24px 24px;
        border: 1px solid #cfd2d8;
        border-radius: 6px;
      }
      & label {
        font-family: "Golos";
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
          font-family: "Golos";
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 17px;
          color: #ff6a6a;
          padding-left: 4px;
        }
      }
    }
    @media (max-width: 600px) {
      display: block;
      text-align: center;
      & .input-target {
        input {
          width: 100%;
        }
      }
    }
  }
  & button {
    width: 100%;
    background: #8be4d4;
    border: 1px solid #2a2c35;
    box-shadow: 0px 3px 0px #2a2c35;
    border-radius: 1000px;
    font-family: "Golos";
    font-weight: 500;
    font-size: 16px;
    color: #2a2c35;
    padding: 20px;
  }
`;
const ModalDate = ({ setmodal }) => {
  return (
    <ModalDateStyle>
      <h2>Выбрать даты</h2>
      <div className="form">
        <div className="input-target">
          <label htmlFor="">
            C <span>*</span>
          </label>
          <input type="text" />
        </div>
        <div className="input-target">
          <label htmlFor="">
            До <span>*</span>
          </label>
          <input type="text" />
        </div>
      </div>
      <button onClick={() => setmodal(false)}>Подтвердить</button>
    </ModalDateStyle>
  );
};

export default ModalDate;
