import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xeCA6597C2C7B2068bBCF78536E19bA8851d43D52'
);

export default instance;