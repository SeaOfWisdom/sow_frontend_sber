import styled from 'styled-components';

export const SettingsMobileContainer = styled.div`
  & .s_container {
    padding: 16px;
    min-height: 585px;
    & .links {
      & .link {
        cursor: pointer;
        padding: 16px;
        background: #ffffff;
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
        border-radius: 12px;
        display: flex;
        align-items: center;
        margin-bottom: 12px;
        font-family: 'Golos';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #2a2c35;
        & img {
          margin-right: 12px;
        }
      }
    }
  }
`;
