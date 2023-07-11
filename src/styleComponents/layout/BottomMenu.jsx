import styled from "styled-components";

export const BottomMenu = styled.div`
  display: none;
  position: fixed;
  bottom: 0px;
  height: 78px;
  //background: white;
  width: 100%;
  z-index: 9;
  & .bottom-menu-items {
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;
    background:${(props) =>
        props?.account__role === 85
          ? "white"
          : "none"}!important;
    & .active {
      /* background: white !important; */
      background: ${(props) =>
        props?.account__role === 85
          ? "rgba(216, 144, 240, 0.10)"
          : "white"}!important;
      & .bottom-menu-item-icon {
        & .img {
          opacity: 1 !important;
        }
      }
    }
    & .bottom-menu-item {
      background: ${(props) =>
        props?.account__role === 1
          ? "#f0f3f4"
          : props?.account__role === 2
          ? "#f9f0f0"
          : props?.account__role === 4
          ? "#f5fffe"
          : props?.account__role === 85
          ? "white"
          : ""};
      width: 100%;
      height: 100%;
      & .bottom-menu-item-icon {
        display: block;
        justify-content: center;
        align-items: center;
        text-align: center;
        cursor: pointer;
        .create {
          margin-top: 13px;
          background: #8be4d4;
          box-shadow: 0px 1.5px 0px #000000;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        & .img {
          margin-top: 19px;
          display: flex;
          justify-content: center;
          opacity: 0.5;
        }
        span {
          font-family: "Golos";
          font-style: normal;
          font-weight: 400;
          font-size: 10px;
          line-height: 12px;
          text-align: center;
          display: inline-block;
          color: #2a2c35;
        }
      }
      & .bottom-menu-item-icon-help {
        display: block;
        justify-content: center;
        align-items: center;
        text-align: center;
        cursor: pointer;
        .create {
          margin-top: 13px;
          background: #8be4d4;
          box-shadow: 0px 1.5px 0px #000000;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        & .img {
          margin-top: 19px;
          display: flex;
          justify-content: center;
          /* opacity: 0.5; */
        }
        span {
          font-family: "Golos";
          font-style: normal;
          font-weight: 400;
          font-size: 10px;
          line-height: 12px;
          text-align: center;
          display: inline-block;
          color: #2a2c35;
        }
      }
    }
  }
  @media (max-width: 900px) {
    display: block;
  }
`;
