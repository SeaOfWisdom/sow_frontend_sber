import { useState } from "react";
import { ConnectWalletContainer } from "../../styleComponents/auth/ConnectWalletStyle";
import { wallet_types } from "../../utils/constants";

const ConnectWallet = ({ connectingWallet, walletData }) => {
  const [connect_wallet, setConnect_wallet] = useState(null);
  // const {walletData} = useSelector(s=>s);
  return (
    <>
      <ConnectWalletContainer>
        <div className="title">Подключить кошелек</div>
        <div className="desc">
          Безопасные цифровые подписи обеспечиваются криптографическим
          программным обеспечением, известным как кошелек.
        </div>
        <div className="wallets">
          <div
            className="wallet"
            onClick={() => {
               
              connectingWallet(wallet_types.MetaMask);
              setConnect_wallet(wallet_types.MetaMask);
            }}
          >
            <div className="name">
              <img src="/img/metamask.svg" alt="metamask" />{" "}
              <span>{wallet_types.MetaMask}</span>
            </div>
            {connect_wallet === wallet_types.MetaMask &&
            !walletData?.isError ? (
              <div className="loading">
                <img src="/img/loader_wallet.svg" alt="" />
              </div>
            ) : (
              ""
            )}
          </div>
          <div
            className="wallet"
            onClick={() => {
              // connectingWallet(); setConnect_wallet("TrustWallet")
            }}
          >
            <div className="name">
              <img src="/img/trust.svg" alt="trust" /> <span>Trust Wallet</span>
            </div>
            {connect_wallet === "TrustWallet" && !walletData?.isError ? (
              <div className="loading">
                <img src="/img/loader_wallet.svg" alt="" />
              </div>
            ) : (
              ""
            )}
          </div>
          <div
            className="wallet"
            onClick={() => {
              connectingWallet(wallet_types.Unipass);
              setConnect_wallet(wallet_types.Unipass);
            }}
          >
            <div className="name">
              <img src="/img/unipass.svg" alt="unipass" />{" "}
              <span>{wallet_types.Unipass}</span>
            </div>
            {connect_wallet === wallet_types.Unipass && !walletData?.isError ? (
              <div className="loading">
                <img src="/img/loader_wallet.svg" alt="" />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        {/* {console.log("walletData==>", walletData)} */}
        {walletData?.isError ? (
          <div className="err">
            {walletData?.textError ??
              "Сеть, к которой вы подключаетесь, несовместима. Проверьте сеть, к которой вы подключаетесь."}
          </div>
        ) : (
          ""
        )}
        <div className="hr">
          <span></span>
        </div>
        <div className="fdesc">
          Подключая свой кошелек, вы соглашаетесь с
          <br />
          <span>Условиями пользования</span> Sea of Wisdom
        </div>
      </ConnectWalletContainer>
    </>
  );
};
export default ConnectWallet;
