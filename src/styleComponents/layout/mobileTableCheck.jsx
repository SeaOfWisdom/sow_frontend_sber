import styled from 'styled-components';

export const MobileTableCheck = styled.div`
  & .table_mobile {
    display: none;
    @media (max-width: 900px) {
      display: block;
    }
    & .card {
      margin-top: 16px;
      & hr {
        margin-top: 18px;
      }
      & .text {
        font-family: 'Golos';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 170%;
        color: #2a2c35;
        margin-bottom: 14px;
      }
      & .roise {
        display: flex;
        margin: 18px 0px;
        align-items: center;
        & img {
          width: 20px;
          height: 20px;
          margin-right: 14px;
        }
        & .roise_item {
          font-family: 'Lora';
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 20px;
          color: #2a2c35;
        }
      }
      :last-child {
        & hr {
          width: 0px;
        }
      }
    }
  }
`;
