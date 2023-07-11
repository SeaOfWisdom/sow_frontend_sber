import React from "react";
import styled from "styled-components";
import Checkbox from "../utils/Checkbox";

const ModalDateMobileStyle = styled.div`
  & .date {
    & .date-item {
      display: flex;
      justify-content: space-between;
      border-radius: 12px;
      margin-bottom: 12px;
      padding: 16px;
      background: white;
      :last-child{
       margin-bottom: 0px;
      }
      & span {
        font-size: 14px;
        font-family: Golos;
        font-weight: 500;
        line-height: 150%;
      }
    }
  }
  & .btn {
    padding: 15px 24px;
    text-align: center;
    font-size: 16px;
    font-family: Golos;
    font-weight: 500;
    border-radius: 1000px;
    border: 1px solid #2a2c35;

    box-shadow: 0px 2px 0px 0px #2a2c35;
    cursor: pointer;
  }
  & .btn-select {
    background: #f0f3f4;
    margin-bottom: 24px;
    margin-top: 24px;
  }
  & .btn-confirm {
    background-color: #8be4d4;
  }
`;
const ModalDateMobile = ({ setIsDateModal  ,setmodal}) => {
  return (
    <ModalDateMobileStyle>
      <div className="date">
        <div className="date-item">
          <span>За все время</span>{" "}
          <Checkbox
            className="checkbox"
            name="check2"
            // checked={check?.check2}
            // onChange={(e) => {
            //   setCheck({ ...check, check2: !check?.check2 });
            //   setErr({ ...err, check2: false });
            // }}
          />
        </div>
        <div className="date-item">
          <span>с 2023</span>{" "}
          <Checkbox
            className="checkbox"
            name="check2"
           
          />
        </div>
        <div className="date-item">
          <span>с 2022</span>{" "}
          <Checkbox
            className="checkbox"
            name="check2"
           
          />
        </div>
        <div className="date-item">
          <span>с 2021</span>{" "}
          <Checkbox
            className="checkbox"
            name="check2"
           
          />
        </div>
      </div>
      <div
        className="btn btn-select"
         onClick={()=>{setIsDateModal(true);
          setmodal(false)
        
        }}
      >
        Выбрать даты
      </div>
      <div className="btn btn-confirm">Подтвердить</div>
    </ModalDateMobileStyle>
  );
};

export default ModalDateMobile;
