import styled from "styled-components";

export const ArticleViewContainer = styled.section`
  padding: 5px 36px 50px 36px;
  @media (max-width: 900px) {
    padding: 15px;
  }
  & .target {
    display: flex;
    align-items: flex-start;
    padding-top: 32px;
    @media (max-width: 900px) {
      display: block;
    }
    & .article {
      background: #ffffff;
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
      border-radius: 12px;
      padding: 36px;
      margin-right: 24px;
      width: 100%;
      @media (max-width: 900px) {
        padding: 15px;
        margin-right: 0;
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
        font-weight: 600;
        font-size: 32px;
        line-height: 160%;
        color: #2a2c35;
        padding: 18px 0 12px 0;
        @media (max-width: 500px) {
          font-size: 24px;
          padding: 10px 0 6px 0;
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
          cursor: pointer;
        }
      }
      & .annotation {
        font-family: "Lora";
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 31px;
        color: #2a2c35;
        padding: 24px 0 16px 0;
        @media (max-width: 500px) {
          font-size: 20px;
          padding: 10px 0 6px 0;
        }
      }
      & .desc {
        font-family: "Golos";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 180%;
        color: #2a2c35;
      }
      & .condition {
        & .btn {
          font-family: Golos;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 17px;
          color: rgb(42, 44, 53);
          height: 40px;
          border: 1px solid #2a2c35;
          display: inline-flex;
          border-radius: 20px;
          justify-content: center;
          align-items: center;
          padding: 0 20px;
          margin: 24px 10px 0 0;
          cursor: pointer;
          background-color: #f0f3f4;
          box-shadow: 0px 2px 0px #2a2c35;
          @media (max-width: 500px) {
            margin-top: 10px;
          }
        }
      }
      & .bookmark_target {
        display: flex;
        justify-content: right;
        & .bookmark {
          width: 48px;
          height: 48px;
          position: absolute;
          margin-right: -12px;
          margin-top: -44px;
          @media (max-width: 900px) {
            margin-right: -6px;
            margin-top: -21px;
          }
        }
      }
    }
    & .price_target {
      min-width: 440px;
      background: #ffffff;
      border: 1px solid #2a2c35;
      box-shadow: 0px 2px 0px #2a2c35;
      border-radius: 15px;
      padding: 36px 36px 24px 36px;
      @media (max-width: 1100px) {
        min-width: 340px;
      }
      @media (max-width: 900px) {
        padding: 15px;
        margin-top: 24px;
        min-width: 100%;
      }
      & .price_t {
        display: flex;
        align-items: center;
        & .paper {
          padding-right: 24px;
          & img {
            width: 70px;
            height: 90px;
          }
        }
        & .price_p {
          & .price_v {
            font-family: "Golos";
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 160%;
            color: #2a2c35;
          }
          & .price_y {
            font-family: "Golos";
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 160%;
            color: #847f99;
          }
        }
      }
      & .pay_btn {
        background: #8be4d4;
        border: 1px solid #8be4d4;
        box-shadow: 0px 2px 0px #2a2c35;
        border-radius: 1000px;
        font-family: "Golos";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #2a2c35;
        padding: 16px;
        text-align: center;
        margin: 32px 0;
        cursor: pointer;
        display: block;
        @media (max-width: 900px) {
          margin: 15px 0;
        }
      }
      & .pay_btn_d{
        opacity: .5;
        cursor: default;
      }
      & .hr {
        border-top: 1px solid #2a2c35;
        width: 62px;
        margin: auto;
      }
      & .price_desc {
        font-family: "Golos";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 180%;
        text-align: center;
        color: #2a2c35;
        text-align: center;
        padding-top: 16px;
        @media (max-width: 900px) {
          padding-top: 10px;
        }
      }
    }
  }
`;
