import Web3 from 'web3';
import { UniPassPopupSDK } from '@unipasswallet/popup-sdk';
import { ERC20ABI } from './abi';
import { RPC_URL, walletTypes } from '../constants';
import libraryAbi from './libraryAbi.json';

function uuidToBigInt(uuid) {
  // UUID validation regex pattern
  const uuidPattern =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

  if (typeof uuid !== 'string' || !uuidPattern.test(uuid)) {
    console.error('Invalid UUID');
    return null;
  }

  const uuidWithoutHyphens = uuid.replace(/-/g, '');

  let bigIntValue;
  try {
    bigIntValue = BigInt(`0x${uuidWithoutHyphens}`);
  } catch (err) {
    console.error('Failed to convert UUID to BigInt', err);
    return null;
  }

  return bigIntValue;
}

const tokenSOW = {
  tokenName: 'SOW',
  contractAddress: '0x5bb2e2fDa826F0D7Dff634a63fCb2c39ad42C96a',
  libraryAddress: '0xf986BF7dB0557236aA011224484F1f9d6Bf2baEa',
  decimals: 18,
};
const getWeb3 = () => {
  const web3 = new Web3(window.ethereum);
  return web3;
};

let upWallet;

export const isWalletConnect = () => window?.ethereum?.isConnected();

export const getWalletData = async walletType => {
  try {
    const web3 = getWeb3();
    const contract = new web3.eth.Contract(ERC20ABI, tokenSOW.contractAddress);

    switch (walletType) {
      case walletTypes.MetaMask: {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const accounts = await web3.eth.getAccounts();
        const accountAddress = accounts[0];
        let tokenBalance = 0;
        try {
          const balance = await contract.methods
            .balanceOf(accountAddress)
            .call();
          tokenBalance = parseFloat(
            web3.utils.fromWei(balance, 'ether')
          ).toFixed(2);
        } catch (error) {
          console.log('ERROR', error);
        }
        return {
          isConnect: true,
          accountAddress,
          ...tokenSOW,
          tokenBalance,
          walletType,
        };
      }

      case walletTypes.Unipass: {
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
        const tokenBalance = parseFloat(
          web3.utils.fromWei(balance, 'ether')
        ).toFixed(2);

        return {
          isConnect: true,
          accountAddress,
          ...tokenSOW,
          tokenBalance,
          walletType,
        };
      }

      default:
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

      if (walletType === walletTypes.Unipass) {
        web3.setProvider(RPC_URL);
      }

      const contract = new web3.eth.Contract(
        ERC20ABI,
        tokenSOW.contractAddress
      );
      const balance = await contract.methods.balanceOf(accountAddress).call();
      const tokenBalance = parseFloat(
        web3.utils.fromWei(balance, 'ether')
      ).toFixed(2);
      return {
        isError: false,
        tokenBalance,
      };
    }
    return {
      isError: true,
      tokenBalance: -1,
    };
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
    const n = await web3.eth.net.getId();
    return {
      status: 1,
      networkId: n,
    };
  }
  return {
    status: -1,
    networkId: null,
  };
};

export const switchNetwork = async (network = {}) => {
  const web3 = new Web3(window.ethereum);
  const chainId = web3.utils.toHex(network.chainId).toString();
  let result = {};
  try {
    await window.ethereum
      .request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId }],
      })
      .then(r => {
        result = {
          isSwitch: true,
        };
      });
  } catch (switchError) {
    if (switchError.code === 4902) {
      try {
        await window.ethereum
          .request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId,
                chainName: network?.chainName ?? '',
                rpcUrls: network?.rpcUrls ?? '',
                blockExplorerUrls: network?.blockExplorerUrls ?? '',
                nativeCurrency: network?.nativeCurrency ?? '',
              },
            ],
          })
          .then(r => {
            result = {
              isSwitch: true,
            };
          });
      } catch (addError) {
        result = {
          isSwitch: false,
        };
      }
    }
  }
  return result;
};

export const buyArticle = async articleId => {
  const id = uuidToBigInt(articleId).toString();
  try {
    const web3 = getWeb3();
    const accounts = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(ERC20ABI, tokenSOW.contractAddress);
    const library = new web3.eth.Contract(libraryAbi, tokenSOW.libraryAddress);

    try {
      await contract.methods
        .approve(tokenSOW.libraryAddress, '50000000000000000000')
        .send({
          from: accounts[0],
          gasPrice: '50000000000',
          gas: '10000000',
        });
      await library.methods.purchasePaper(id).send({
        from: accounts[0],
        gasPrice: '50000000000',
        gas: '10000000',
      });
      return true;
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
};
