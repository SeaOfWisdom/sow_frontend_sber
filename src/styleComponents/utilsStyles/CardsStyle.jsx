import styled from "styled-components";

export const CardsContainer = styled.section`
  &>.cards {
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
    align-content: stretch;
    margin: -12px;
    @media (max-width: 900px) {
      margin: -6px;
    }
    & .card {
      width: calc(100% / 3);
      padding: 12px;
      @media (max-width: 1080px) {
        width: 50%;
      }
      @media (max-width: 900px) {
        padding: 6px;
      }
      @media (max-width: 600px) {
        width: 100%;
      }
      & .bookmark_target {
        display: flex;
        justify-content: right;
        & .bookmark {
          cursor: pointer;
          width: 48px;
          height: 48px;
          position: absolute;
          margin-right: 16px;
          margin-top: -8px;
        }
      }
      & .card_body {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        padding: 24px;
        background: #ffffff;
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
        border-radius: 15px;
        cursor: pointer;
        @media (max-width: 1080px) {
          padding: 12px;
        }
        &:hover {
          background-color: #f0f3f6;
          /* border: 1px solid #8BE4D4; */
        }

        & .date {
          display: flex;
          align-items: center;
          & .time {
            margin-left: 8px;
            font-family: "Golos";
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            color: #2a2c35;
          }
        }
        & .title {
          font-family: "Lora";
          font-style: normal;
          font-weight: 500;
          font-size: 24px;
          line-height: 160%;
          color: #2a2c35;
          margin: 10px 0 5px 0;
          @media (max-width:900px) {
            font-size: 16px;
line-height: 160%;
          }
        }
        & .author {
          & span {
            font-family: "Golos";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 160%;
            text-decoration-line: underline;
            color: #5e4eda;
            margin-right: 10px;
          }
        }
        & .desc {
          width: 100%;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          margin: 14px 0;
          font-family: "Golos";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          /* line-height: 160%; */
          color: #847f99;
        }
        & .condition {
          & .btn {
            font-family: Golos;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            border: 1px solid #2a2c35;
            box-shadow: 0px 2px 0px #2a2c35;
            border-radius: 1000px;
            background: #F0F3F4;
            line-height: 17px;
            color: rgb(42, 44, 53);
            height: 40px;
            border: 1px solid #2a2c35;
            display: inline-flex;
            border-radius: 20px;
            justify-content: center;
            align-items: center;
            padding: 0 20px;
            margin: 10px 10px 0 0;
            cursor: pointer;
          }
        }
        & .price_target {
          padding-top: 10px;
          & .price {
            font-family: "Golos";
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            line-height: 160%;
            color: #2a2c35;
          }
          & .unity {
            font-family: "Golos";
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 160%;
            color: #847f99;
            margin: 0 5px;
          }
        }
      }
    }
  } 
`;
export const CancelSavedContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &>.mtitle{
      font-family: 'Lora';
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 150%;
      text-align: center;
      color: #2A2C35;
    }
    &>.desc{
      font-family: 'Golos';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 180%;
      text-align: center;
      color: #2A2C35;
      margin: 8px 0 24px 0;
    }
    &>.btns{
      text-align: center;
      &>.btn1{
        width: 148px;
        height: 45px;
        background: #FF6A6A;
        border: 1px solid #2A2C35;
        box-shadow: 0px 3px 0px #2A2C35;
        border-radius: 1000px;
        margin: 0 8px;
        font-family: 'Golos';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #FFFFFF;
      }
      &>.btn2{
        width: 148px;
        height: 45px;
        background: #8BE4D4;
        border: 1px solid #2A2C35;
        box-shadow: 0px 3px 0px #2A2C35;
        border-radius: 1000px;
        margin: 8px;
        font-family: 'Golos';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px; 
        color: #2A2C35;
      }
    }
`
