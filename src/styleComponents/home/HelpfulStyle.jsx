import styled from 'styled-components';

export const HelpfulContainer = styled.section`
  padding: 50px 36px 44px 36px;
  @media (max-width: 900px) {
    padding: 30px 0px 15px 15px;
  }
  & .library {
    & .library_title {
      font-family: 'Lora';
      font-style: normal;
      font-weight: 600;
      font-size: 36px;
      line-height: 140%;
      color: #2a2c35;
      margin: 0 0 40px 0;
      @media (max-width: 450px) {
        font-size: 24px;
      }
    }

    & .cards {
      display: flex;
      align-items: stretch;
      align-content: stretch;
      /* margin: -12px; */

      & .card {
        width: calc(100% / 3);
        padding: 12px;
        /* @media (max-width: 900px) {
          width: 100%;
          padding: 6px;
        } */
        & .card_body {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: #ffffff;
          box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
          border-radius: 15px;
          height: 100%;
          padding: 50px 24px;

          &:hover {
            background-color: #f0f3f6;
            cursor: default;
          }
          & .himg {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 30px;
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
            word-break: break-word;
          }
          & .author {
            & .alink {
              font-family: 'Golos';
              font-style: normal;
              font-weight: 400;
              font-size: 16px;
              line-height: 160%;
              text-decoration-line: underline;
              color: #2a2c35;
            }
            & .plink {
              opacity: 0.5;
            }
          }
        }
      }
      @media (max-width: 1250px) {
        overflow-x: scroll;
        & .card {
          min-width: 343px;
          height: 343px;
          padding: 4px;
          & .card_body {
            padding: 16px;
            & .himg {
              & img {
                width: 119px;
                height: 119px;
              }
              margin-bottom: 24px;
            }
            & .title {
              margin: 8px 0 16px 0;
              font-weight: 500;
              font-size: 16px;
              line-height: 160%;
            }
            & .author {
              & .alink {
                font-family: 'Golos';
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 160%;
                text-decoration-line: underline;
                color: #2a2c35;
              }
              & .plink {
                opacity: 0.5;
              }
            }
          }
        }
      }
    }
  }
`;
