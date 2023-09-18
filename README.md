# Distributor Contract Hardhat

This project contains a simple distributor contract written in Solidity.
The purpose of the contract is to make Smartchain-faucets much more scalable.
You can fork this repo to develop new contracts for the ZENIQ Smartchain!
The repo includes a readymade setup for testing and deploying contracts to the ZENIQ Smartchain.

# Smart Contract Workshop

The instructions below have been used for creating this project.
You could repeat those commands if you prefer a new setup instead of forking this repo.

## Setup Project

### Base Project
- git init
- npm init -y
- npm i hardhat
- npx hardhat
    - create JS/TS project + hardhat config

### Ethers
- npm i --save-dev ethers@5.7.2
- npm i --save-dev @nomiclabs/hardhat-ethers
    - add to hardhat.config.js (Explain config system)

## Changes for Zeniq Smartchain

```
const mnemonic = 'test test test test test test test test test test test test';
const accounts = {
    mnemonic,
    count: 10
}

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: {
        compilers: [
            {
                version: "0.8.21",
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
            url: "https://smart.zeniq.network:9545"
        }
    }
};
```
- Explain:
    - solidity compiler settings
    - viaIR settings
    - optimizer settings
    - accounts
    - networks
- hardhard console + `await ethers.provider.getBlock()`
    - show timestamp

## Writing a Contract

- pragma/SPDX
- contract class structure + constructor
- address.call()

### Distribute function

```
contract Distributor {
    function distribute(address payable[] memory targets)
    payable
    external {
        uint length = targets.length;

        require(length > 0);
        require(msg.value > length);

        uint amount = msg.value / length;
        for(uint i = 0; i < length; i++) {
            (bool success, ) = targets[i].call{value: amount}("");
            require(success);
        }
    }
}
```

### Deploy script
`require.main === module` check

## Test cases

- npm i --save-dev @nomicfoundation/hardhat-network-helpers
    - load fixture
- npm i --save-dev chai-as-promised
- extend hardhat environment
```
const {extendEnvironment} = require('hardhat/config');
extendEnvironment(hre => {
   hre.accounts = hre.ethers.getSigners().then(ac => ac.map(a => a.address));
});
```
- write deploy testcase
- write distribute testcase

### Deploy and test
