import { useState } from "react";
import { ConnectWalletContainer } from "../../styleComponents/auth/ConnectWalletStyle";
import { wallet_types, network_list } from "../../utils/constants";
import { switchNetwork } from "../../utils/wallet_utils/walletActions";

const SwitchNetwork = ({ connectingWallet, walletData }) => {
  const [connect_wallet, setConnect_wallet] = useState(null);
  const switchFunk = async (network_obj) => {
    const s = await switchNetwork(network_obj);
    console.log('switchFunk=>', s); 
    if(s?.isSwitch){
      connectingWallet(wallet_types.MetaMask);
    } 
  }
  return (
    <>
      <ConnectWalletContainer>
        <div className="title">Сеть не поддерживается</div>
        <div className="desc">
        Пожалуйста, переключиться на поддерживаемую крипто-сеть.
        </div>
        <div className="wallets">
          {network_list.map((item, index)=>(
          <div key={index}
            style={item?.is_disabled?{opacity: '0.3', cursor: 'default'}:{}}
            className="wallet"
            onClick={() => {
              if(!item?.is_disabled){
                setConnect_wallet(index);
                switchFunk(item);
              }
             }}
          >
            <div className="name">
              <img src={item?.icon} alt={item?.chainName} />{" "}
              <span>{item?.chainName}</span>
            </div>
            {connect_wallet === index  ?(
              <div className="loading">
                <img src="/img/loader_wallet.svg" alt="" />
              </div>
            ) : (
              ""
            )}
          </div>
          ))}
        </div>
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
export default SwitchNetwork;
