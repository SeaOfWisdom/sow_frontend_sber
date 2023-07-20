import styled from 'styled-components';

export const SettingsContainer = styled.div`
  padding: 0px 36px 0 36px;
  @media (max-width: 900px) {
    display: none;
  }
  & > .s_container {
    padding: 32px 0 0 0;
    border-top: 1px solid #2a2c35;
    & > .s_card {
      background: #ffffff;
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
      border-radius: 12px;
      display: flex;
      min-height: 686px;
      & > .bar {
        min-width: 312px;
        width: 312px;
        border-right: 1px solid #f0f3f4;
        & > .title {
          padding: 32px 24px 28px 24px;
          font-family: 'Lora';
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
          line-height: 31px;
          color: #2a2c35;
        }
        & > .links {
          padding-right: 36px;
          & > .link {
            display: flex;
            align-items: center;
            font-family: 'Golos';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
            color: #2a2c35;
            padding: 20px 24px;
            border-radius: 0px 10px 10px 0px;
            &:hover {
              background: #fddafc;
            }
            & > img {
              width: 24px;
              height: 24px;
              margin-right: 16px;
            }
          }
          & > .active {
            background: rgba(216, 144, 240, 0.1);
          }
        }
      }
      & > .section {
        padding: 32px 60px;
        width: 100%;
      }
      & > .section_about {
        padding: 36px 24px;
        width: 100%;
      }
    }
  }
  & > .s_container_help {
    /* padding: 32px 0 0 0; */
    /* border-top: 1px solid #2A2C35;  */
    padding-bottom: 44px;
    & > .s_card {
      background: #ffffff;
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
      border-radius: 12px;
      display: flex;
      min-height: 686px;
      & > .bar {
        min-width: 324px;
        width: 324px;
        border-right: 1px solid #f0f3f4;
        & > .title {
          padding: 36px 24px 28px 24px;
          font-family: 'Lora';
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
          line-height: 31px;
          color: #2a2c35;
        }
        & > .links {
          padding-right: 24px;
          & > .link {
            display: flex;
            align-items: center;
            font-family: 'Golos';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
            color: #2a2c35;
            padding: 20px 0px 24px 24px;
            border-radius: 0px 10px 10px 0px;
            &:hover {
              background: #fddafc;
            }
            & > img {
              width: 24px;
              height: 24px;
              margin-right: 16px;
            }
          }
          & > .active {
            background: rgba(216, 144, 240, 0.1);
          }
        }
      }
      & > .section {
        padding: 32px 60px;
        width: 100%;
      }
      & > .section_about {
        padding: 36px 24px;
        width: 100%;
      }
    }
  }
`;
