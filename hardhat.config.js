require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("@truffle/dashboard-hardhat-plugin");

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      // Configuração para a rede Hardhat (local)
    },
    zeniq: {
      url: "https://smart.zeniq.network:9545",  // URL do nó RPC da Zeniq
      accounts: [process.env.PRIVATE_KEY],  // Usa a chave privada do arquivo .env
      gasPrice: 20000000000,  // Preço do gás (ajuste conforme necessário)
      chainId: 383414847825  // chainId da rede Zeniq
    }
  },
  solidity: {
    version: "0.7.3", 
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
