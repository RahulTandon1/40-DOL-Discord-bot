var CronJob = require('cron').CronJob;

function lel() {
    console.log(Date.now())
}

var job = new CronJob('* * * * * *', lel, null, true, 'Asia/Kolkata');

job.start();