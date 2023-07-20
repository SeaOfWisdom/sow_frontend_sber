import styled from 'styled-components';

export const LibraryContainer = styled.section`
  padding: 0px 36px 50px 36px;
  @media (max-width: 900px) {
    padding: 0px 15px 20px 15px;
  }
  & .library {
    border-top: 1px solid #2a2c35;
    margin-top: 14px;
    & .library_title {
      font-family: 'Lora';
      font-style: normal;
      font-weight: 600;
      font-size: 36px;
      line-height: 140%;
      color: #2a2c35;
      margin: 50px 0 32px 0;
      @media (max-width: 450px) {
        font-size: 24px;
      }
    }
    & .cards {
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
              font-family: 'Golos';
              font-style: normal;
              font-weight: 400;
              font-size: 14px;
              line-height: 17px;
              color: #2a2c35;
            }
          }
          & .title {
            font-family: 'Lora';
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            line-height: 160%;
            color: #2a2c35;
            margin: 10px 0 5px 0;
          }
          & .author {
            & span {
              font-family: 'Golos';
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
            font-family: 'Golos';
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
              font-family: 'Golos';
              font-style: normal;
              font-weight: 500;
              font-size: 24px;
              line-height: 160%;
              color: #2a2c35;
            }
            & .unity {
              font-family: 'Golos';
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
    & .show_target {
      display: flex;
      justify-content: center;
      align-items: center;
      & .show {
        background: #2a2c35;
        border-radius: 1000px;
        cursor: pointer;
        font-family: 'Golos';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #ffffff;
        padding: 20px 24px;
        margin-top: 74px;
        &:hover {
          background-color: #8be4d4;
        }
        @media (max-width: 900px) {
          margin-top: 20px;
        }
      }
    }
  }
`;
