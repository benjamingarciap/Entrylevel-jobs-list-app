var CronJob = require('cron').CronJob;

const fetchGithub = require('./tasks/fetch-github')


new CronJob('*/1 * * * *', function() {
  console.log('You will see this message every second');
  fetchGithub()
}, null, true, 'America/Los_Angeles');