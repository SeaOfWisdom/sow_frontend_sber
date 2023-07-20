import { useState } from 'react';
import { CalendarContainer } from '../../styleComponents/utilsStyles/CalendarStyle';

const Calendar = ({ value = '', onChange = () => {} }) => {
  const nowDate = new Date();
  const monthList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const [openMonths, setOpenMonths] = useState(false);
  const [openYears, setOpenYears] = useState(false);
  const [selectDate, setSelectDate] = useState({
    day: nowDate.getDate(),
    month: nowDate.getMonth(),
    year: nowDate.getFullYear(),
  });
  const handleDate = (obj = {}) => {
    const dateValue = `${obj?.day >= 10 ? obj?.day : `0${obj?.day}`}-${
      // eslint-disable-next-line no-unsafe-optional-chaining
      obj?.month > 9 ? obj?.month + 1 : `0${obj?.month + 1}`
    }-${obj?.year}`;
    onChange(dateValue);
  };
  const selectMonth = m => {
    setOpenMonths(false);
    setSelectDate({ ...selectDate, month: m, day: 1 });
    handleDate({ ...selectDate, month: m, day: 1 });
  };
  const selectYear = y => {
    setOpenYears(false);
    setSelectDate({ ...selectDate, year: y, month: 0, day: 1 });
    handleDate({ ...selectDate, year: y, month: 0, day: 1 });
  };
  const selectDay = d => {
    setOpenYears(false);
    setSelectDate({ ...selectDate, day: d });
    handleDate({ ...selectDate, day: d });
  };
  const yearList = () => {
    const l = [];
    for (let i = nowDate.getFullYear(); i >= 2020; i--) {
      l.push(
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
        <div key={i} onClick={() => selectYear(i)}>
          {i}
        </div>
      );
    }
    return l;
  };

  const dayList = () => {
    // eslint-disable-next-line no-unsafe-optional-chaining
    const currentDate = new Date(selectDate?.year, selectDate?.month + 1, 0);
    const dayCount = currentDate.getDate();
    const firstDay = new Date(selectDate?.year, selectDate?.month, 1).getDay();
    const p = firstDay === 0 ? 6 : firstDay - 1;
    const dl = [];
    for (let j = 1; j <= p; j++) {
      dl.push(<div className="day" key={`${j}o`} id={`${j}o`} />);
    }
    for (let i = 1; i <= dayCount; i++) {
      dl.push(
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
        <div
          className={i === selectDate?.day ? 'day active_day' : 'day'}
          key={`${i}d`}
          onClick={() => selectDay(i)}
        >
          {i}
        </div>
      );
    }
    // console.log(dayCount, firstDay, p, selectDate, dl);
    return dl;
  };
  return (
    <CalendarContainer>
      <div className="date">
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div
          onClick={() => {
            setOpenMonths(true);
            setOpenYears(false);
          }}
          className="month"
        >
          {monthList[selectDate?.month]}{' '}
          <img src="/img/date_arrow.svg" className="arrow" alt="date" />
        </div>
        {openMonths && (
          <div className="select_item">
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
            <div className="active" onClick={() => setOpenMonths(false)}>
              {monthList[selectDate?.month]}
              <img
                src="/img/date_arrow.svg"
                className="arrow"
                alt="date"
              />{' '}
            </div>
            {monthList.map((item, index) => (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
              <div onClick={() => selectMonth(index)}>{item}</div>
            ))}
          </div>
        )}
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div
          onClick={() => {
            setOpenMonths(false);
            setOpenYears(true);
          }}
          className="year"
        >
          {selectDate?.year}{' '}
          <img src="/img/date_arrow.svg" className="arrow" alt="date" />
        </div>
        {openYears && (
          <div className="select_item select_year">
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
            <div className="active" onClick={() => setOpenYears(false)}>
              {selectDate?.year}{' '}
              <img src="/img/date_arrow.svg" className="arrow" alt="date" />{' '}
            </div>
            {yearList()}
          </div>
        )}
      </div>
      <div className="days">
        <div className="d_row week_row">
          <div className="day">Mo</div>
          <div className="day">Tu</div>
          <div className="day">We</div>
          <div className="day">Th</div>
          <div className="day">Fr</div>
          <div className="day">Sa</div>
          <div className="day">Su</div>
        </div>
        <div className="d_row">{dayList()}</div>
      </div>
    </CalendarContainer>
  );
};
export default Calendar;
