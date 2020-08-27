import Web3 from 'web3'; //Web3 is a constructor function

window.ethereum.enable();
const web3 = new Web3(window.web3.currentProvider);

export default web3;