pragma solidity ^0.8.0;
// SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";



contract DepositWithdrawContract is ReentrancyGuard {
    IERC20 public token;
    mapping(address => uint256) public balances;

    constructor(IERC20 _token) {
        token = _token;
    }

    function deposit(uint256 _amount) external {
        require(token.transferFrom(msg.sender, address(this), _amount), "Deposit failed");
        balances[msg.sender] += _amount;
    }

    function withdraw(uint256 _amount) external {
        require(balances[msg.sender] >= _amount, "Insufficient balance");
        require(token.transfer(msg.sender, _amount), "Withdrawal failed");
        balances[msg.sender] -= _amount;
    }

    function balance() external view returns (uint256) {
        return token.balanceOf(address(this));
    }

    function approve(address _spender, uint256 _amount) external {
        token.approve(_spender, _amount);
    }

    function allowance(address _owner, address _spender) external view returns (uint256) {
        return token.allowance(_owner, _spender);
    }
}
