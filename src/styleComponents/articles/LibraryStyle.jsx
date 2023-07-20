import styled from 'styled-components';

export const LibraryContainer = styled.section`
  padding: 0px 36px 0px 36px;
  @media (max-width: 900px) {
    padding: 15px;
  }
  & .title {
    font-family: 'Lora';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 140%;
    color: #2a2c35;
    margin: 24px 0;
    @media (max-width: 900px) {
      font-size: 20px;
      line-height: 140%;
      margin: 14px 0 16px;
    }
  }
  & .search_target {
    margin-bottom: 32px;
  }
  & .btns {
    padding-bottom: 36px;
    display: flex;
    @media (max-width: 500px) {
      overflow-x: scroll;
    }
    & .btn {
      white-space: pre;
      background: #ffffff;
      border: 1px solid #2a2c35;
      box-shadow: 0px 2px 0px #2a2c35;
      border-radius: 1000px;
      padding: 12px 16px;
      font-weight: 500;
      margin: 0 12px 12px 0;
      display: inline-flex;
      justify-content: space-between;
      align-items: center;
      min-height: 48px;
      font-style: normal;

      font-size: 14px;
      line-height: 17px;
      color: #2a2c35;
      cursor: pointer;
      & div {
        font-family: 'Golos';
      }
      & .close_btn {
        margin-left: 4px;
        cursor: pointer;
        width: 12px;
        height: 12px;
      }
    }
    & .mobile {
      display: none;
      @media (max-width: 500px) {
        display: flex !important;
        display: block;
      }
    }
    & .desktop {
      display: block;
      @media (max-width: 500px) {
        display: none;
      }
    }
    & .btn_disabled {
      background: #f6f4f0;
      & .close_btn {
        display: none;
      }
    }
  }
  & .result {
    border-top: 1px solid #2a2c35;
    margin: 0px 0 36px 0;
    padding-top: 50px;
    & .rtitle {
      font-family: 'Lora';
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 31px;
      color: #2a2c35;
    }
    & .rtext {
      padding-top: 16px;
      font-family: 'Golos';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #2a2c35;
    }
  }
`;
