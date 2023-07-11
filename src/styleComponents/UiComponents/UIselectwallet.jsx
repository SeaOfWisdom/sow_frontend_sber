import styled from "styled-components";

export const UiSelectwallet = styled.div`
  position: relative;
  cursor: pointer;
  & .langspan {
    font-size: 14px;
    margin-right: 10px;
    line-height: 17px;
    font-weight: 500;
    font-family: "Golos";
    color: #2a2c35;
    @media (max-width: 600px) {
      font-size: 24px;
    }
  }
  & button {
    background: transparent;
    border: none;
    font-weight: 500;
    font-size: 16px;
    color: #303030;
    height: 30px;
    padding: 0;
    margin: 0;
    display: flex;
    cursor: pointer;
    align-items: center;
    & span {
      margin: 0 6px;
    }
  }

  .walletoption {
    .layer {
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      opacity: 0.4;

      /* display: flex;
      justify-content: center;
      align-items: center; */
      position: ${({ isActivewallet }) => (isActivewallet ? "fixed" : "block")};
      width: 100%;
      height: 100%;
      background: ${({ isActivewallet }) => (isActivewallet ? "#2A2C35" : "")};
      /* transform: translateY(${({ isActivewallet }) =>
        isActivewallet ? "0" : "-12px"}); */
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 2;
    }
    /* & .cardmain {
      position: fixed;
      top: 0;
      z-index: 999;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    } */
    /* .cardmodal {
      position: relative;
    } */
    & ul {
      transform: translateY(
        ${({ isActivewallet }) => (isActivewallet ? "0" : "-12px")}
      );
      opacity: ${({ isActivewallet }) => (isActivewallet ? 1 : 0)};
      visibility: ${({ isActivewallet }) =>
        isActivewallet ? "visible" : "hidden"};
      background: #ffffff;
      transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
      box-shadow: 0 0 10px rgba(13, 46, 105, 0.2);
      list-style: none;
      margin: 0;
      overflow: hidden;
      padding: 0;
      position: absolute;
      right: 0px;
      top: 8px;
      margin-top: 50px;
      display: flex;
      padding: 32px 32px 8px;
      z-index: 99;
      flex-direction: column;
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
      border-radius: 16px;
      width: 372px;
      & .walletoption-items {
        border-bottom: 1px solid #f0f3f4;
        margin-bottom: 24px;

        & h2 {
          font-weight: 600;
          font-size: 16px;
          line-height: 20px;
          font-family: "Lora";
          margin-bottom: 16px;
        }
        & .walletoption-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          
          & .current {
            color: #53c5b0;
            font-weight: 400;
            font-size: 12px;
            
            font-family: "Golos";
            padding: 6px 12px;
            background: rgba(83, 197, 176, 0.1);
            border-radius: 100px;
          }
          & .under-review {
            color: #F28F33;
            font-weight: 400;
            font-size: 12px;
            font-family: "Golos";
        
            padding: 6px 12px;
            background: rgba(242, 143, 51, 0.1);
            border-radius: 100px;
          }
          & .walletoption-item-acc {
            display: flex;
            align-items: center;
            
            & img {
              margin-right: 12px;
            }
            & p {
              color: #2a2c35;
              font-weight: 400;
              font-size: 16px;
              font-family: "Golos";
            }
            & .walletoption-item-acc-text {
              
              & span {
                color: #847f99;
                font-weight: 400;
                font-size: 14px;
                line-height: 17px;
                font-family: "Golos";
              }
            }
          }
          & .walletoption-item-passive {
            opacity: .3;
          }
        }
        & .wallet-switch {
          display: flex;
          & img {
            margin-right: 16px;
          }
        }
      }
      & .wallet {
        margin-bottom: 24px;
        display: flex;
        & img {
          margin-right: 16px;
        }
        & p {
          font-family: "Golos";
          font-weight: 500;
          font-size: 16px;
          color: #2a2c35;
        }
        :nth-child(2) {
          margin: 0;
        }
      }
      & .wallet-disable {
        & p {
          color: #ff6a6a;
        }
      }
      & .wallet-switch {
        opacity: 0.3;
      }
    }
  }
`;
