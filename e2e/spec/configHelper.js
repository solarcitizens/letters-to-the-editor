const campaignConfig = require('../../backend/config/campaigns.json');

const aCurrentCampaign = () => (Object.keys(campaignConfig)[0]);

export default { aCurrentCampaign };
