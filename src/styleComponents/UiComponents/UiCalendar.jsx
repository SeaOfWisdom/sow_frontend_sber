import styled from "styled-components";

export const UiCalendar = styled.div`
  position: relative;
  & button {
  }
  & .from {
    /* overflow: hidden; */
    position: absolute;
    left: 4px;
    top: 8px;
    margin-top: 50px;
    display: flex;
    z-index: 2;
    box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.05);
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
    transform: translateY(${({ isActive }) => (isActive ? "0" : "-12px")});
    opacity: ${({ isActive }) => (isActive ? 1 : 0)};
    visibility: ${({ isActive }) => (isActive ? "visible" : "hidden")};
    @media (max-width: 900px) {
      left: -36px;
      top: 12px;
    }
    @media (max-width: 500px) {
      left: -32px;
      top: 12px;
    }
  }
  & .modal-backdrop {
    position: ${({ isActive }) => (isActive ? "fixed" : "")};
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .close {
    visibility: hidden;
  }
`;
