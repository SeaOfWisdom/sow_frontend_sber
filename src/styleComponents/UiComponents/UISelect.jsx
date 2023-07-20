import styled from 'styled-components';

export const UiSelect = styled.div`
  position: relative;
  border: 1px solid #2a2c35;
  border-radius: 1000px;
  cursor: pointer;
  padding: 15px 24px;

  & .langspan {
    font-size: 14px;
    margin-right: 10px;
    line-height: 17px;
    font-weight: 500;
    font-family: 'Golos';
    color: #2a2c35;
  }
  & button {
    background: transparent;
    border: none;
    font-weight: 500;
    font-size: 16px;
    color: #303030;
    height: 30px;
    padding: 0;
    margin: 0;
    display: flex;
    cursor: pointer;
    align-items: center;
    & span {
      margin: 0 6px;
    }
  }
  & ul {
    background: #ffffff;

    box-shadow: 0 0 10px rgba(13, 46, 105, 0.2);
    list-style: none;
    margin: 0;
    overflow: hidden;
    padding: 0;
    position: absolute;
    left: 0px;
    top: 8px;
    margin-top: 50px;
    display: flex;
    padding: 12px 24px;
    z-index: 2;
    flex-direction: column;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
    border-radius: 16px;
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
    transform: translateY(${({ isActive }) => (isActive ? '0' : '-12px')});
    opacity: ${({ isActive }) => (isActive ? 1 : 0)};
    visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
    /* @media (max-width: 1500px) {
      margin-top: 50px;
    } */

    & div {
      cursor: pointer;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      font-family: 'Golos';
      padding: 12px 0px;
      white-space: nowrap;
      margin: 0;
      &[data-active='active'] {
        background: #5762f7;
        color: #ffffff;
      }
      &[data-active='inactive'] {
        background: transparent;
      }
      &:last-child {
        border-bottom: none;
      }

      & p {
        height: 100%;
        margin: 0;
        width: 100%;
      }
      & span {
        display: flex;
        justify-content: left;
        align-items: center;
        font-family: Golos;
        & .statuslabel {
          font-family: 'Golos';
          color: #2a2c35;
          font-weight: 400;
          font-size: 14px;
          line-height: 150%;
          margin-left: 14px;
        }
        /* & input {
          border: 1.5px solid #cfd2d8;
          width: 18.5px;
          height: 18.5px;
          cursor: pointer;
          margin-right: 14px;
          border-radius: 2px;
        } */

        input[type='checkbox'] {
          background: #8be4d4;
        }
      }
      &:hover {
        color: #53c5b0;
      }
    }
  }
`;
