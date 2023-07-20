import Web3 from 'web3';
import { getNetworkChainId } from '../utils/wallet_utils/walletActions';
import { RPC_URL } from '../utils/constants';

const TestWeb3 = () => {
  const getChainId = async () => {
    const id = await getNetworkChainId();
    console.log('id', id);
  };
  const changeNetwork = () => {
    if (typeof window.ethereum !== 'undefined') {
      const web3 = new Web3(window.ethereum);
      const networks = [
        {
          chainId: '97', // Replace with the desired chainId
          chainName: 'Smart Chain - Testnet', // Replace with the desired network name
          nativeCurrency: {
            name: 'BNB',
            symbol: 'BNB',
            decimals: 18,
          },
          rpcUrls: [RPC_URL], // Replace with the desired RPC URL
          blockExplorerUrls: ['https://testnet.bscscan.com'], // Replace with the desired block explorer URL
        },
      ];
      window.ethereum
        .request({
          method: 'wallet_updateEthereumChains',
          params: [networks],
        })
        .then(() => {
          console.log('Networks replaced');
        })
        .catch(error => {
          console.error('Error replacing networks:', error);
        });
    } else {
      console.error('MetaMask is not installed');
    }
  };
  const switchProvider = async () => {
    console.log('start switch');
    try {
      await window.ethereum
        .request({
          method: 'wallet_switchEthereumChain',
          params: [
            {
              chainId: '0x61',
              // chainName:'Smart Chain - Testnet',
              // rpcUrls:['https://data-seed-prebsc-1-s1.binance.org:8545/'],
              // blockExplorerUrls:['https://testnet.bscscan.com'],
              // nativeCurrency: {
              //   symbol:'BNB',
              //   decimals: 18
              // }
            },
          ],
        })
        .then(r => {
          console.log('r=>>', r);
        });
    } catch (switchError) {
      console.log('switchError=>', switchError);
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        // try {
        //   window.ethereum.request({
        //     method: 'wallet_addEthereumChain',
        //     params: [
        //         {
        //           chainId: '0x89',
        //           chainName:'Polygon',
        //           rpcUrls:['https://polygon-rpc.com '],
        //           blockExplorerUrls:['https://polygonscan.com/'],
        //           nativeCurrency: {
        //             symbol:'MATIC',
        //             decimals: 18
        //           }
        //         }
        //       ]
        //   });
        // } catch (addError) {
        //   // handle "add" error
        //   console.log('addError=>', addError);
        // }
      }
      // handle other "switch" errors
    }
  };
  return (
    <>
      <h1>TestWeb3</h1>
      <button type="button" onClick={() => getChainId()}>
        getChainId
      </button>
      <br />
      <button type="button" onClick={() => changeNetwork()}>
        changeNetwork
      </button>
      <br />
      <button type="button" onClick={() => switchProvider()}>
        switchProvider
      </button>
      <div />
    </>
  );
};
export default TestWeb3;
