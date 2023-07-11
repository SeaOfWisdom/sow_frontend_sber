import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 36px;

  @media (max-width: 900px) {
    padding: 15px;
    background-color: white;
    position: ${(props) => (props.open ? "fixed" : "")};
    top: ${(props) => (props.open ? "0px" : "")};
    width: 100%;
    z-index: 999;
    transition: 0.3s ease-in-out;
    position: fixed;
    top: 0px;
    border-bottom: 1px solid #e0e5e7;
  }
  & .left {
    display: flex;
    align-items: center;
    & .logo_link {
      background-color: transparent !important;
    }
    & .logo {
      margin-right: 50px;
      @media (max-width: 500px) {
        margin-right: 30px;
        width: 120px;
      }
    }
    & .active {
      background: #d890f0;
      box-shadow: 0px 2px 0px #2a2c35;
    }
  }
  & .right {
    display: flex;
    align-items: center;
    .btn-library {
      border-radius: 1000px;
      width: 48px;
      height: 48px;
      border: 1px solid #2a2c35;
      /* padding: 15px 24px; */
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
      box-shadow: 0px 2px 0px 0px #2a2c35;
      align-items: center;
      margin-right: 12px;
      & img {
        width: 24px;
        height: 24px;
        margin-top: 2px;
      }
    }
    .create-btn {
      display: flex;
      background: #8be4d4;
      border: 1px solid #2a2c35;
      box-shadow: 0px 2px 0px #2a2c35;
      border-radius: 1000px;
      padding: 12px 24px;
      margin: 0px 10px 0 0;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: #2a2c35;
      align-items: center;
      font-family: "Golos";
      height: 48px;
      & img {
        margin-right: 10px;
      }
    }
    & .validator-btn {
      color: #ffffff;
      font-family: "Golos";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      background: #2a2c35;
      border: 1px solid #2a2c35;
      box-shadow: 0px 2px 0px #2a2c35;
      border-radius: 1000px;
      padding: 12px 24px;
      margin: 0px 10px 0 0;
      height: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    & .account {
      box-shadow: 0px 2px 0px #2a2c35;
      margin-right: 0;

      display: inline-flex;
      & img {
        width: 24px;
        height: 24px;
      }
      & span {
        margin-left: 8px;
        font-family: Golos;
        @media (max-width: 500px) {
          display: none;
        }
      }
      & .wallet_id {
        font-family: "Golos";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #2a2c35;
        margin-left: 8px;
      }
      & .balance {
        font-family: "Golos";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        color: #847f99;
        margin-left: 8px;
      }
    }
    & .mobile_btn {
      display: none;
      @media (max-width: 900px) {
        display: inline-flex;
      }
      & img {
        width: 20px;
        height: 20px;
      }
    }
    @media (max-width: 900px) {
      display: none;
    }
  }
  & .btn-wallet {
    background: ${({ isActivewallet }) =>
      isActivewallet ? "#F0F3F4" : "#F0F3F4"};
    position: inherit;
    z-index: 99999999999;
  }
  & .btn {
    font-family: "Golos";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: rgb(42, 44, 53);
    height: 48px;
    border: 1px solid #2a2c35;
    display: inline-flex;
    border-radius: 1000px;
    justify-content: center;
    align-items: center;

    padding: 15px 24px;
    margin: 0 10px 0 0;
    cursor: pointer;
    & img {
      width: 24px;
      height: 24px;
    }
    @media (max-width: 1000px) {
      margin: 0 5px;
      padding: 0 10px;
    }
    @media (max-width: 900px) {
      display: none;
      padding: 0 20px;
    }
    & span {
      font-family: Golos;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
    }
  }
  & .get_role_btn {
    background: #8be4d4;
    border: 1px solid #2a2c35;
    box-shadow: 0px 2px 0px #2a2c35;
    & span {
      font-family: Golos;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
    }
  }
`;
