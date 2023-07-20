import { useSelector } from 'react-redux';
import UserAccount from './UserAccount';
import ValidatorAccount from './ValidatorAccount';
import AuthorAccount from './AuthorAccount';
import SimpleLoading from '../../sections/layout/SimpleLoading';

const Settings = () => {
  const { account } = useSelector(s => s);
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {/* eslint-disable-next-line no-nested-ternary */}
      {account?.role === 4 ? (
        <ValidatorAccount />
      ) : // eslint-disable-next-line no-nested-ternary
      account?.role === 2 ? (
        <AuthorAccount />
      ) : account?.role === 1 ? (
        <UserAccount />
      ) : (
        <div style={{ minHeight: '50vh' }}>
          <SimpleLoading />
        </div>
      )}
    </>
  );
};
export default Settings;
