const cron = require('node-cron');
const { updateUserNameInfo } = require('../controllers/userController');

const updateUserCron = () => {
  cron.schedule('*/2 * * * *', async () => {
    console.log('Cron job started to update user information');
    updateUserNameInfo("sahil12345")
  })
};

module.exports = updateUserCron;
