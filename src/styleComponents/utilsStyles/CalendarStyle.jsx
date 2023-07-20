import styled from 'styled-components';

export const CalendarContainer = styled.div`
  /* margin: 36px; */
  padding: 15px 24px;
  background: #ffffff;
  /* box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.05); */
  border-radius: 6px;
  /* width: 251px; */
  font-family: 'Golos';
  font-style: normal;
  box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.05);
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  color: #2a2c35;
  display: inline-flex;
  flex-direction: column;
  & .date {
    font-family: 'Golos';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #2a2c35;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    & .month {
      display: flex;
      width: 95px;
      font-family: 'Golos';
      align-items: center;
      justify-content: center;
      padding: 0 6px;
      cursor: pointer;
      & .arrow {
        margin-left: 6px;
        transform: rotate(180deg);
      }
    }
    & .year {
      font-family: 'Golos';
      width: 55px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 6px;
      cursor: pointer;
      & .arrow {
        margin-left: 6px;
        transform: rotate(180deg);
      }
    }
  }
  & .days {
    padding-top: 10px;

    & .d_row {
      display: flex;
      /* width: 168px; */
      width: 168px;
      flex-wrap: wrap;
      & .day {
        font-family: 'Golos';
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        font-weight: 400;
        font-size: 11px;
        line-height: 13px;
        justify-content: center;
        border-radius: 24px;
        cursor: pointer;
        &:hover {
          background-color: #f0f3f4;
        }
      }
      & .active_day {
        background: #8be4d4;
        &:hover {
          background-color: #8be4d4;
          opacity: 0.8;
        }
      }
    }
    & .week_row {
      & .day {
        cursor: default !important;
        &:hover {
          background-color: transparent !important;
        }
      }
    }
  }

  & .select_item {
    padding: 5px 0px 5px 0px;
    background: #f0f3f4;
    border-radius: 4px;
    position: absolute;

    margin-left: -60px;
    margin-top: -8px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 12px;
    & > div {
      padding: 3px 11px;
      cursor: pointer;
      font-family: 'Golos';
      &:hover {
        background: #8be4d4;
        border-radius: 4px;
      }
    }
    & .active {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-family: 'Golos';
      &:hover {
        background: #fff;
      }
      & .arrow {
        margin-left: 6px;
      }
    }
  }
  & .select_year {
    margin-left: 90px;
  }
`;
