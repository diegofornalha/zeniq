// SPDX-License-Identifier: MIT
pragma solidity ^0.7.3;

contract Ecomap {
    // Estrutura para armazenar informações com alerta de risco
    struct Info {
        string informacao;
        bool risco;
    }

    // Mapeamento para armazenar as informações com um identificador único
    mapping(uint256 => Info) public infos;

    // Contador para gerar um identificador único para cada informação
    uint256 public infoCount;

    // Eventos
    event InfoAdded(uint256 id, string informacao, bool risco);
    event RiskStatusUpdated(uint256 id, bool newRiskStatus);

    // Construtor
    constructor() {
        infoCount = 0;  // Inicializa o contador de informações
    }

    // Função para adicionar uma nova informação
    function addInfo(string memory _informacao, bool _risco) public {
        infoCount++;  // Incrementa o contador de informações
        infos[infoCount] = Info(_informacao, _risco);  // Armazena a nova informação
        emit InfoAdded(infoCount, _informacao, _risco);  // Emite o evento
    }

    // Função para atualizar o estado de risco de uma informação existente
    function updateRiskStatus(uint256 _id, bool _newRiskStatus) public {
        Info storage info = infos[_id];
        require(bytes(info.informacao).length > 0, "naoencontrada");

        info.risco = _newRiskStatus;
        emit RiskStatusUpdated(_id, _newRiskStatus);
    }

    // Função para obter uma informação pelo seu identificador
    function getInfo(uint256 _id) public view returns (string memory, bool) {
        Info memory info = infos[_id];
        return (info.informacao, info.risco);
    }
}
