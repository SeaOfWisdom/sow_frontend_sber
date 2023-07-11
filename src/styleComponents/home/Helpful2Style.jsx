import styled from "styled-components";

export const Helpful2Container = styled.section`
  padding: 0px 36px 50px 36px;
  @media (max-width: 900px) {
    padding: 0px 15px 15px 15px;
  }
  & .library {
    border-bottom: 1px solid #2a2c35;
    padding-bottom: 50px;
    @media (max-width: 900px) {
      padding-bottom: 30px;
    }
    & .cards {
      display: flex;
      /* align-items: stretch;
      flex-wrap: wrap;
      align-content: stretch; */
      /* overflow-x: scroll; */
      margin: -12px;

      & .card {
        width: calc(100% / 3);
        padding: 12px;

        & .card_body {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          /* border: 1px solid #2A2C35; */
          border-radius: 15px;
          background: #e8e5e0;
          height: 100%;
          padding: 50px 36px 36px;

          &:hover {
            background-color: #f5f3f0;
          }
          & .himg {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          & .title {
            font-family: "Lora";
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            line-height: 170%;
            color: #2a2c35;
            margin: 31px 0 5px 0;
            word-break: break-word;
          }
          & .desc {
            font-family: "Golos";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 170%;
            color: #2a2c35;
            margin: 0;
          }
        }
      }
      @media (max-width: 1250px) {
        overflow-x: scroll;
      
        background: none !important;
        & .card {
          min-width: 343px;
          height: 343px;
          padding: 4px;

          & .card_body {
            padding: 24px;
            & .himg {
              & img {
                width: 119px;
                height: 119px;
              }
            }
            & .title {
              margin: 24px 0 4px 0;
              font-weight: 600;
              font-size: 18px;
            }
            & .desc {
              font-style: normal;
              font-weight: 400;
              font-size: 14px;
              line-height: 170%;
            }
          }
        }
      }
      
      & .card1 {
        & > .card_body {
          background-image: url("/img/h_1.svg");
          background-color: "#EBABAE";
          background-size: cover;
          background-position: center;
        }
      }
      & .card2 {
        & > .card_body {
          background-image: url("/img/h_2.svg");
          background-color: "#8FD3C8";
          background-size: cover;
          background-position: center;
        }
      }
      & .card3 {
        & > .card_body {
          background-image: url("/img/h_3.svg");
          background-color: "#DBD9D5";
          background-size: cover;
          background-position: center;
        }
      }
    }
  }
`;
