const hre = require('hardhat');
const {ethers} = hre;

async function distribute() {
    const contract = await ethers.getContractAt('Distributor', '0xa32eA318782533032bcf68c7E2378BecdF609060');

    const accounts = [
        "0x06562f53f6059D7cBDE83BC286fEc364a901DC0b",
        "0x0A2944f4E3360C1B4872E0635c03b7D67e309243",
        "0x566d65116a24ce5dF9C8ABd271588ebc662688d0",
        "0xCa63c9FDA0019D7163bdb57a3D4a03961F0aE676",
        "0x53f83E9fC0c4e2CD8f046cA3Aa9176fc5e29e892"
    ];

    console.log('Distribute');
    await contract.distribute(accounts, {
        value: ethers.constants.WeiPerEther.toBigInt() / 50n
    });
}

distribute().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
