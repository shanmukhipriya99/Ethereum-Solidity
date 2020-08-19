const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
// const provider = ganache.provider();
// const web3 = new Web3(provider);
const web3 = new Web3(ganache.provider());  //communication-layer
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;

beforeEach(async () => {
    //getting list of all accounts
    accounts = await web3.eth.getAccounts();
    //using one of those accounts to deploy the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))  //Contract() is an instance
    .deploy({ data: bytecode, arguments: ['Hi there!'] })  //arguments value goes to the constructor in inbox.sol
    .send({ from: accounts[0], gas: '1000000' })
    // inbox.setProvider(provider);
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        assert.ok(inbox.options.address);  //ok() checks whether the passed value exists or not
    });
    it('has a default message', async () => {   //calling a method is asynchronous
        const message = await inbox.methods.message().call();
        assert.equal(message, 'Hi there!');
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


