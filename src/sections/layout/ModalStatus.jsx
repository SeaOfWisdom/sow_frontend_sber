import React from 'react';
import styled from 'styled-components';
import Checkbox from '../utils/Checkbox';

const ModalDateMobileStyle = styled.div`
  & .date {
    & .date-item {
      display: flex;
      /* justify-content: space-between; */
      border-radius: 12px;
      margin-bottom: 24px;
      /* padding: 16px; */
      & .checkbox {
        margin-right: 12px;
      }
      :last-child {
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

  & .btn-confirm {
    margin-top: 24px;
    background-color: #8be4d4;
  }
`;
const ModalStatus = ({ setIsDateModal }) => (
  // eslint-disable-next-line
  <>
    <ModalDateMobileStyle>
      <div className="date">
        <div className="date-item">
          <Checkbox
            className="checkbox"
            name="check2"
            // checked={check?.check2}
            // onChange={(e) => {
            //   setCheck({ ...check, check2: !check?.check2 });
            //   setErr({ ...err, check2: false });
            // }}
          />
          <span>Все статусы </span>{' '}
        </div>

        <div className="date-item">
          <Checkbox className="checkbox" name="check2" />{' '}
          <span>Опубликована</span>
        </div>
        <div className="date-item">
          <Checkbox className="checkbox" name="check2" />{' '}
          <span>На рассмотрении</span>
        </div>
        <div className="date-item">
          <Checkbox className="checkbox" name="check2" />{' '}
          <span>Отклонена админом </span>
        </div>
        <div className="date-item">
          <Checkbox className="checkbox" name="check2" />{' '}
          <span>Отклонена валидатором</span>
        </div>
      </div>
      {/* <div className="btn btn-select">Выбрать даты</div> */}
      <div className="btn btn-confirm">Сохранить изменения</div>
    </ModalDateMobileStyle>
  </>
);

export default ModalStatus;
