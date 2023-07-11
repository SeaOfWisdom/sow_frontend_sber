import styled from "styled-components";

export const HelpSettingsMobileContainer = styled.div`
  padding: 14px 16px;
  & .htitle {
    font-family: "Lora";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 31px;
    color: #2a2c35;
  }
  & .text__helps {
    background-color: white;
    padding: 36px 16px;
    border-radius: 12px;
    margin-bottom: 36px;
    @media (max-width:900px) {
      margin-top: 24px;
    }
    & .hdesc {
      font-family: "Lora";
      font-style: normal;
      font-weight: 600;
      font-size: 26px;
      line-height: 150%;
      text-align: center;
      color: #2a2c35;
      padding-bottom: 16px;
      & span {
        font-family: "Golos";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
        text-align: center;
        color: #2a2c35;
        display: inline-block;
        margin-top: 12px;
      }
    }
    & .hbtns {
      display: flex;
      align-items: center;
      justify-content: center;
      & .btn {
        height: 48px;
        background: #f0f3f4;
        border: 1px solid #2a2c35;
        box-shadow: 0px 2px 0px #2a2c35;
        border-radius: 1000px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 24px;
        margin-right: 16px;
        font-family: "Golos";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #2a2c35;
        cursor: pointer;
        & > img {
          width: 24px;
          height: 24px;
          margin-right: 12px;
        }
      }
      @media (max-width: 600px) {
        display: block;
        & .btn {
          margin: 16px 0px;
          width: 100%;
        }
      }
    }
  }
  & .help {
    font-family: "Lora";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 140%;
    color: #2a2c35;
    padding: 36px 0 24px 0;
    border-top: 1px solid #2a2c35;
  }
  & > .items {
    & > .item {
      width: 100%;
      cursor: pointer;
      border: 1px solid #2a2c35;
      border-radius: 12px;
      margin-bottom: 16px;
      background: white;
      padding: 24px;
      & .ftitle {
        /* padding-bottom: 8px; */
        display: flex;
        justify-content: space-between;
        align-items: center;

        & h4 {
          margin: 0;
          font-family: "Lora";
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          line-height: 160%;
          color: #2a2c35;
        }
        & .btn {
          min-width: 20px;
                        height: 20px;
          & img {
            transform: rotate(0deg);
            transition: transform 150ms ease;
          }
        }
      }
      & .text {
        font-family: "Golos";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 160%;
        color: #2a2c35;
        display: none;
      }
    }
    & .active {
      background-color: #fff;
      & .ftitle {
        & .btn {
          & img {
            transform: rotate(180deg);
            transition: transform 150ms ease;
          }
        }
      }
      & .text {
        display: block;
        margin-top: 8px;
      }
    }
  }
`;
