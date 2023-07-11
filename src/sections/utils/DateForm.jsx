import { month_list } from "../../utils/constants";

const DateForm = ({ created_at = "" }) => {
  return (
    <>
      {created_at.slice(8, 10)}{' '}
      {
        month_list[
          parseInt(created_at.slice(5, 7) < 10
            ? created_at.slice(6, 7)
            : created_at.slice(5, 7))-1
        ]
      }
      , {created_at.slice(0, 4)}
    </>
  );
};
export default DateForm;
