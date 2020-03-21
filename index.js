

const Discord = require('discord.js');
const client = new Discord.Client();
const dolChannelID = '689063973332582518'

const msgs = {
    'morning': 'Pranam ji! Hope all of you are keep healthy, and have had a hearty breakfast. Let\'s get to work guys!',
    'evening': 'Hi guys! Please send an update on what you did today. Even if you didn\'t do anything no worries, but do inform us.',
    'finale': 'We hope EVERY SINGLE MEMBER that participated in these past 40 days had an AMAAAAAZING TIME, and learning A LOT! Do tell us how you liked the experience :-D. And remember always \n\n|| THIS IS NOIDA ||'
}
const startTime = new Date('March 22, 2020 9:00:01')
const lastDate = new Date('April 27, 2020 21:00:00')
const twelveHours = 12 * 60 * 60 * 1000


client.on('ready', () => {
    
    console.log('we\'re up and running!')
    
    // getting 40DOLChannel
    try {
        dolChannel = client.channels.fetch(dolChannelID)
    }
    catch(err){
        console.log(err)
    }

    // initiating the reminders
    let rn = new Date()
    
    let mil_sec_to_wait = (rn - startTime) * 1000
    
    timeout = setTimeout(() => {
        interval = setInterval(() => {
            let res = exec()
            if (res.end) {
                // send msg finale
                dolChannel.send(res.msg)
                clearInterval(interval)
            }
            else if (res.msgExists) {
                // send msg finale
                dolChannel.send(res.msg)
            }
        }, twelveHours)
    }, mil_sec_to_wait);


})


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

client.login('NjkwNzg2Nzc0MzUxNjA5ODY2.XnW_KA.kPKVR2xoieyo61I6qVMZjWfVcFE');