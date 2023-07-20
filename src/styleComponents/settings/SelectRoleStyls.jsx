import styled from 'styled-components';

export const SelectRoleContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 50px 60px;
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
    padding-bottom: 24px;
  }
  & > .navbar {
    display: flex;
    margin: 0 -12px;
    @media (max-width: 700px) {
      display: block;
    }
    & > .link {
      flex: 1;
      margin: 0 12px;
      background: #ffffff;
      border: 1px solid #f0f3f4;
      border-radius: 12px;
      padding: 26px;
      display: flex;
      & > .icon {
        padding-right: 14px;
        & .active_icon {
          display: none;
        }
        & > img {
          min-height: 24px;
          min-width: 24px;
          height: 24px;
          width: 24px;
        }
      }
      & .rtitle {
        font-family: 'Lora';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 150%;
        color: #2a2c35;
      }
      & .desc {
        font-family: 'Golos';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 160%;
        color: #2a2c35;
      }
    }
    & > .link1.active {
      background: #ffb7bb;
      border: 1px solid #2a2c35;
      box-shadow: 0px 2px 0px #2a2c35;
      @media (max-width: 700px) {
        margin-bottom: 16px;
      }
      & > .icon {
        padding-right: 14px;
        & .active_icon {
          display: inline;
        }
        & .passive_icon {
          display: none;
        }
      }
    }
    & > .link2.active {
      background: #8be4d4;
      border: 1px solid #2a2c35;
      box-shadow: 0px 2px 0px #2a2c35;
      @media (max-width: 700px) {
        margin-top: 16px;
      }
      & > .icon {
        padding-right: 14px;
        & .active_icon {
          display: inline;
        }
        & .passive_icon {
          display: none;
        }
      }
    }
  }
`;
