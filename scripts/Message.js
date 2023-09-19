const hre = require("hardhat");

async function main() {
  // Obter a conta que interagirá com o contrato
  const [account] = await hre.ethers.getSigners();
  console.log(`Interacting from address: ${account.address}`);

  // Endereço do contrato Ecomap implantado
  const ecomapAddress = "0x2858B09643277Cb9cd4C5592a38a2195434ef398";


  // Criar uma instância do contrato Ecomap
  const Ecomap = await hre.ethers.getContractFactory("Ecomap");
  const ecomap = Ecomap.attach(ecomapAddress);

  // Chamar a função getMessage e exibir a mensagem atual
  const currentMessage = await ecomap.getMessage();
  console.log(`Current message: ${currentMessage}`);

  // Definir uma nova mensagem usando a função setMessage
  const newMessage = "Hello, this is the new message!";
  const setMessageTx = await ecomap.setMessage(newMessage);

  // Aguardar a transação ser confirmada
  await setMessageTx.wait();

  // Verificar se a mensagem foi atualizada
  const updatedMessage = await ecomap.getMessage();
  console.log(`Updated message: ${updatedMessage}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
