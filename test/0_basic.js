const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const {deploy} = require("../scripts/deploy");
const {ethers} = require("hardhat");

describe("Basic Distributor Tests", function () {
    it('should deploy the contract', async function () {
        const {accounts, distributor} = await loadFixture(deploy);

        expect(distributor.address).not.null;

        //console.table(accounts);
        //console.log(distributor.address);
    });

    it('should distribute', async function () {
        const {accounts, distributor} = await loadFixture(deploy);

        console.log('Before distribution');

        let balance0 = await ethers.provider.getBalance(accounts[0]);
        let balance1 = await ethers.provider.getBalance(accounts[1]);
        let balance2 = await ethers.provider.getBalance(accounts[2]);

        console.table({
            balance0: balance0.toBigInt(),
            balance1: balance1.toBigInt(),
            balance2: balance2.toBigInt(),
        });

        const tx = await distributor.distribute([accounts[1], accounts[2]], {
            value: balance0.toBigInt() / 2n
        });
        const result = await tx.wait();
        console.log(result);

        console.log('After distribution');
        balance0 = await ethers.provider.getBalance(accounts[0]);
        balance1 = await ethers.provider.getBalance(accounts[1]);
        balance2 = await ethers.provider.getBalance(accounts[2]);

        console.table({
            balance0: balance0.toBigInt(),
            balance1: balance1.toBigInt(),
            balance2: balance2.toBigInt(),
        });
    });
});
