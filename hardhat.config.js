// Adicione esta linha no início do arquivo para carregar as variáveis de ambiente
require('dotenv').config();

require("@nomiclabs/hardhat-ethers");
const {extendEnvironment} = require('hardhat/config');
const fs = require("fs");
const {resolve} = require("path");

// Carregue o mnemônico do arquivo .env
const { MNEMONIC } = process.env;

let mnemonic;
try {
  mnemonic = fs.readFileSync(resolve(__dirname, '.secret')).toString().trim();
} catch (ignore){
  mnemonic = MNEMONIC;
}

const accounts = {
    mnemonic,
    count: 10
}

extendEnvironment(hre => {
   hre.accounts = hre.ethers.getSigners().then(ac => ac.map(a => a.address));
});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: {
        compilers: [
            {
                version: "0.8.19",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200000
                    },
                    viaIR: true
                }
            }
        ]
    },
    networks: {
        localhost: {
            accounts
        },
        hardhat: {
            accounts
        },
        zeniq: {
            accounts,
            url: "https://smart.zeniq.network:9545",
            chainId: 383414847825
        }
    }
};
