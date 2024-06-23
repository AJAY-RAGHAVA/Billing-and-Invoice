const axios = require('axios');

const triggerZapierBilling = async (billingData) => {
    const zapierWebhookUrl = process.env.ZAPIER_WEBHOOK_URL;
    
    try {
        const response = await axios.post(zapierWebhookUrl, billingData);
        return response.data;
    } catch (error) {
        console.error('Error triggering Zapier webhook:', error);
        throw error;
    }
};

module.exports = {
    triggerZapierBilling,
};
