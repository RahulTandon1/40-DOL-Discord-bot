

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
const startTime = new Date('March 22, 2020 9:20:00')
const lastDate = new Date('April 27, 2020 21:00:00')

// --------------------------------------------------

var wrapperJob = new cron.CronJob(startTime, function() {
    execJob.start()
}, null, true, 'Asia/Kolkata');

let execJob = new cron.CronJob('1-30 9,21 * 3,4 *', function() {
    let res = exec()
    if (res.end) {
        dolChannel.send(res.msg)
        .then( () => {
            execJob.stop()
        })
        .catch( (err) => {
            console.log('error while sending msg', err)
        })
        
    }
    else if (res.msgExists) {
        dolChannel.send(res.msg)
        .then(()=> {
            console.log('message sent')
        })
        .catch( (err) => {
            console.log('error while sending msg', err)
        })
    }
}, null, true, 'Asia/Kolkata')

function exec() {
    let currDate = new Date()
    
    // if time is 9 AM or PM
    if (currDate.getHours() === 9 || currDate.getHours() === 21) {
        
        // if date < last
        if (currDate > lastDate) {
            let msg = String()
            
            // if AM
            if (currDate.getHours() === 9) {
                msg = msgs.morning
            }
            // if PM
            else {
                msg = msgs.evening
            }
            
            // send msg
            return {
                msgExists: true,
                msg: msg,
                end: false
            }
    
        }
        else if (currDate >= lastDate) {
            
            // send final msg and exit
            return {
                msgExists: true,
                msg: msgs.finale,
                end: true
            }
        }
    }    
}

client.on('ready', () => {
    
    console.log('we\'re up and running!')
    
    // getting 40DOLChannel
    try {
        client.channels.fetch(dolChannelID)
        .then(channel => {
            dolChannel = channel
            dolChannel.send('Aaya le aaya, Chigga! #randomNonseJokesToMakeWhileGettingYourBotToWork')
        })
        .then(() => {
            wrapperJob.start()
        })
        .catch((err) => {
            console.log('erro \n \n', err)
        })

    }
    catch(err){
        console.log(err)
    }
})


client.login('NjkwNzg2Nzc0MzUxNjA5ODY2.XnW_KA.kPKVR2xoieyo61I6qVMZjWfVcFE');