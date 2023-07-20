import styled from 'styled-components';

export const MyArticleStyle = styled.div`
  padding: 0px 36px;

  @media (max-width: 900px) {
    padding: 15px;
  }
  .my-article {
    border-top: 1px solid #2a2c35;
    @media (max-width: 900px) {
      border-top: none;
    }
    & .box-card {
      margin-top: 32px;
      background: #ffffff;
      @media (max-width: 900px) {
        margin-top: 0;
        margin-bottom: 16px;
      }
      & .css-1xc3v61-indicatorContainer,
      .css-15lsz6c-indicatorContainer {
        padding: 0px;
        color: #2a2c35;
      }

      & .article-filter {
        padding: 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        line-height: 140%;
        h4 {
          font-family: 'Lora';
          font-weight: 600;
          font-size: 24px;
        }
        @media (max-width: 900px) {
          h4 {
            font-size: 20px;
          }
        }

        .btn-article {
          display: flex;

          & .add-status {
            font-family: 'Golos';
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 16px;
            background: #8be4d4;
            max-height: 48px;
            padding: 15px 24px;

            white-space: pre;
            border: 1px solid #2a2c35;
            box-shadow: 0px 2px 0px #2a2c35;
            border-radius: 1000px;
            & img {
              margin-right: 10px;
            }
          }

          @media (max-width: 600px) {
            display: block;
            & .add-status {
              margin-top: 16px;
              margin-left: 0px;
            }
          }
        }
        & .desktop {
          display: block;
          @media (max-width: 500px) {
            display: none;
          }
        }
        & .mobile {
          display: none;
          padding: 0;

          @media (max-width: 500px) {
            display: block;
          }
          & .all-status {
            padding: 15px 24px;
            height: 48px;
            align-items: center;
            display: flex;
            justify-content: space-between;
            text-align: center;
            border-radius: 1000px;
            border: 1px solid #2a2c35;
            cursor: pointer;
            & span {
              font-weight: 500;
              font-size: 14px;
              font-family: Golos;
            }
          }
        }
        @media (max-width: 900px) {
          display: block;
          h4 {
            margin-bottom: 16px;
          }
        }
      }
      & .notfound {
        text-align: center;
        padding: 150px 0px;
        & .img {
          display: flex;
          justify-content: center;
          margin-bottom: 24px;
        }
        & h4 {
          font-family: 'Lora';
          font-weight: 600;
          font-size: 16px;
          color: #2a2c35;
          margin-bottom: 8px;
        }
        & .text {
          display: flex;
          justify-content: center;
          & p {
            color: #2a2c35;
            font-weight: 400;
            font-size: 14px;
            font-family: 'Golos';
            width: 25%;
            @media (max-width: 900px) {
              width: 100%;
            }
          }
        }
      }
      & .pagination {
        padding: 36px 0px;
        text-align: center;
      }
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
      border-radius: 12px;
    }
    & .validator-card {
      padding-bottom: 24px;
      margin-bottom: 24px;
    }
  }
`;
