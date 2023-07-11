import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 36px;
  @media (max-width: 900px) {
    padding: 15px;
    padding-bottom: 78px;
  }
  @media (max-width: 450px) {
    padding: 15px 0 78px 0; 
  }
  & .footer {
    border-top: 1px solid #2a2c35;
    padding: 48px 0 16px 0;
    display: flex;
    justify-content: space-between;
    @media (max-width: 500px) {
      flex-direction: column;
    }
    @media (max-width: 450px) {
      /* border-top: none; */
      padding: 36px 15px 16px 15px;
      & .logo {
        display: none;
      }
    }
    & .links {
      display: inline-flex;
      @media (max-width: 700px) {
        flex-direction: column;
        margin-top: 16px;
      }
      & .links_col {
        margin: 0 80px 0 20px;
        @media (max-width: 1100px) {
          margin-right: 30px;
        }
        @media (max-width: 900px) {
          margin-right: 10px;
        }
        @media (max-width: 500px) {
          margin-left: 0px;
        }
        :nth-child(3) {
          margin: 0 0px 0 20px;
          @media (max-width: 500px) {
            margin: 0;
          }
        }
        & .flink {
          display: block;
          font-family: "Golos";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 19px;
          margin-bottom: 16px;
          color: #2a2c35;
          cursor: pointer;
          @media (max-width: 450px) {
            display: none;
          }
        }
        & .plink {
          opacity: 0.5;
          cursor: default;
        }
        & .btn {
          font-family: Golos;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 17px;
          color: rgb(42, 44, 53);
          height: 48px;
          width: 208px;
          border: 1px solid #2a2c35;
          display: inline-flex;
          border-radius: 20px;
          justify-content: center;
          align-items: center;
          padding: 14px 40px;
          margin: 0 10px 0 0;
          background: #f0f3f4;
          border: 1px solid #2a2c35;
          box-shadow: 0px 2px 0px #2a2c35;
          border-radius: 1000px;
          margin-top: 6px;
          cursor: pointer;
          & img {
            margin-right: 8px;
            width: 24px;
            height: 24px;
          }
          @media (max-width: 450px) {
            width: 100%;
          }
        }
      }
      & .privacy-policy {
        display: none;
        @media (max-width: 450px) {
            display: block;
          }
        font-family: "Golos";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        text-decoration-line: underline;
        color: #2a2c35;
        text-align: center;
        margin-top: 36px;
      }
    }
  }
`;
