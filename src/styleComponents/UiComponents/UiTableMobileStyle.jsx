import styled from 'styled-components';

export const UiTableMobileStyle = styled.div`
  display: none;
  @media (max-width: 900px) {
    display: block;

    & .card {
      background: #ffffff;
      border-radius: 12px;
      padding: 16px;
      margin-bottom: 16px;
      & .article_details {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12px;
        & .status {
          border-radius: 100px;
          font-weight: 400;
          font-size: 14px;
          font-family: 'Golos';
          width: max-content;
          padding: 6px 12px;
        }
        & .rejected {
          color: #ff6a6a;
          background: rgba(255, 106, 106, 0.1);
        }
        & .published {
          color: #53c5b0;
          background: rgba(83, 197, 176, 0.1);
        }
        & .under-consideration {
          color: #3e9cf3;
          background: rgba(62, 156, 243, 0.1);
        }
      }
      & .text {
        font-family: 'Golos';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
        color: #2a2c35;
      }
      & hr {
        margin: 12px 0px;
      }
      & .date {
        display: flex;
        justify-content: space-between;
        margin-bottom: 12px;
        align-items: center;
        & .status {
          border-radius: 100px;
          width: max-content;
          padding: 6px 12px;
        }
        .date-item {
          font-family: 'Golos';
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 150%;
          color: #2a2c35;
        }
        & .date-item__value {
          font-family: 'Golos';
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 150%;
          color: #2a2c35;
        }
        & .finish-publish {
          color: #53c5b0;
          background: rgba(83, 197, 176, 0.1);
        }
        & .orginal-review {
          background: rgba(242, 143, 51, 0.1);
          color: #f28f33;
        }
        & .rejected {
          color: #ff6a6a;
          background: rgba(255, 106, 106, 0.1);
        }

        & .date-item__validators {
          display: flex;
          position: relative;
          & .circle {
            background: #2a2c35;
            /* position: absolute; */
            left: 0;
            color: white;
            width: 24px;
            height: 24px;
            z-index: 3;
            height: 24px;
            font-size: 12px;
            font-family: 'Golos';
            text-align: center;
            align-items: center;
            display: flex;
            justify-content: center;
            border-radius: 50%;
          }
          & img {
            :nth-child(1) {
              /* position: absolute; */
              left: -30px;
              height: 24px;
              z-index: 3;
              width: 24px;
            }
            :nth-child(2) {
              position: absolute;
              left: -15px;
              width: 24px;
              height: 24px;
              z-index: 2;
            }
            :nth-child(3) {
              position: absolute;
              left: -30px;
              z-index: 1;
              width: 24px;
              height: 24px;
            }
          }
        }
        & .reward {
          font-weight: 500;
          font-size: 12px;
          font-family: 'Golos';
          font-weight: 500;
        }
      }
      & .actions {
        width: 100%;
        border: 1px solid #2a2c35;
        box-shadow: 0px 2px 0px #2a2c35;
        border-radius: 1000px;
        background: #f0f3f4;
        padding: 12px 16px;
        text-align: center;
        font-family: 'Golos';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #2a2c35;
      }
    }
  }
`;
