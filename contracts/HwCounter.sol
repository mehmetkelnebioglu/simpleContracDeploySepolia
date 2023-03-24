// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HwCounter {
    address public owner;
    uint public number = 100;

    constructor() {
        owner = msg.sender;
    }

    function increment(uint _amount) external {
        if (_amount > 5) require(msg.sender == owner, "Only owner");
        number = number + _amount;
    }

    function decrement(uint _amount) external {
        if (_amount > 5) require(msg.sender == owner, "Only owner");
        number = number - _amount;
    }
}
