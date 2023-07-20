import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ConnectWalletContainer } from '../../styleComponents/auth/ConnectWalletStyle';
import { walletTypes } from '../../utils/constants';

const ConnectWallet = ({ connectingWallet, walletData }) => {
  const [connectWallet, setConnectWallet] = useState(null);
  // const {walletData} = useSelector(s=>s);
  return (
    <ConnectWalletContainer>
      <div className="title">Подключить кошелек</div>
      <div className="desc">
        Безопасные цифровые подписи обеспечиваются криптографическим программным
        обеспечением, известным как кошелек.
      </div>
      <div className="wallets">
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div
          className="wallet"
          onClick={() => {
            connectingWallet(walletTypes.MetaMask);
            setConnectWallet(walletTypes.MetaMask);
          }}
        >
          <div className="name">
            <img src="/img/metamask.svg" alt="metamask" />{' '}
            <span>{walletTypes.MetaMask}</span>
          </div>
          {connectWallet === walletTypes.MetaMask && !walletData?.isError ? (
            <div className="loading">
              <img src="/img/loader_wallet.svg" alt="" />
            </div>
          ) : (
            ''
          )}
        </div>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div
          className="wallet"
          onClick={() => {
            // connectingWallet(); setConnectWallet("TrustWallet")
          }}
          style={{ opacity: '0.3', cursor: 'default' }}
        >
          <div className="name">
            <img src="/img/trust.svg" alt="trust" /> <span>Trust Wallet</span>
          </div>
          {connectWallet === 'TrustWallet' && !walletData?.isError ? (
            <div className="loading">
              <img src="/img/loader_wallet.svg" alt="" />
            </div>
          ) : (
            ''
          )}
        </div>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div
          className="wallet"
          onClick={() => {
            connectingWallet(walletTypes.Unipass);
            setConnectWallet(walletTypes.Unipass);
          }}
        >
          <div className="name">
            <img src="/img/unipass.svg" alt="unipass" />{' '}
            <span>{walletTypes.Unipass}</span>
          </div>
          {connectWallet === walletTypes.Unipass && !walletData?.isError ? (
            <div className="loading">
              <img src="/img/loader_wallet.svg" alt="" />
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
      {/* {console.log("walletData==>", walletData)} */}
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
export default ConnectWallet;
