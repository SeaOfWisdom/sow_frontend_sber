import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ConnectWalletContainer } from '../../styleComponents/auth/ConnectWalletStyle';
import { walletTypes, networkList } from '../../utils/constants';
import { switchNetwork } from '../../utils/wallet_utils/walletActions';

const SwitchNetwork = ({ connectingWallet, walletData }) => {
  const [connectWallet, setConnectWallet] = useState(null);
  const switchFunk = async networkObj => {
    const s = await switchNetwork(networkObj);
    console.log('switchFunk=>', s);
    if (s?.isSwitch) {
      connectingWallet(walletTypes.MetaMask);
    }
  };
  return (
    <ConnectWalletContainer>
      <div className="title">Сеть не поддерживается</div>
      <div className="desc">
        Пожалуйста, переключиться на поддерживаемую крипто-сеть.
      </div>
      <div className="wallets">
        {networkList.map(item => {
          const index = Math.random() * Date.now();
          return (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
            <div
              key={index}
              style={
                item?.is_disabled ? { opacity: '0.3', cursor: 'default' } : {}
              }
              className="wallet"
              onClick={() => {
                if (!item?.is_disabled) {
                  setConnectWallet(index);
                  switchFunk(item);
                }
              }}
            >
              <div className="name">
                <img src={item?.icon} alt={item?.chainName} />{' '}
                <span>{item?.chainName}</span>
              </div>
              {connectWallet === index ? (
                <div className="loading">
                  <img src="/img/loader_wallet.svg" alt="" />
                </div>
              ) : (
                ''
              )}
            </div>
          );
        })}
      </div>
      {walletData?.isError ? (
        <div className="err">
          {walletData?.textError ??
            'Сеть, к которой вы подключаетесь, несовместима. Проверьте сеть, к которой вы подключаетесь.'}
        </div>
      ) : (
        ''
      )}
      <div className="hr">
        <span />
      </div>
      <div className="fdesc">
        Подключая свой кошелек, вы соглашаетесь с
        <br />
        <Link to="/privacy" target="_blank">
          политикой конфиденциальности
        </Link>{' '}
        Sea of Wisdom
      </div>
    </ConnectWalletContainer>
  );
};
export default SwitchNetwork;
