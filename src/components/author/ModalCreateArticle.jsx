import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const ModalCreateArticleStyle = styled.div`
  text-align: center;
  & .img {
   display: flex;
   justify-content: center;

  }
  h2 {
    font-weight: 600;
    font-size: 24px;
    font-family: "Lora";
    margin: 24px 0 8px;
  }
  p {
    font-family: "Golos";
    margin-bottom: 24px;
    font-weight: 400;
    font-size: 14px;
    line-height: 180%;
   
  }
  button {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    font-family: "Golos";
    padding: 12px 24px;
    background: #8be4d4;
    border: 1px solid #2a2c35;
    box-shadow: 0px 2px 0px #2a2c35;
    border-radius: 1000px;
  }
`;
const ModalCreateArticle = ({setmodal}) => {
  const navigate = useNavigate();
  return (
    <ModalCreateArticleStyle>
      <div className="img">
        <img src="/img/icon_4.svg" alt="" />
      </div>
      <h2>На рассмотрении администратором</h2>
      <p>
        Ваша статья отправлена на рассмотрение к администратору. Она будет
        рассмотрена в течении 3 дней и далее будет отправлена на показ
        валидаторам.
      </p>
      <button onClick={()=>{setmodal(false); navigate('/author/my-articles')} }>К разделу “Мои статьи”</button>
    </ModalCreateArticleStyle>
  );
};

export default ModalCreateArticle;
