import styled from 'styled-components';

export const RoleAuthorContainer = styled.section`
  padding: 0 36px;
  @media (max-width: 900px) {
    padding: 16px 16px 0;
  }
  & > .role_container {
    border-top: 1px solid #2a2c35;
    padding: 32px 0 40px 0;
    @media (max-width: 900px) {
      border-top: none;
      padding: 0 0 24px 0;
    }
    & .profile {
      margin: 8px 0;
      padding: 50px 60px;
      background: #ffffff;
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
      border-radius: 12px;
      @media (max-width: 900px) {
        padding: 16px;
      }
      & > .title {
        font-family: 'Lora';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 31px;
        color: #2a2c35;
        padding-bottom: 28px;
      }
      & .input_container {
        margin: -12px;
        & .row {
          display: flex;
          @media (max-width: 900px) {
            display: block;
          }
          & > .col {
            flex: 1;
            margin: 12px;
            & .select_label {
              font-family: 'Golos';
              font-style: normal;
              font-weight: 400;
              font-size: 14px;
              line-height: 17px;
              color: #2a2c35;
            }
            & > .checkbox {
              cursor: pointer;
              display: flex;
              align-items: center;
              font-family: 'Golos';
              font-style: normal;
              font-weight: 400;
              font-size: 14px;
              line-height: 17px;
              color: #2a2c35;
              & > .check {
                margin-right: 14px;
              }
              & > span {
                font-family: 'Golos';
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 17px;
                color: #ff6a6a;
                margin-left: 2px;
              }
              & > .bolt {
                font-family: 'Golos';
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 19px;
                text-decoration-line: underline;
                color: #2a2c35;
                margin-left: 8px;
              }
            }
          }
        }
      }
    }
    & .btns {
      background: #ffffff;
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
      border-radius: 12px;
      padding: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      & > .cancel {
        background: #f0f3f4;
        border: 1px solid #2a2c35;
        box-shadow: 0px 3px 0px #2a2c35;
        border-radius: 1000px;
        font-family: 'Golos';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        padding: 20px 36px;
        color: #2a2c35;
        margin: 0 12px;
        @media (max-width: 900px) {
          padding: 20px 24px;
        }
      }
      & > .save {
        background: #8be4d4;
        border: 1px solid #2a2c35;
        box-shadow: 0px 3px 0px #2a2c35;
        border-radius: 1000px;
        font-family: 'Golos';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        padding: 20px 36px;
        color: #2a2c35;
        margin: 0 12px;
        @media (max-width: 900px) {
          padding: 20px 24px;
        }
      }
    }
  }
`;
