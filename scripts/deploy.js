const hre = require("hardhat");

async function main() {
  // Obter a conta que fará o deploy
  const [deployer] = await hre.ethers.getSigners();
  console.log(`Deploying from address: ${deployer.address}`);

  // Compilar e obter o contrato
  const Ecomap = await hre.ethers.getContractFactory("Ecomap");

  // Fornecer a mensagem inicial e fazer o deploy do contrato
  const initialMessage = "Hello, Ecomap!";
  const ecomap = await Ecomap.deploy(initialMessage);

  // Aguardar o deploy ser confirmado
  await ecomap.deployed();

  console.log(`Ecomap contract deployed to address: ${ecomap.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
