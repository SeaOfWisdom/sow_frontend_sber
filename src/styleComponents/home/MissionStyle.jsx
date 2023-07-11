import styled from "styled-components";

export const MissionContainer = styled.section`
  padding: 30px 36px 50px;
  @media (max-width: 900px) {
    padding: 30px 15px;
  }
  & .mission {
    display: flex;
    border-bottom: 1px solid #2a2c35;
    /* border-top: 1px solid #2A2C35; */
    @media (max-width: 700px) {
      display: block;
    }
    & .title {
      margin: 30px 0;
      flex: 1;
      & h2 {
        margin: 0 0 10px 0;
        font-family: "Lora";
        font-style: normal;
        font-weight: 600;
        font-size: 36px;
        line-height: 150%;
        color: #2a2c35;

        @media (max-width: 500px) {
          font-weight: 600;
          font-size: 20px;
          line-height: 140%;
        }
      }
      @media (max-width: 500px) {
        margin: 25px 0px;
      }
    }
    & .subject {
      margin: 40px 0px 26px;
      flex: 1;
      @media (max-width: 700px) {
        margin: 20px 0;
      }
      & .row {
        display: flex;
        & .star {
          padding: 7px 17px 0 17px;
          & img {
            min-width: 24px;
          }
          @media (max-width: 500px) {
            padding: 0px 17px 0 17px;
          }
        }
        & .text {
          margin-bottom: 24px;
          & h4 {
            margin: 0;
            font-family: "Lora";
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            line-height: 160%;
            color: #2a2c35;
            margin-bottom: 11px;
          }
          & p {
            font-family: "Golos";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 160%;
            color: #2a2c35;
          }
          @media (max-width: 500px) {
            & h4 {
              font-size: 16px;
              font-weight: 500;
            }
            & p {
            }
            font-size: 14px;
          }
        }
      }
    }
  }
`;
