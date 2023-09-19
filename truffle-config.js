// Carregue as variáveis de ambiente do arquivo .env
require('dotenv').config();

const HDWalletProvider = require('@truffle/hdwallet-provider');

// Carregue a chave privada do arquivo .env
const { PRIVATE_KEY } = process.env;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    zeniq: {
      provider: () => new HDWalletProvider(PRIVATE_KEY, "https://smart.zeniq.network:9545"),
      network_id: 383414847825,
      gasPrice: 20000000000
    }
  },
  compilers: {
    solc: {
      version: "0.7.3",  // Alinhe esta versão com a versão usada em seus contratos Solidity e hardhat.config.js
      settings: {
        optimizer: {
          enabled: true,
          runs: 200000
        }
      }
    }
  }
};
