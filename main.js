

const Discord = require('discord.js');
const cron = require('cron')
const client = new Discord.Client();

const dolChannelID = '689063973332582518'
let dolChannel = null

const msgs = {
    'morning': 'Pranam ji! Hope all of you are keep healthy, and have had a hearty breakfast. Let\'s get to work guys!',
    'evening': 'Hi guys! Please send an update on what you did today. Even if you didn\'t do anything no worries, but do inform us.',
    'finale': 'We hope EVERY SINGLE MEMBER that participated in these past 40 days had an AMAAAAAZING TIME, and learning A LOT! Do tell us how you liked the experience :-D. And remember always \n\n|| THIS IS NOIDA ||'
}
const startTime = new Date('March 22, 2020 9:38:00')
const lastDate = new Date('April 27, 2020 21:00:00')

// --------------------------------------------------

client.on('ready', () => {
    
    console.log('we\'re up and running!')

    client.channels.fetch(dolChannelID)
    .then(channel => {
        dolChannel = channel
        dolChannel.send('Aaya le aaya, @Chirag Bhansali! #randomNonseJokesToMakeWhileGettingYourBotToWork')
    })
    .then(() => {
        console.log('this has happened')
        let execJob = new cron.CronJob('50 9,21 * * *', function() {
            let rn = new Date()
            console.log('time', rn)
        }, null, true, 'Asia/Kolkata')
        execJob.start()
        console.log('this too has happened')
    })
    .catch((err) => {
        console.log('error \n \n', err)
    })
})


client.login('NjkwNzg2Nzc0MzUxNjA5ODY2.XnW_KA.kPKVR2xoieyo61I6qVMZjWfVcFE');

