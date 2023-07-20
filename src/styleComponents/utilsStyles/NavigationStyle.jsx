import styled from 'styled-components';

export const NavigationContainer = styled.div`
  padding: 24px 0px;
  @media (max-width: 900px) {
    padding: 10px 0px;
  }
  & .navs {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    & .nav {
      padding-right: 10px;
      & a {
        font-family: 'Golos';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #2a2c35;
      }
      & .icon {
        transform: rotate(-90deg);
        width: 12px;
        height: 12px;
        margin-top: 5px;
      }
    }
    & .active {
      font-family: 'Golos';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #847f99;
    }
  }
`;
