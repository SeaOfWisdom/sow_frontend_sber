import { month_list } from "../../utils/constants";

const Created_at = ({ created_at = "" }) => {
  return (
    <>
      {created_at.slice(8, 10)}{' '}
      {
        month_list[
          created_at.slice(5, 7) < 10
            ? created_at.slice(6, 7)
            : created_at.slice(5, 7)
        ]
      }
      , {created_at.slice(0, 4)}
    </>
  );
};
export default Created_at;