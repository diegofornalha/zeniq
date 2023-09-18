// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

contract Distributor {
    function distribute(address payable[] memory targets)
    payable
    external {
        uint length = targets.length;

        require(length > 0);
        require(msg.value > length, "Amount is too low");

        uint amount = msg.value / length;
        for(uint i = 0; i < length; i++) {
            (bool success, ) = targets[i].call{value: amount}("");
            require(success);
        }
    }
}
