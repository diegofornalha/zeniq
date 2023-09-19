const Web3 = require('web3');
const web3 = new Web3('https://smart.zeniq.network:9545'); // Substitua pelo seu provedor de Ethereum

const contractAddress = '0x29c1e899e0fFF5374F4b093EBf34437A2fC8a40b'; // Substitua pelo endereço do contrato Ecomap
const contractABI = require('/Users/coflow/Desktop/zeniq/artifacts/contracts/Ecomap.sol/Message.json').abi; // Use o ABI do arquivo JSON

const ecomap = new web3.eth.Contract(contractABI, contractAddress);

async function setMessage(newMessage) {
    const accounts = await web3.eth.getAccounts();
    await ecomap.methods.setMessage(newMessage).send({ from: accounts[0] });
}

async function getMessage() {
    const message = await ecomap.methods.getMessage().call();
    console.log('Mensagem armazenada no contrato:', message);
}

// Exemplo de uso
setMessage('Olá, mundo!').then(() => {
    return getMessage();
});
