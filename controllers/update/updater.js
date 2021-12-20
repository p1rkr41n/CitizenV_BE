const cron = require('node-cron');
const updateStaticalInfo = require('./updateStaticalInfo');
const updateAddresses = require('./updateAddresses');
cron.schedule('1 * * * *', function() {
    console.log('running a task every hour');
    updateStaticalInfo();
    updateAddresses();
  });
  module.exports = cron;
// Real world : server when update at 23:59