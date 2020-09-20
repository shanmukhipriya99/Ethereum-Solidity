import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xc037460cCF610119939d4eD39b7B915Cc2924E4b'
);

export default instance;