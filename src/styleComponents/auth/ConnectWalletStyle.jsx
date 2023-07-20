import styled from 'styled-components';

export const ConnectWalletContainer = styled.div`
  & .title {
    font-family: 'Lora';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 140%;
    text-align: center;
    color: #2a2c35;
  }
  & .desc {
    font-family: 'Golos';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 180%;
    text-align: center;
    color: #2a2c35;
    padding: 12px 0 36px 0;
  }
  & .wallets {
    & .wallet {
      background: rgb(255, 255, 255);
      border: 1px solid rgb(42, 44, 53);
      box-shadow: rgb(42, 44, 53) 0px 2px 0px;
      border-radius: 1000px;
      display: flex;
      padding: 14px 24px;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      margin-bottom: 24px;
      & img {
        width: 36px;
        height: 36px;
        margin-right: 24px;
      }
      & span {
        font-family: 'Golos';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 180%;
        color: #2a2c35;
      }
      & .name {
        display: flex;
        align-items: center;
        justify-content: left;
      }
      & .loading {
        display: flex;
        align-items: center;
        justify-content: center;
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        & img {
          margin: 0;
          width: 24px;
          height: 24px;
          animation: spin 0.7s linear infinite;
        }
      }
    }
  }
  & .err {
    color: red;
    text-align: center;
    font-family: 'Golos';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 180%;
  }
  & .hr {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 36px 0 24px 0;
    & span {
      width: 62px;
      border-top: 1px solid #2a2c35;
    }
  }
  & .fdesc {
    font-family: 'Golos';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 180%;
    text-align: center;
    color: #2a2c35;
    & > a {
      font-family: 'Golos';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 19px;
      text-decoration-line: underline;
      color: #2a2c35;
    }
  }
`;
