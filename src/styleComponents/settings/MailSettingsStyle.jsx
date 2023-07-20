import styled from 'styled-components';

export const MailSettingsContainer = styled.div`
  & > .title {
    font-family: 'Lora';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 31px;
    color: #2a2c35;
    padding-bottom: 28px;
  }
`;

export const MailCodeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & > .mtitle {
    font-family: 'Lora';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 150%;
    text-align: center;
    color: #2a2c35;
  }
  & > .desc {
    font-family: 'Golos';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 180%;
    text-align: center;
    color: #2a2c35;
    margin: 12px 0 0px 0;
  }
  & > .btns {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    & > .btn {
      max-width: 375px;
      width: 100%;
      height: 59px;
      background: #8be4d4;
      border: 1px solid #2a2c35;
      box-shadow: 0px 3px 0px #2a2c35;
      border-radius: 1000px;
      font-family: 'Golos';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 17px;
      color: #2a2c35;
    }
  }
  & > .code {
    padding: 36px 0;
    & .chakra-pin-input {
      background: #ffffff;
      border: 1px solid #cfd2d8;
      border-radius: 6px;
      width: 48px;
      height: 60px;
      font-family: 'Golos';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #2a2c35;
    }
  }
  & > .footext {
    font-family: 'Golos';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 180%;
    text-align: center;
    color: #2a2c35;
    padding-top: 36px;
    & > span {
      font-family: 'Golos';
      font-style: normal;
      font-size: 14px;
      line-height: 180%;
      font-weight: 500;
      padding-left: 8px;
      text-decoration-line: underline;
    }
  }
`;
