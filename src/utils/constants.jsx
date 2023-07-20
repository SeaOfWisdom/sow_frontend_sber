export const monthList = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const walletTypes = {
  Unipass: 'Unipass',
  MetaMask: 'MetaMask',
};

export const RPC_URL = 'https://data-seed-prebsc-1-s1.binance.org:8545/';

export const networkList = [
  {
    chainId: 97,
    chainId_hexadecimal: '0x61',
    chainName: 'Smart Chain - Testnet',
    rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
    blockExplorerUrls: ['https://testnet.bscscan.com'],
    nativeCurrency: {
      symbol: 'BNB',
      decimals: 18,
    },
    icon: '/img/bnb_chain_testnet.svg',
    is_disabled: true,
  },
  {
    chainId: 111000,
    chainName: 'Siberium Test Network',
    rpcUrls: ['https://rpc.test.siberium.net'],
    blockExplorerUrls: ['https://explorer.test.siberium.net'],
    nativeCurrency: {
      symbol: 'SIBR',
      decimals: 18,
    },
    icon: '/img/sbr_logo.svg',
    is_disabled: false,
  },
  {
    chainName: 'Ethereum Mainnet',
    icon: '/img/eth_mainet.svg',
    is_disabled: true,
  },
  // {
  //   chainName: 'Goerli (Ethereum testnet)',
  //   icon: '/img/goerli.svg',
  //   is_disabled: true,
  // },
  {
    chainName: 'Smart Chain',
    icon: '/img/bnb_chain_testnet.svg',
    is_disabled: true,
  },
];
