import ConnectWallet from './ConnectWallet';
import SignUp from './SignUp';
import SwitchNetwork from './SwitchNetwork';

const Auth = ({ onOpen, action, setAction, connectingWallet, walletObj }) => (
  // eslint-disable-next-line react/jsx-no-useless-fragment
  <>
    {/* eslint-disable-next-line no-nested-ternary */}
    {action === 1 ? (
      <ConnectWallet
        connectingWallet={connectingWallet}
        setAction={setAction}
        walletData={walletObj}
      />
    ) : // eslint-disable-next-line no-nested-ternary
    action === 2 ? (
      <SignUp onOpen={onOpen} setAction={setAction} walletObj={walletObj} />
    ) : action === 3 ? (
      <SwitchNetwork
        onOpen={onOpen}
        setAction={setAction}
        walletObj={walletObj}
        connectingWallet={connectingWallet}
      />
    ) : (
      ''
    )}
  </>
);
export default Auth;
