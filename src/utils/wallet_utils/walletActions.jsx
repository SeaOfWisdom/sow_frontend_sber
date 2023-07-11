import Web3 from 'web3';
import { ERC20ABI } from './abi';
import { UniPassPopupSDK } from '@unipasswallet/popup-sdk';
import { RPC_URL, wallet_types } from '../../utils/constants';

const tokenSOW = {
  tokenName: 'SOW',
  contractAddress: '0x800fC10baC18a0e2bD00fFfaA760301cACeC119B',
  decimals: 18,
};
const getWeb3 = () => {
  const web3 = new Web3(window.ethereum);
  return web3;
};

let upWallet;

export const isWalletConnect = () => {
  return window?.ethereum?.isConnected();
};

export const getWalletData = async (walletType) => {
  try {
    const web3 = getWeb3();
    const contract = new web3.eth.Contract(ERC20ABI, tokenSOW.contractAddress);

    switch (walletType) {
      case wallet_types.MetaMask: {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const accounts = await web3.eth.getAccounts();
        const accountAddress = accounts[0];
        // console.log('accountAddress', accountAddress);
        const balance = await contract.methods.balanceOf(accountAddress).call();
        const tokenBalance = parseFloat(web3.utils.fromWei(balance, 'ether')).toFixed(2);
        // console.log('tokenBalance', tokenBalance);
        return {
          isConnect: true,
          accountAddress,
          ...tokenSOW,
          tokenBalance,
          walletType,
        };
      }

      case wallet_types.Unipass: {
        upWallet = new UniPassPopupSDK({
          env: 'test',
          chainType: 'bsc',
          storageType: 'localStorage',
          appSettings: {
            theme: 'light',
            appName: 'Sourcing Journal',
            appIcon: 'https://seaofwisdom.xyz/logo.png',
          },
        });

        const account = await upWallet.login({
          // authorize: true,
        });
        const { address: accountAddress } = account;

        web3.setProvider(RPC_URL);
        const balance = await contract.methods.balanceOf(accountAddress).call();
        const tokenBalance = parseFloat(web3.utils.fromWei(balance, 'ether')).toFixed(2);

        return {
          isConnect: true,
          accountAddress,
          ...tokenSOW,
          tokenBalance,
          walletType,
        };
      }
    }
  } catch (error) {
    return {
      isConnect: false,
      isError: true,
    };
  }
};

export const getWalletBalance = async () => {
  const accountAddress = localStorage.getItem('accountAddress');
  const walletType = localStorage.getItem('walletType');

  try {
    if (accountAddress && accountAddress.length) {
      const web3 = getWeb3();

      if (walletType === wallet_types.Unipass) {
        web3.setProvider(RPC_URL);
      }

      const contract = new web3.eth.Contract(ERC20ABI, tokenSOW.contractAddress);
      const balance = await contract.methods.balanceOf(accountAddress).call();
      const tokenBalance = parseFloat(web3.utils.fromWei(balance, 'ether')).toFixed(2);
      return {
        isError: false,
        tokenBalance: tokenBalance,
      };
    } else {
      return {
        isError: true,
        tokenBalance: -1,
      };
    }
  } catch (error) {
    return {
      isError: true,
      tokenBalance: -1,
    };
  }
};

export const logOutUpWallet = async () => {
  await upWallet.logout();
};

export const getNetworkChainId = async () => {
  if (typeof window.ethereum !== 'undefined') {
    // await window.ethereum.request({ method: 'eth_requestAccounts' });
    const web3 = getWeb3();
    let n = await web3.eth.net.getId();
    return {
      status: 1,
      networkId: n,
    };
  } else {
    return {
      status: -1,
      networkId: null,
    };
  }
};

export const switchNetwork = async (network={}) =>{
  console.log('start switch');
  let result = {}
  try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [  { chainId: network?.chainId_hexadecimal??'' }  ],
    }).then(r=>{
      result = {
        isSwitch: true
      }
    });
  } catch (switchError) { 
    if (switchError.code === 4902) {
      try {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
              {
                chainId: network?.chainId_hexadecimal??'', 
                chainName: network?.chainName??'',
                rpcUrls: network?.rpcUrls??'',                   
                blockExplorerUrls: network?.blockExplorerUrls??'',  
                nativeCurrency: network?.nativeCurrency??''    
              }
            ]
        }).then(r=>{
          result = {
            isSwitch: true
          }
        });
      } catch (addError) { 
        result = {
          isSwitch: false
        }
      }
    } 
  }
  return result;
}