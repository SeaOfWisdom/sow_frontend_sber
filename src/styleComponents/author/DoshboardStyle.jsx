import styled from "styled-components";

export const ContainerDoshboard = styled.div`
  padding: 0px 36px;
  @media (max-width: 900px) {
    padding: 0px 15px;
  }
  .container {
    border-top: 1px solid #2a2c35;
    /* padding-top: 32px; */

    @media (max-width: 900px) {
      padding: 0px;
      border-top: none;
      /* padding: 0px !important; */
    }

    & .doshboard-count {
      display: flex;
      /* grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); */
      gap: 24px;
      margin-top: 32px;
      margin-bottom: 24px;
      @media (max-width: 900px) {
        margin-top: 16px;
        gap: 16px;
        margin-bottom: 16px;
      }
      @media (max-width: 500px) {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        margin-top: 16px;
      }

      & .doshboard-count-card {
        padding: 32px;
        background: #ffffff;
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
        border-radius: 12px;
        display: flex;
        width: 100%;
        align-items: center;
        @media (max-width: 900px) {
          padding: 24px 16px;
          display: block;

          text-align: center;
        }
        @media (max-width: 600px) {
          padding: 15px 7px;
        }
        & .img {
          & .img-item {
            margin-right: 16px;

            box-shadow: 0px 2px 0px #2a2c35;
            /* border-radius: 50%; */
            padding: 20px;
            width: 64px;
            height: 64px;
            display: flex;
            border-radius: 50%;
          }
          & .author {
            background: #ffb7bb;
          }
          & .validator {
            background: #8be4d4;
          }
          @media (max-width: 900px) {
            justify-content: center;
            display: flex;

            & .img-item {
              margin-right: 0;
              margin-bottom: 12px;
            }
          }
          @media (max-width: 600px) {
            & .img-item {
              padding: 10px;
              width: 36px;
              height: 36px;
            }
          }
        }
        & .doshboard-count-card__item {
          p {
            font-family: "Golos";
            font-weight: 400;
            font-size: 16px;
            margin-bottom: 8px;
            color: #2a2c35;
            @media (max-width: 900px) {
              margin-bottom: 4px;
            }
          }
          h4 {
            color: #2a2c35;
            font-weight: 700;
            font-size: 24px;
            line-height: 31px;
            font-family: "Lora";

            & span {
              font-weight: 400;
              font-size: 16px;
              font-family: "Golos";
              color: #847f99;
            }
          }
          @media (max-width: 900px) {
            flex-direction: column-reverse;
            display: flex;
            h4 {
              span {
                display: none;
              }
            }
          }
          @media (max-width: 500px) {
            p {
              font-size: 10px;
              line-height: 140%;
            }
            h4 {
              font-weight: 700;
              font-size: 14px;
              line-height: 18px;
            }
          }
        }
      }
    }
    & .box-card {
      background: #ffffff;
      padding: 24px 0px;
      margin-bottom: 48px;
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
      border-radius: 12px;
      .doshboard-title-items {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 24px 24px;
        h4 {
          font-weight: 600;
          font-size: 24px;
          font-family: "Lora";
          line-height: 31px;
          font-weight: 600;
          font-size: 24px;
          line-height: 31px;
          color: #2a2c35;
        }
        & .calendar {
          display: flex;
          align-items: center;
          position: relative;
          font-family: "Golos";
          & .hr-calendar {
            margin: 0px 8px;
            border: 1px solid #cfd2d8;
            width: 12px;
          }

          & button {
            font-family: "Golos";
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
            height: 48px;
            align-items: center;
            padding: 15px 24px;
            display: flex;
            border: 1px solid #2a2c35;
            border-radius: 1000px;
            & span {
              color: #847f99;
              margin-right: 5px;
              font-family: "Golos";
              @media (max-width: 900px) {
                margin-right: 2px;
              }
            }
            & img {
              margin-left: 35px;
            }
            @media (max-width: 900px) {
              padding: 15px;
              font-weight: 500;
              font-size: 14px;
              line-height: 17px;
              & img {
                display: none;
              }
            }
          }
        }
        & .doshboard-title-items__btn {
          font-family: "Golos";
          font-size: 14px;
          color: white;
          padding: 15px 24px;
          font-weight: 500;
          border-radius: 1000px;
          background-color: #2a2c35;
        }
        @media (max-width: 900px) {
          display: block;
          margin-bottom: 0px;
          & button {
            margin: 10px 0px;
          }
        }
      }
      @media (max-width: 900px) {
        margin-top: 16px !important;
        margin-bottom: 16px !important;
      }
    }
  }
`;
