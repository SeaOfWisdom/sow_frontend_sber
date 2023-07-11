import styled from "styled-components";

export const ArticleAuthorContainer = styled.section`
  padding: 0px 36px 0px 36px;
  @media (max-width: 900px) {
    padding: 14px;
  }
  & .article_author {
    padding: ${({ isActive }) =>
      isActive ? "36px 48px 0px" : "36px 48px 36px"};
    background-color: #fff;
    background-image: url("/img/author_bg.svg");
    border-radius: ${({ isActive }) =>
      isActive ? "15px 15px 0px 0px" : "15px"};
    border-top: 1px solid #2a2c35;
    border-right: 1px solid #2a2c35;
    border-left: 1px solid #2a2c35;
    border-bottom: ${({ isActive }) =>
      isActive ? " 1px solid #fff" : "1px solid #2a2c35"};
    box-shadow: ${({ isActive }) => (isActive ? "" : "0px 2px 0px #2a2c35")};

    & .article_author__item {
      display: flex;
      padding-bottom: ${({ isActive }) => (isActive ? " 32px" : "0")};
      /* transition: opacity 0.4s ease, transform 0.8s ease, visibility 0.4s; */

      & .author_info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding-left: 24px;
        flex-wrap: wrap;
        & .info {
          & .name {
            font-family: "Lora";
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            line-height: 31px;
            color: #2a2c35;
            padding-bottom: 10px;
          }
          & .wallet {
            display: flex;
            & .wallet_id {
              font-family: "Golos";
              font-style: normal;
              font-weight: 400;
              font-size: 18px;
              line-height: 22px;
              color: #2a2c35;
              margin-bottom: 10px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            & img {
              width: 24px;
              height: 24px;
              margin-left: 14px;
              cursor: pointer;
            }
          }
        }

        & .btn_target {
          & button {
            background: #2a2c35;
            border: 1px solid #2a2c35;
            border-radius: 1000px;
            font-family: "Golos";
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
            color: #ffffff;
            padding: 20px 45px;
            cursor: pointer;
          }
        }
      }
    }

    @media (max-width: 900px) {
      padding: 15px 24px;
      margin-top: 14px;
      & .article_author__item {
        display: block;
        & .author_info {
          justify-content: center;
          padding-left: 0px;
          & .info {
            & .wallet {
              justify-content: center;
              margin-bottom: 16px;
            }
            & .name {
              padding-bottom: 8px;
            }
          }
        }
      }
    }
    & .icon {
      min-width: 120px;
      & img {
        width: 120px;
        height: 120px;
      }
      @media (max-width: 900px) {
        display: flex;
        justify-content: center;
        margin-bottom: 12px;
        & img {
          width: 80px;
          height: 80px;
        }
      }
    }
  }
  & .author_info__more {
    padding: ${({ isActive }) => (isActive ? "48px 36px " : "0px")};
    background-image: url("/img/author_bg.svg");
    border-radius: 0px 0px 15px 15px;
    padding-top: 0px;
    border-right: 1px solid #2a2c35;
    border-left: 1px solid #2a2c35;
    box-shadow: ${({ isActive }) => (isActive ? "0px 2px 0px #2a2c35" : "")};
    background-color: #fff;
    /* transition: opacity 0s ease, transform 0.8s ease, visibility 0.8s; */
    transform: translateY(${({ isActive }) => (isActive ? "0" : "-12px")});
    opacity: ${({ isActive }) => (isActive ? 1 : 0)};
    visibility: ${({ isActive }) => (isActive ? "visible" : "hidden")};
    height: ${({ isActive }) => (isActive ? "" : "0px")};
    /* position: ${({ isActive }) => (isActive ? "relative" : "absolute")}; */
    & hr {
      border: none;
      height: 1px;
      background: #2a2c35;
    }
    & .author_info__more-items {
      padding-top: 32px;
      display: flex;
      justify-content: space-between;
      @media (max-width: 700px) {
        display: block;
        & .author_info__more-item {
          margin-bottom: 15px;
          text-align: center;
        }
      }
      & .author_info__more-item {
        & p {
          font-family: "Lora";
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
          line-height: 31px;
          color: #2a2c35;
          margin-bottom: 12px;
        }
        & span {
          font-family: "Golos";
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 22px;
          color: #2a2c35;
        }
      }
    }
  }
  & .title {
    font-family: "Lora";
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 140%;
    color: #2a2c35;
    margin: 50px 0 24px 0;
    @media (max-width: 900px) {
      margin: 36px 0 16px;
      font-size: 20px;
      line-height: 140%;
    }
  }
  & .btns {
    padding-bottom: 36px;
    display: flex;
    white-space: pre;
    overflow-x: scroll;
    & .btn {
      background: #ffffff;
      border: 1px solid #2a2c35;
      box-shadow: 0px 2px 0px #2a2c35;
      border-radius: 1000px;
      padding: 12px 16px;
      margin: 0 12px 12px 0;
      display: inline-flex;
      justify-content: space-between;
      align-items: center;

      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #2a2c35;
      cursor: pointer;
      & div {
        font-family: "Golos";
        @media (max-width: 900px) {
          font-size: 12px;
        }
      }
      & .close_btn {
        margin-left: 4px;
        cursor: pointer;
        width: 20px;
        height: 20px;
      }
    }
    & .btn_disabled {
      background: #f0f3f4;
      & .close_btn {
        display: none;
      }
    }
  }
`;
