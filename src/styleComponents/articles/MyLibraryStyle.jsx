import styled from 'styled-components';

export const MyLibraryContainer = styled.section`
  padding: 0px 36px 0px 36px;
  @media (max-width: 900px) {
    padding: 0px 15px;
  }
  & > .hr {
    border-top: 1px solid #2a2c35;
    @media (max-width: 900px) {
      border-top: none;
    }
  }
  & .bar {
    align-items: center;
    background: #ffffff;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    margin: 32px 0 24px 0;
    padding: 32px 24px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 700px) {
      display: block;
      padding: 16px 16px 26px;
      margin: 16px 0px 12px;
    }
    @media (max-width: 900px) {
      margin-top: 16px;
    }
    @media (max-width: 500px) {
      margin-top: 16px;
    }
    & .title {
      font-family: 'Lora';
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 31px;
      color: #2a2c35;
      @media (max-width: 700px) {
        margin-bottom: 26px;
        font-size: 20px;
      }
    }
    & .btns {
      & .btn {
        background: #fff;
        border-radius: 1000px;
        font-family: 'Golos';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #2a2c35;
        padding: 15px 24px;
        border: 1px solid #2a2c35;

        @media (max-width: 700px) {
          margin-top: 10px;
          padding: 15px;
        }
      }
      & .active {
        background: #2a2c35;
        border-radius: 1000px;
        font-family: 'Golos';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #ffffff;
        padding: 15px 24px;
        @media (max-width: 700px) {
          margin-top: 10px;
        }
      }
      & .first {
        margin-right: 15px;
      }
    }
  }
  & .no_data {
    background: #ffffff;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 123px 36px;
    margin-top: 50px;
    @media (max-width: 900px) {
      margin-top: 16px;
      padding: 60px 33px;
    }
    & .target {
      max-width: 435px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      & > img {
        height: 90px;
        width: 90px;
      }
      & > .ntitle {
        font-family: 'Lora';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 150%;
        text-align: center;
        color: #2a2c35;
        padding: 24px 0 8px 0;
      }
      & > .desc {
        font-family: 'Golos';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 180%;
        text-align: center;
        color: #2a2c35;
      }
      & > .btn {
        margin-top: 24px;
        background: #8be4d4;
        border: 1px solid #2a2c35;
        box-shadow: 0px 2px 0px #2a2c35;
        border-radius: 1000px;
        font-family: 'Golos';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #2a2c35;
        padding: 0 24px;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
    }
  }
`;
