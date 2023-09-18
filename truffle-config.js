// Carregue as variáveis de ambiente do arquivo .env
require('dotenv').config();

const HDWalletProvider = require('@truffle/hdwallet-provider');

// Carregue o mnemônico do arquivo .env
const { MNEMONIC } = process.env;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    zeniq: {
      provider: () => new HDWalletProvider(MNEMONIC, "https://smart.zeniq.network:9545"),
      network_id: 383414847825,
      gasPrice: 20000000000
    }
  },
  compilers: {
    solc: {
      version: "0.8.19",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200000
        }
      }
    }
  }
};
