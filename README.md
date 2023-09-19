# **Zeniq - Simple Ether Distributor**

## **Descrição**

Este projeto é um contrato inteligente simples escrito em Solidity para distribuir Ether entre um conjunto de endereços. O projeto utiliza o ambiente de desenvolvimento Hardhat e a biblioteca ethers.js.

## **Índice**

- **[Pré-requisitos](https://chat.openai.com/c/c9518ab3-74e3-4fbf-9cf1-d646b9210b11#pr%C3%A9-requisitos)**
- **[Instalação](https://chat.openai.com/c/c9518ab3-74e3-4fbf-9cf1-d646b9210b11#instala%C3%A7%C3%A3o)**
- **[Configuração](https://chat.openai.com/c/c9518ab3-74e3-4fbf-9cf1-d646b9210b11#configura%C3%A7%C3%A3o)**
- **[Compilação](https://chat.openai.com/c/c9518ab3-74e3-4fbf-9cf1-d646b9210b11#compila%C3%A7%C3%A3o)**
- **[Deploy](https://chat.openai.com/c/c9518ab3-74e3-4fbf-9cf1-d646b9210b11#deploy)**
- **[Execução de Testes](https://chat.openai.com/c/c9518ab3-74e3-4fbf-9cf1-d646b9210b11#execu%C3%A7%C3%A3o-de-testes)**
- **[Interagindo com o Contrato](https://chat.openai.com/c/c9518ab3-74e3-4fbf-9cf1-d646b9210b11#interagindo-com-o-contrato)**

## **Pré-requisitos**

- Node.js e npm: Você pode baixá-los **[aqui](https://nodejs.org/)**.

## **Instalação**

1. **Clonar o Repositório**:
    
    ```bash
    git clone https://github.com/diegofornalha/zeniq.git
    ```
    
2. **Navegar até o Diretório do Projeto**:
    
    ```bash
    cd zeniq
    ```
    
3. **Instalar Dependências**:
    
    ```bash
    npm install
    ```
    

## **Configuração**

1. Crie um arquivo **`.env`** ou **`.secret`** no diretório raiz do projeto.
2. Adicione o mnemônico e outras variáveis de ambiente necessárias.
    
    **Exemplo de `.env`**:
    
    ```env
    MNEMONIC=seu mnemônico aqui
    ```
    
    **Nota**: Certifique-se de que este arquivo não seja incluído no controle de versão.
    

## **Compilação**

Para compilar o contrato, execute o seguinte comando:

```bash
npx hardhat compile
```

## **Deploy**

Para fazer o deploy do contrato, execute o seguinte comando:

```bash
npx hardhat run scripts/deploy.js
```

O endereço do contrato implantado será exibido no console.

## **Execução de Testes**

Para executar os testes, use o seguinte comando:

```bash
npx hardhat test
```

## **Interagindo com o Contrato**

Você pode usar o script **`distribute.js`** para interagir com o contrato:

```bash
npx hardhat run scripts/distribute.js
```

---
