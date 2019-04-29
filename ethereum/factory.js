import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';
import keys from '../config/keys';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    keys.deployedAddress
);

export default instance;