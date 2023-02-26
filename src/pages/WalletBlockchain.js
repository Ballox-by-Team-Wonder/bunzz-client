import { ethers } from 'ethers';

// Connect to blockchain
const provider = new ethers.providers.Web3Provider(window.ethereum);

// Get the ABI and contract address of the deployed Solidity contract
const abi = [{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"apy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastStakeTimes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lockTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakedBalances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const address = '0xBaEdC1A0AC40931cb14bD8c2C30273450dD901db';

// Create a web3.js contract instance
const contract = new web3.eth.Contract(abi, address, provider);

// Get the amount of tokens to stake and withdraw from the user
const amountToStake = parseInt(prompt('How many tokens do you want to stake?'));
const amountToWithdraw = parseInt(prompt('How many tokens do you want to withdraw?'));
// The codes are just for stake smart contract
// Call the stake function of the Solidity contract
contract.methods.stake(amountToStake)
    .send({ from: provider, gas: 100000 })
    .then((receipt) => {
        console.log(`Staked ${amountToStake} tokens. Transaction hash: ${receipt.transactionHash}`);
    })
    .catch((error) => {
        console.error(error);
    });

// Call the withdraw function of the Solidity contract
contract.methods.withdraw(amountToWithdraw)
    .send({ from: provider, gas: 100000 })
    .then((receipt) => {
        console.log(`Withdrew ${amountToWithdraw} tokens. Transaction hash: ${receipt.transactionHash}`);
    })
    .catch((error) => {
        console.error(error);
    });