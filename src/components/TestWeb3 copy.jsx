import React, { useEffect, useState } from 'react';
import Web3 from 'web3';

const TokenList = () => {
  const [tokens, setTokens] = useState([]);
  const ERC20ABI = [
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "balance",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ];

  useEffect(() => {
    const loadTokens = async () => {
      // try {
        // MetaMask provayderini yaratish
        await window.ethereum.enable();
        const web3 = new Web3(window.ethereum);
        // Tokenlarni olish
        const tokenList = [
          { name: 'SOW', contractAddress: '0x800fC10baC18a0e2bD00fFfaA760301cACeC119B', decimals: 18 },
          // { name: 'BNB', contractAddress: '0x456...', decimals: 18 },
        ];
        const addressToCheck = '0x9dBDcFB7284B521a3557d570E3BE5AA645b967F8';
        const updatedTokens = await Promise.all(
          tokenList.map(async (token) => {
            const contract = new web3.eth.Contract(ERC20ABI, token.contractAddress);
            const balance = await contract.methods.balanceOf(addressToCheck).call();
            const tokenBalance = web3.utils.fromWei(balance, 'ether');
            return {
              name: token.name,
              value: parseFloat(tokenBalance).toFixed(4),
            };
          })
        );
        setTokens(updatedTokens);
      // } catch (error) {
      //   console.error('Xatolik:', error);
      // }
    };

    loadTokens();
  }, []);

  return (
    <div>
      <h2>Tokenlar</h2>
      {tokens.map((token) => (
        <div key={token.name}>
          <p>
            <strong>{token.name}: </strong>
            {token.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TokenList;