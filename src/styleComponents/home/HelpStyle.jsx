import styled from 'styled-components';

export const HelpContainer = styled.section`
  /* padding: 0px 36px 0 36px; */
  @media (max-width: 900px) {
    padding-top: 14px;
    padding: 20px 16px 20px;
    background-color: white;
    border-radius: 12px;
  }
  & .help-about {
    & .about-items {
      padding: 36px 0px 0;
      :first-child {
        padding-top: 0;
      }
      h4 {
        font-size: 24px;
        font-family: Lora;
        font-weight: 600;
        color: #2a2c35;
      }
      & .title_p {
        font-size: 16px;
        font-family: 'Golos';
        line-height: 170%;
        color: #2a2c35;
        margin-top: 16px;
      }
      & .about-item {
        margin-top: 24px;
        & .cards {
          display: grid;
          /* justify-content: space-between; */
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 16px;
          & .card {
            padding: 24px;
            border-radius: 12px;
            border: 1px solid #e0e5e7;
            background: #fff;
            /* width: calc(33% - 8px); */
            & img {
              margin-bottom: 16px;
            }
            & .title_card {
              font-size: 14px;
              font-family: 'Golos';
              line-height: 160%;
              color: #2a2c35;
            }
          }
          @media (max-width: 900px) {
            display: flex;
            overflow-x: scroll;
            & .card {
              min-width: 260px;
            }
          }
        }
        & .cards-command {
          display: flex;
          justify-content: space-between;
          & .card {
            border-radius: 12px;
            border: 1px solid #e0e5e7;
            padding: 24px;
            width: calc(50% - 8px);
            & .team-avatar {
              display: flex;
              align-items: center;
              @media (max-width: 1100px) {
                display: block;
              }
              @media (max-width: 900px) {
                display: flex;
              }
              @media (max-width: 760px) {
                display: block;
              }
              @media (max-width: 700px) {
                display: flex;
              }
              @media (max-width: 420px) {
                display: block;
              }
              & img {
                margin-right: 16px;
              }
              & .about {
                & .name {
                  font-size: 18px;
                  font-family: Lora;
                  font-weight: 600;
                  color: #2a2c35;
                  margin-bottom: 12px;
                }
                & .skills {
                  display: flex;
                  & .skill {
                    white-space: pre;
                    padding: 10px 15px;
                    color: #2a2c35;
                    font-size: 12px;
                    font-family: Golos;
                    font-weight: 500;
                    letter-spacing: 0.96px;
                    text-transform: uppercase;
                    margin-right: 8px;
                    border-radius: 1000px;
                    background: #f0f3f4;
                  }
                }
              }
            }
            & .title {
              margin-top: 16px;
              font-family: Golos;
              line-height: 160%;
              font-size: 14px;
            }
          }
          @media (max-width: 700px) {
            display: block;
            & .card {
              width: 100%;
              margin-bottom: 16px;
            }
          }
        }
        & .banner-img {
          margin-right: 0;
          position: relative;
          & .banner-img__img {
            width: 100%;
          }
          & .zoom_img {
            position: absolute;
            bottom: 0;
            right: 0;
            cursor: pointer;
          }
        }
      }
      & .cards-2 {
        background-image: url('/img/banner_bg_about.svg');
        background-repeat: no-repeat;
        background-position: center;
        background: no-repeat scroll center scroll;
        -webkit-background-size: cover;
        background-size: cover;
        width: auto;
        border-radius: 12px;
        padding: 40px 50px 40px 52px;
        display: grid;
        /* justify-content: space-between; */
        grid-template-columns: repeat(auto-fill, minmax(233px, 1fr));
        gap: 75px;
        @media (max-width: 900px) {
          gap: 10px;
        }
        & .card {
          text-align: center;
          height: 120px;
          & .number {
            font-size: 32px;
            font-family: Lora;
            font-weight: 600;
            line-height: 170%;
            color: #2a2c35;
          }
          & .title {
            text-align: center;
            font-size: 18px;
            font-family: Golos;
            line-height: 170%;
            color: #2a2c35;
          }
        }
        @media (max-width: 900px) {
          display: flex;
          justify-content: space-between;
          /* padding: 16px 6px; */
          & .card {
            height: auto;
            & .title {
              /* font-size: 10px; */
              font-family: Golos;
              line-height: 170%;
            }
          }
        }
        @media (max-width: 700px) {
          display: flex;
          justify-content: space-between;
          padding: 16px 6px;
          & .card {
            height: auto;
            & .title {
              font-size: 10px;
              font-family: Golos;
              line-height: 170%;
            }
            & .number {
              font-size: 18px;
            }
          }
        }
      }
    }
    & .help {
      padding-top: 36px;
      padding-bottom: 44px;
      & .help_card {
        background: rgba(240, 243, 244, 1);
        border-radius: 12px;
        padding: 60px 48px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media (max-width: 1100px) {
          padding: 24px 16px;
          flex-direction: column-reverse;
        }
        & .text {
          & h1 {
            font-family: 'Lora';
            font-style: normal;
            font-size: 24px;
            font-weight: 600;
            line-height: 46px;
            color: #2a2c35;
          }
          & .desc {
            font-family: 'Golos';
            font-style: normal;
            font-size: 16px;
            /* font-family: Golos; */
            line-height: 150%;
            color: #2a2c35;
            max-width: 567px;
            margin: 16px 0 24px 0;
          }
          & .btns {
            display: flex;
            flex-wrap: wrap;
            & .btn {
              font-weight: 500;
              margin-bottom: 10px;
              font-family: 'Golos';
              display: flex;
              align-items: center;
              background: #f0f3f4;
              border: 1px solid #2a2c35;
              box-shadow: 0px 2px 0px #2a2c35;
              border-radius: 1000px;
              height: 48px;
              margin-right: 16px;
              padding: 0 24px;
              & img {
                width: 24px;
                height: 24px;
                margin-right: 12px;
              }
            }
            & .telegram {
              background: #8be4d4;
            }
            & .mail {
              background: white;
            }
          }
          @media (max-width: 900px) {
            & h1 {
              font-size: 26px;
              line-height: 150%;
              text-align: center;
            }
            & .desc {
              font-size: 14px;
              line-height: 150%;
              text-align: center;
              margin: 12px 0 32px 0;
            }
            & .btns {
              & .btn {
                width: 100%;
                align-items: center;
                text-align: center;
                font-size: 16px;
              }
            }
          }
        }
        & .img_target {
          & img {
            min-width: 287px;
            width: 287px;
            height: 222gpx;
            @media (max-width: 900px) {
              max-width: 200px;
              height: 200px;
              margin-bottom: 16px;
            }
          }
        }
      }
    }
  }

  & .faqs-help {
    width: 100%;
    margin-top: 24px;
    margin-bottom: 20px;
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
  & .faq_target {
    & > section {
      padding: 50px 0 0 0;
      & > .faq {
        border-bottom: 0;
        padding: 50px 0 0px 0;
        & .title {
          h2 {
            margin-bottom: 14px;
          }
        }
        @media (max-width: 900px) {
          padding-top: 36px;
        }
      }
      @media (max-width: 900px) {
        padding-top: 36px;
      }
    }
  }
`;
