import { monthList } from '../../utils/constants';

const CreatedAt = ({ createdAt = '' }) => (
  <>
    {createdAt.slice(8, 10)}{' '}
    {
      monthList[
        createdAt.slice(5, 7) < 10
          ? createdAt.slice(6, 7)
          : createdAt.slice(5, 7)
      ]
    }
    , {createdAt.slice(0, 4)}
  </>
);
export default CreatedAt;
