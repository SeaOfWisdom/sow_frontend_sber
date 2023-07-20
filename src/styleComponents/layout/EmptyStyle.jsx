import styled from 'styled-components';

export const EmptyStyle = styled.div`
  border-radius: 12px;
  & .notfound {
    text-align: center;
    padding: 150px 0px;
    background: white;
    border-radius: 12px;
    @media (max-width: 900px) {
      padding: 84px 33px;
    }
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
`;
