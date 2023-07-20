import styled from 'styled-components';

export const BannerContainer = styled.section`
  padding: 0 36px;
  @media (max-width: 900px) {
    padding: 0 15px;
  }
  & .banner {
    height: 593vh;
    max-height: 593px;
    min-height: 450px;
    background-color: #82dbcb;
    background-image: url('/img/banner_bg.svg');
    background-size: cover;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (max-width: 900px) {
      margin-top: 16px;
    }
    @media (max-width: 600px) {
      height: auto;
      padding: 24px;
    }
    & h1 {
      font-family: 'Lora';
      font-style: normal;
      font-weight: 600;
      font-size: 55px;
      line-height: 140%;
      text-align: center;
      color: #2a2c35;
      background: transparent;
      margin: 0 16px 16px 16px;
      @media (max-width: 750px) {
        font-size: 32px;
        margin: 15px;
      }
      @media (max-width: 450px) {
        font-weight: 600;
        font-size: 26px;
        line-height: 140%;

        color: #2a2c35;
      }
    }
    & p {
      font-family: 'Golos';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 170%;
      text-align: center;
      color: #2a2c35;
      background: transparent;
      margin: 0 16px 36px 16px;
      max-width: 750px;
      @media (max-width: 500px) {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 170%;
      }
    }
    & .search_target {
      background-color: #ffffff;
      border: 1px solid #2a2c35;
      box-shadow: 0px 2px 0px #2a2c35;
      border-radius: 10px;
      padding: 18px 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      & .search_icon {
        width: 20px;
        height: 20px;
      }
      & .search_input {
        font-family: 'Golos' !important;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #2a2c35;
        background-color: #ffffff;
        border: 0;
        min-width: 590px;
        margin-left: 14px;
        @media (max-width: 750px) {
          min-width: 400px;
        }
        @media (max-width: 550px) {
          min-width: 300px;
        }
        @media (max-width: 450px) {
          min-width: 200px;
        }
      }
      @media (max-width: 700px) {
        display: none;
      }
      & #search {
        height: 21px;
      }
      & #search:focus::-webkit-input-placeholder {
        color: #cfd2d8;
      }
      & #search::-webkit-search-cancel-button {
        width: 26px;
        height: 21px;
        -webkit-appearance: none;
        appearance: none;
        background-image: url('/img/close-circle-search.svg');
        cursor: pointer;
        background-repeat: no-repeat;
        background-position: center;
        /* outline: 0; */
      }
    }
    & .filters {
      display: flex;
      padding-top: 24px;
      @media (max-width: 700px) {
        padding: 0px 0;
        flex-direction: column;
      }
      & .filter {
        /* background: #F6F4F0;
                border: 1px solid #2A2C35;
                box-shadow: 0px 2px 0px #2A2C35;
                border-radius: 100px;
                padding: 14px 20px; */
        &.mobile {
          display: none;
        }
        margin: 0 8px;
        @media (max-width: 700px) {
          margin: 0 0 15px 0;
          &.decktop {
            display: none;
          }
          &.mobile {
            display: block;
          }
        }
        /* & select{
                    background: transparent;
                    border: 0;
                    font-family: 'Golos';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 19px;
                    color: #2A2C35;
                } */
      }
    }
  }
  & .stamp_target {
    display: flex;
    justify-content: right;
    & .stamp {
      position: absolute;
      width: 192px;
      height: 192px;
      margin-top: -135px;
      margin-right: 36px;
      @media (max-width: 1000px) {
        width: 100px;
        height: 100px;
        margin-top: -75px;
        margin-right: 15px;
      }
    }
  }
`;
