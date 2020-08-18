const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());  //communication-layer

let accounts;

beforeEach(async () => {
    //getting list of all accounts
    accounts = await web3.eth.getAccounts();
    //using one of those accounts to deploy the contract
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        console.log(accounts);
    });
});

// class Car {
//     park() {
//         return 'stopped';
//     }
//     drive() {
//         return 'vroom';
//     }
// }
// let car;  //initialized here to make it global
// beforeEach(() => {
//     car = new Car();
// });
// describe('Car Test', () => {
//     it('can park', () => {
//         assert.equal(car.park(), 'stopped');
//     });
//     it('can drive', () => {
//         assert.equal(car.drive(), 'vroom');
//     });
// });


