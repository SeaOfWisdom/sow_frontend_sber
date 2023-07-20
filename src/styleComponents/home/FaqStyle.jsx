import styled from 'styled-components';

export const FaqContainer = styled.section`
  padding: 0 36px;
  @media (max-width: 900px) {
    padding: 0 15px;
  }
  .faqs-s {
    border-top: 1px solid #2a2c35;
    & .title {
      font-size: 36px;
      font-family: 'Lora';
      font-weight: 600;
      line-height: 150%;
      padding-top: 50px;
      @media (max-width: 900px) {
        padding-top: 36px;
        font-size: 20px;
        line-height: 140%;
      }
    }
    & .faq {
      border-bottom: 1px solid #2a2c35;
      padding: 40px 0 50px;
      display: flex;
      justify-content: space-between;
      @media (max-width: 900px) {
        padding: 24px 0 36px;
      }
      @media (max-width: 700px) {
        display: block;
      }
      & .title {
        width: 50%;
        padding-right: 10px;

        & h2 {
          margin: 0;
          font-family: 'Lora';
          font-style: normal;
          font-weight: 600;
          font-size: 36px;
          line-height: 150%;
          color: #2a2c35;
        }
        @media (max-width: 700px) {
          width: 100%;
          & h2 {
            font-size: 20px;
            margin-bottom: 24px;
          }
        }
      }
    }
    & .faqs {
      width: calc(50% - 12px);
      @media (max-width: 700px) {
        width: 100%;
        /* padding-top: 10px; */
      }
      & .items {
        & .item {
          cursor: pointer;
          border: 1px solid #2a2c35;
          border-radius: 12px;
          margin-bottom: 16px;
          background: #fff;
          padding: 24px;
          & .ftitle {
            /* padding-bottom: 8px; */
            display: flex;
            justify-content: space-between;
            align-items: center;

            & h4 {
              margin: 0;
              font-family: 'Lora';
              font-style: normal;
              font-weight: 600;
              font-size: 18px;
              line-height: 160%;
              color: #2a2c35;
              @media (max-width: 700px) {
                font-size: 16px;
              }
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
            font-family: 'Golos';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 160%;
            color: #2a2c35;
            display: none;
            @media (max-width: 700px) {
              font-size: 14px;
            }
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
    }
  }
  .faqs-help {
    & .faq {
      /* padding: 40px 0 50px; */
      display: flex;
      justify-content: space-between;
      @media (max-width: 900px) {
        padding: 24px 0 36px;
      }
      @media (max-width: 700px) {
        display: block;
      }
      & .title {
        width: 50%;
        padding-right: 10px;

        & h2 {
          margin: 0;
          font-family: 'Lora';
          font-style: normal;
          font-weight: 600;
          font-size: 36px;
          line-height: 150%;
          color: #2a2c35;
        }
        @media (max-width: 700px) {
          width: 100%;
          & h2 {
            font-size: 20px;
            margin-bottom: 24px;
          }
        }
      }
    }
  }
`;
