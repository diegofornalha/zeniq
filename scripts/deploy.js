const hre = require('hardhat');
const {ethers} = hre;

async function deploy() {
    const accounts = await hre.accounts;
    const contract = await ethers.deployContract('Distributor', []);
    console.log('Deployed at:', contract.address);
    return {
        accounts,
        distributor: contract
    };
}

if(require.main === module) {
    deploy().catch((error) => {
        console.error(error);
        process.exitCode = 1;
    });
}

module.exports = {
    deploy
}
