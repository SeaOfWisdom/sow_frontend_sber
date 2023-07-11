import { useState } from "react";
import { CalendarContainer } from "../../styleComponents/utilsStyles/CalendarStyle";

const Calendar = ({ value = "", onChange = () => {} }) => {
  const now_date = new Date();
  const month_list = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [openMonths, setopenMonths] = useState(false);
  const [openYears, setopenYears] = useState(false);
  const [select_date, setSelect_date] = useState({
    day: now_date.getDate(),
    month: now_date.getMonth(),
    year: now_date.getFullYear(),
  });
  const selectMonth = (m) => {
    setopenMonths(false);
    setSelect_date({ ...select_date, month: m, day: 1 });
    handleDate({ ...select_date, month: m, day: 1 });
  };
  const selectYear = (y) => {
    setopenYears(false);
    setSelect_date({ ...select_date, year: y, month: 0, day: 1 });
    handleDate({ ...select_date, year: y, month: 0, day: 1 });
  };
  const selectDay = (d) => {
    setopenYears(false);
    setSelect_date({ ...select_date, day: d });
    handleDate({ ...select_date, day: d });
  };
  const year_list = () => {
    let l = [];
    for (let i = now_date.getFullYear(); i >= 2020; i--) {
      l.push(
        <div key={i} onClick={() => selectYear(i)}>
          {i}
        </div>
      );
    }
    return l;
  };
  const handleDate = (obj = {}) => {
    let datevalue = `${obj?.day >= 10 ? obj?.day : `0${obj?.day}`}-${
      obj?.month > 9 ? obj?.month + 1 : `0${obj?.month + 1}`
    }-${obj?.year}`;
    onChange(datevalue);
  };

  const day_list = () => {
    const current_date = new Date(select_date?.year, select_date?.month + 1, 0);
    const day_count = current_date.getDate();
    const first_day = new Date(
      select_date?.year,
      select_date?.month,
      1
    ).getDay();
    const p = first_day === 0 ? 6 : first_day - 1;
    let dl = [];
    for (let j = 1; j <= p; j++) {
      dl.push(<div className="day" key={j + "o"} id={j + "o"}></div>);
    }
    for (let i = 1; i <= day_count; i++) {
      dl.push(
        <div
          className={i === select_date?.day ? "day active_day" : "day"}
          key={i + "d"}
          onClick={() => selectDay(i)}
        >
          {i}
        </div>
      );
    }
    // console.log(day_count, first_day, p, select_date, dl);
    return dl;
  };
  return (
    <>
      <CalendarContainer>
        <div className="date">
          <div
            onClick={() => {
              setopenMonths(true);
              setopenYears(false);
            }}
            className="month"
          >
            {month_list[select_date?.month]}{" "}
            <img src="/img/date_arrow.svg" className="arrow" alt="date" />
          </div>
          {openMonths && (
            <div className="select_item">
              <div className="active" onClick={() => setopenMonths(false)}>
                {month_list[select_date?.month]}
                <img
                  src="/img/date_arrow.svg"
                  className="arrow"
                  alt="date"
                />{" "}
              </div>
              {month_list.map((item, index) => (
                <div onClick={() => selectMonth(index)}>{item}</div>
              ))}
            </div>
          )}
          <div
            onClick={() => {
              setopenMonths(false);
              setopenYears(true);
            }}
            className="year"
          >
            {select_date?.year}{" "}
            <img src="/img/date_arrow.svg" className="arrow" alt="date" />
          </div>
          {openYears && (
            <div className="select_item select_year">
              <div className="active" onClick={() => setopenYears(false)}>
                {select_date?.year}{" "}
                <img src="/img/date_arrow.svg" className="arrow" alt="date" />{" "}
              </div>
              {year_list()}
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
          <div className="d_row">{day_list()}</div>
        </div>
      </CalendarContainer>
    </>
  );
};
export default Calendar;
