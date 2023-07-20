import styled from 'styled-components';

export const Banner2Container = styled.section`
  padding: 50px 36px 0 36px;
  @media (max-width: 900px) {
    padding: 30px 15px 0 15px;
  }
  & .banner {
    background-color: #d08ae8;
    background-image: url('/img/banner_bg2.svg');
    background-size: cover;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 590px;
    @media (max-width: 900px) {
      height: 400px;
    }
    & .text {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      & h2 {
        font-family: 'Lora';
        font-style: normal;
        font-weight: 600;
        font-size: 55px;
        line-height: 140%;
        text-align: center;
        color: #2a2c35;
        margin: 0;
        @media (max-width: 900px) {
          font-size: 32px;
        }
        @media (max-width: 700px) {
          font-size: 26px;
        }
      }
      & p {
        font-family: 'Golos';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 160%;
        text-align: center;
        color: #2a2c35;
        margin: 0;
        max-width: 670px;
        padding: 10px;
        @media (max-width: 700px) {
          font-size: 14px;
          padding: 12px;
        }
      }
      & .btn {
        font-family: Golos !important;
        font-style: normal;
        background-color: #fff;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: rgb(42, 44, 53);
        /* height: 40px; */
        border: 1px solid #2a2c35;
        display: inline-flex;
        border-radius: 1000px;
        justify-content: center;
        align-items: center;
        padding: 20px 24px;
        margin: 22px 0px 0 0;
        cursor: pointer;
        box-shadow: 0px 2px 0px #2a2c35 !important;
        @media (max-width: 700px) {
          margin-top: 12px;
        }
      }
    }
  }
`;
