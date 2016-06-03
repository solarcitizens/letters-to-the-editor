'use strict';
const userDataExport = require('./userDataExport'),
      CronJob = require('cron').CronJob;

function init() {
  new CronJob({
    cronTime: '0 0 0 * * 7',
    onTick: userDataExport.exportUserData,
    start: true,
    timeZone: 'Australia/Sydney'
  });
};

module.exports = { init };
