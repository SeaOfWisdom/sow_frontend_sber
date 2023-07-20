import { monthList } from '../../utils/constants';

const DateForm = ({ createdAt = '' }) => (
  <>
    {createdAt.slice(8, 10)}{' '}
    {
      monthList[
        // eslint-disable-next-line
        parseInt(
          createdAt.slice(5, 7) < 10
            ? createdAt.slice(6, 7)
            : createdAt.slice(5, 7)
        ) - 1
      ]
    }
    , {createdAt.slice(0, 4)}
  </>
);
export default DateForm;
