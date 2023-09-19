const { ethers } = require('ethers');
const fs = require('fs');
const path = require('path');

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log(`Deploying from address: ${deployer.address}`);

  const Alert = await ethers.getContractFactory('Alert');
  const alert = await Alert.deploy();

  await alert.deployed();

  console.log(`Alert contract deployed to address: ${alert.address}`);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
