import styled from "styled-components";

export const Banner3Container = styled.section`
  padding: 0 36px 36px 36px;
  @media (max-width: 900px) {
    padding: 0px 15px 15px 15px;
  }
  & .video-respons {
    display: none;
    @media (max-width: 700px) {
      display: block;
      margin-bottom: 20px;
    }
  }
  .video-mobile{
   display: none;
   @media (max-width:700px) {
   display : block;
   }
  }
  & .banner {
    background-color: #d08ae8;
    background-image: url("/img/banner_bg3.svg");
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 700px) {
      /* flex-direction: column-reverse; */
      display: block;
      padding: 56px 24px;
    }
    & .text_target {
      padding: 0px 0 0 120px;
      /* width: 50%; */
      @media (max-width: 1200px) {
        padding: 0px 0 0 60px;
      }
      @media (max-width: 1000px) {
        padding: 0px 0 0 30px;
      }
      @media (max-width: 700px) {
        /* padding: 0 30px 30px 30px; */
        text-align: center;
        display: flex;
        padding: 0px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-bottom: 12px;
      }
      & h2 {
        font-family: "Lora";
        font-style: normal;
        font-weight: 600;
        font-size: 48px;
        line-height: 140%;
        color: #2a2c35;
        margin: 0;
        @media (max-width: 1100px) {
          font-weight: 600;
          font-size: 40px;
        
        }
        @media (max-width: 800px) {
          font-weight: 600;
          font-size: 26px;
          line-height: 140%;
        }
      }
      & .btn {
        background: #f6f4f0;
        border: 1px solid #2a2c35;
        box-shadow: 0px 3px 0px #2a2c35;
        border-radius: 1000px;
        font-family: "Golos";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #2a2c35;
        padding: 20px 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 32px;
        & img {
          margin-right: 8px;
        }
      }
    }
    & .img_target {
      padding: 60px 70px;
      & .banner_img {
        min-width: 480px;
        height: 480px;
      }
      & .stamp {
        position: absolute;
        margin-left: -92px;
        margin-top: -170px;
        width: 192px;
        height: 192px;
      }
      @media (max-width: 1200px) {
        padding: 60px 60px;
        & .banner_img {
          min-width: 400px;
          height: 400px;
        }
        & .stamp {
          position: absolute;
          margin-left: -92px;
          margin-top: -150px;
          width: 175px;
          height: 175px;
        }
      }
      @media (max-width: 1000px) {
        padding: 30px 30px;
        & .banner_img {
          min-width: 300px;
          height: 300px;
        }
        & .stamp {
          position: absolute;
          margin-left: -75px;
          margin-top: -135px;
          width: 160px;
          height: 160px;
        }
      }
      @media (max-width: 700px) {
        display: none;
        align-items: center;
        justify-content: center;
        & .banner_img {
          min-width: 100%;
          height: auto;
        }
        & .stamp {
          position: absolute;
          margin-left: -50%;
          margin-top: 50%;
          width: 140px;
          height: 140px;
        }
      }
    }
    & .banner__text-resp {
      display: none;
      justify-content: center;
      & .banner__text-resp-items {
        p {
          font-weight: 400;
          font-size: 14px;
          line-height: 170%;
          text-align: center;
          font-family: "Golos";
          margin-bottom: 24px;
        }
        & .btn {
          text-align: center;
          display: flex;
          justify-content: center;
        }
      }
      @media (max-width: 700px) {
        display: flex;
      
      }
    }
  }
`;
