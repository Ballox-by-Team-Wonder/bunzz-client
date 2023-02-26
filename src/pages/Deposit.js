import { ethers } from 'ethers';

// Connect to blockchain
const provider = new ethers.providers.Web3Provider(window.ethereum);

// Get the ABI and contract address of the deployed Solidity contract
const abi = [{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const address = '0x7a1e4e1bce323851c975cde09901bbe5676e69bc';

// Create a web3.js contract instance
const contract = new web3.eth.Contract(abi, address, provider);

// Get the amount of ether to deposit and withdraw from the user
const amountToDeposit = parseFloat(prompt('How much ether do you want to deposit?'));
const amountToWithdraw = parseFloat(prompt('How much ether do you want to withdraw?'));

// Call the deposit function of the Solidity contract
contract.methods.deposit()
    .send({ from: provider, value: amountToDeposit, gas: 100000 })
    .then((receipt) => {
        console.log(`Deposited ${amountToDeposit} wei. Transaction hash: ${receipt.transactionHash}`);
    })
    .catch((error) => {
        console.error(error);
    });

// Call the withdraw function of the Solidity contract
contract.methods.withdraw(amountToWithdraw)
    .send({ from: provider, gas: 100000 })
    .then((receipt) => {
        console.log(`Withdrew ${amountToWithdraw} wei. Transaction hash: ${receipt.transactionHash}`);
    })
    .catch((error) => {
        console.error(error);
    });
