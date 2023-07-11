import styled from "styled-components";

export const FillYourProfileStyle = styled.div`
  & .fill_you_profile {
    border-width: 1.5px;
    border-style: solid;
    border-image: linear-gradient(259.76deg, #d890f0 -0.6%, #73dac8 107.36%) 1.5;
    z-index: 4;
    position: fixed;
    bottom: 100px;
    right: 36px;
    border: 1.5px solid transparent;
    background: linear-gradient(0deg, rgba(42, 44, 53, 0.95), rgba(42, 44, 53, 0.95)) padding-box,
      linear-gradient(259.76deg, #d890f0 -0.6%, #73dac8 107.36%) border-box;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 16px 12px;
    width: 207px;
    animation: fill_you_profile 0.5s ease;
    display: ${({ isActive }) => (isActive ? "none" : "block")};
    cursor: pointer;
    & img {
      margin-bottom: 8px;
    }
    & .text {
      display: flex;
      justify-content: space-between;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      color: #ffffff;
      margin-bottom: 8px;
      & p {
        font-family: "Golos";
        font-weight: 400;
        font-size: 12px;
      }
      & .percentage {
        font-family: "Golos";
        font-weight: 400;
        font-size: 12px;
      }
    }
    & .chakra-stack {
      & .css-rfef5l {
        border-radius: 3px;
        background: #716f6f;
        /* opacity: 0.2; */
        & div {
          background: #8be4d4;
          z-index: 9999;
          border-radius: 3px;
        }
      }
    }
  }
  & .modal {
    cursor: pointer;
    display: ${({ isActive }) => (isActive ? "block" : "none")};
    z-index: 4;
    position: fixed;
    bottom: 180px;
    right: 36px;
    background: #ffffff;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    padding: 12px 16px;
    width: 400px;
    animation: showmodal 0.5s ease;
    @media (max-width: 900px) {
      right: 15px;
    }
    @media (max-width: 450px) {
      width: calc(100% - 30px);
      bottom: 160px;
      animation: showmodal2 0.5s ease;
    }
    & .add-table {
      display: flex;
      align-items: flex-start;
      border-top: 1px solid #e0e5e7;
      padding-top: 12px;
      margin-bottom: 12px;
      :first-child {
        border-top: none;
      }

      & img {
        margin-right: 14px;
      }
      & .add {
        & .add-items {
          /* margin-bottom: 12px; */

          & h5 {
            color: #2a2c35;
            font-family: "Lora";
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 150%;
            margin-bottom: 4px;
          }
          & p {
            font-family: "Golos";
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 160%;
            color: #847f99;
          }
        }
        & .btn {
          background: #8be4d4;
          padding: 12px 24px;
          font-family: "Golos";
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 14px;
          color: #2a2c35;
          border: 1px solid #2a2c35;
          box-shadow: 0px 1px 0px #2a2c35;
          border-radius: 1000px;
          margin-top: 12px;
          display: inline-block;
        }
      }
      & .not {
        opacity: 0.5;
        .add-items {
          h5 {
            text-decoration-line: line-through;
          }
        }
      }
    }
  }
  & .close {
    border: 1.5px solid transparent;
    background: linear-gradient(0deg, rgba(42, 44, 53, 0.95), rgba(42, 44, 53, 0.95)) padding-box,
      linear-gradient(259.76deg, #d890f0 -0.6%, #73dac8 107.36%) border-box;
    cursor: pointer;
    display: ${({ isActive }) => (isActive ? "block" : "none")};
    z-index: 1;
    position: fixed;
    bottom: 100px;
    right: 130px;
    transition: 0.6s ease-in-out;
    /* background: rgba(42, 44, 53, 0.95); */
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
    border-radius: 166.667px;
    animation: show 0.5s ease;
    & img {
      padding: 22px;
    }
    @media (max-width: 450px) {
      right: 50px;
      & img {
        padding: 15px;
      }
    }
  }
  @keyframes show {
    from {
      bottom: 80px;
      opacity: 0;
    }
    to {
      bottom: 100px;
      opacity: 1;
    }
  }
  @keyframes showmodal {
    from {
      bottom: 160px;
      opacity: 0;
    }
    to {
      bottom: 180px;
      opacity: 1;
    }
  }
  @keyframes showmodal2 {
    from {
      bottom: 140px;
      opacity: 0;
    }
    to {
      bottom: 160px;
      opacity: 1;
    }
  }

  @keyframes fill_you_profile {
    from {
      bottom: 120px;
      opacity: 0;
    }
    to {
      bottom: 100px;
      opacity: 1;
    }
  }
`;
