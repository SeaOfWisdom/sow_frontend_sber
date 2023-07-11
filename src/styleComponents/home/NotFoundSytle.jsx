import styled from "styled-components";

export const NotFoundContainer = styled.section`
  padding: 76px 36px 145px 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 655px;
  @media (max-width: 900px) {
    padding: 20px 16px;
  }
  & .ncard {
    max-width: 748px;
    background: #ffffff;
    border-radius: 12px;
    padding: 138px 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & > img {
      width: 295px;
      height: 205px;
    }
    & > h1 {
      font-family: "Lora";
      font-style: normal;
      font-weight: 600;
      font-size: 36px;
      line-height: 46px;
      text-align: center;
      color: #2a2c35;
      padding: 24px 0 16px 0;
    }
    & > .desc {
      font-family: "Golos";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 150%;
      text-align: center;
      color: #2a2c35;
      padding-bottom: 36px;
    }
    & > .btn {
      background: #8be4d4;
      border: 1px solid #2a2c35;
      box-shadow: 0px 2px 0px #2a2c35;
      border-radius: 1000px;
      font-family: "Golos";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: #2a2c35;
      padding: 0 42px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 48px;
      cursor: pointer;
    }
    @media (max-width: 900px) {
      padding: 40px 20px;
      & h1 {
        font-size: 25px;
        line-height: 30px;
      }
      & > .desc {
        font-size: 14px;
        padding-bottom: 20px;
      }
    }
  }
`;
