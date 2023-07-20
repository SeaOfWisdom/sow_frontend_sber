import styled from 'styled-components';

export const SettingsSelectContainer = styled.div`
  & > .label {
    font-family: 'Golos';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #2a2c35;
    & > span {
      font-family: 'Golos';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: #ff6a6a;
      margin-left: 2px;
    }
  }
  & > .itarget {
    background: #ffffff;
    border: 1px solid #cfd2d8;
    border-radius: 6px;
    margin: 10px 0;
    display: flex;
    align-items: center;
    cursor: pointer;

    & > .select_value {
      height: 48px;
      padding: 16px 24px;
      border-radius: 6px;
      width: 100%;
    }
    & > .icon {
      margin-right: 24px;
      height: 24px;
      width: 24px;
    }
  }
  & .disabled {
    background-color: #f0f3f4 !important;
    color: #847f99;
    cursor: not-allowed;
  }
  & > .error {
    font-family: 'Golos';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #ff6a6a;
    margin-left: 2px;
  }
`;
