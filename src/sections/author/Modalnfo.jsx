import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Axios from "../../utils/httpClient";
import { useDispatch } from "react-redux";
const Main = styled.div`
  .layer {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #000;
    opacity: 0.2;
    z-index: 998;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .cardfiltermain {
    position: fixed;
    top: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .cardfilter {
    width: 553px;
    min-height: 1px;
    background: #f0f3f4;
    overflow: hidden;
    position: relative;
    border-radius: 14px;
    padding: 50px;
    @media (max-width: 900px) {
      padding: 23px 16px;
    }
    & img {
      position: absolute;
      right: 24px;
      cursor: pointer;
      top: 24px;
      @media (max-width: 900px) {
        right: 16px;
        top: 16px;
      }
    }
    & .form {
      /* margin-top: 36px; */

      & .input-target {
        margin-top: 24px;
        label {
          font-weight: 400;
          font-size: 14px;
          color: #2a2c35;
          font-family: "Golos";
          & span {
            color: #ff6a6a;
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
          }
        }
        input {
          margin-top: 10px;
          height: 47px;
          border: 1px solid #c8c8c8;
          border-radius: 6px;
          width: 100%;
          padding: 15px 24px;
          font-family: "Golos";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 17px;
        }
        & span {
          font-family: Golos;
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 17px;
          color: rgb(255, 106, 106);
          margin-left: 2px;
        }
      }
      & button {
        margin-top: 24px;
        margin-bottom: 10px;
        font-family: "Golos";
        text-align: center;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        justify-content: center;
        align-items: center;
        padding: 15px 24px;
        width: 100%;
        border: 1px solid #8be4d4;
        box-shadow: 0px 2px 0px #2a2c35;
        border-radius: 1000px;
        background: #8be4d4;
      }
      h4 {
        font-weight: 600;
        font-size: 24px;
        font-family: "Lora";
        margin-bottom: 12px;
        text-align: center;
        @media (max-width: 900px) {
          font-weight: 600;
          font-size: 16px;
          line-height: 140%;
        }
      }
      p {
        font-weight: 400;
        font-size: 14px;
        color: #2a2c35;
        text-align: center;
        font-family: "Golos";
        @media (max-width: 900px) {
          display: none;
        }
      }
    }
    @media only screen and (max-width: 784px) and (min-width: 320px) {
      width: 95%;
    }
    .t1 {
      padding: 15px;
      text-align: center;
    }
  }
`;

const BodyHidden = createGlobalStyle`
      body{
            overflow: hidden;
      }
`;

const ModalInfo = (props) => {
  const { close, form, del, otherAuthorId = "", addAuthorToast } = props;
  const [obj, setObj] = useState({});
  const [err, setErr] = useState({});
  const dispatch = useDispatch();

  const InviteAuthor = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_LOADING", payload: true });

    let t = true,
      error = {};

    if (!obj?.name) {
      error = { ...error, name: true };
      t = false;
    }

    if (!obj?.surname) {
      error = { ...error, surname: true };
      t = false;
    }

    if (
      !obj?.email_address ||
      !obj?.email_address?.includes("@") ||
      !obj?.email_address?.includes(".")
    ) {
      error = { ...error, email_address: true };
      t = false;
    }

    // if (!obj?.middlename) {
    //   error = { ...error, middlename: true };
    //   t = false;
    // }

    if (t) {
      Axios()
        .post("/invite_co_author", { ...obj, web3_address: otherAuthorId })
        .then((res) => {
          if (res?.status === 200) {
            addAuthorToast()
            close(false);
          }
        })
        .catch((e) => {})
        .finally(() => {
          dispatch({ type: "SET_LOADING", payload: false });
        });
    } else {
      dispatch({ type: "SET_LOADING", payload: false });
      setErr(error);
    }
  };

  const handleChange = (e) => {
    setObj({ ...obj, [e.target.name]: e.target.value });
    setErr({ ...err, [e.target.name]: false });
  };
  return (
    <>
      <Main>
        <div className="layer" />
        <div className="cardfiltermain">
          <div className="cardfilter">
            <img
              src="/img/close-circle.svg"
              alt=""
              onClick={() => close(false)}
            />

            {form === true ? (
              <div className="form">
                <h4>Пригласить со-автора</h4>
                <p>
                  Введите данные со-автора, чтобы пригласить его в Sea of Wisdom
                  и отображать в статьях
                </p>
                <div className="input-target">
                  <label htmlFor="">
                    Фамилия <span>*</span>
                  </label>
                  <input
                    type="text"
                    name="surname"
                    id=""
                    onChange={handleChange}
                  />
                  {err?.surname === true ? <span>Введите Фамилия</span> : null}
                </div>
                <div className="input-target">
                  <label htmlFor="">
                    Имя <span>*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id=""
                    onChange={handleChange}
                  />
                  {err?.name === true ? <span>Введите Имя</span> : null}
                </div>
                <div className="input-target">
                  <label htmlFor="">
                    Отчество 
                    {/* <span>*</span> */}
                  </label>
                  <input
                    type="text"
                    name="middlename"
                    id=""
                    onChange={handleChange}
                  />
                  {/* {err?.middlename === true ? (
                    <span>Введите Отчество</span>
                  ) : null} */}
                </div>
                <div className="input-target">
                  <label htmlFor="">
                    Email <span>*</span>
                  </label>
                  <input
                    type="text"
                    name="email_address"
                    id=""
                    onChange={handleChange}
                  />
                  {err?.email_address === true ? (
                    <span>Введите Email</span>
                  ) : null}
                </div>
                <button onClick={InviteAuthor}>Отправить приглашение</button>
              </div>
            ) : null}
          </div>
        </div>
        <BodyHidden />
      </Main>
    </>
  );
};

export default ModalInfo;
