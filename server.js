// getting required modules
const Discord = require('discord.js');
const msgs = require('./messages')
const exec = require('./exec')

//  getting discord client object
const client = new Discord.Client();


// hard coded constants 
// obtained by experimentation
const dolChannelID = '689063973332582518'
const adminRoleID = '634055048350924840'

// ------------------- MAIN CODE ------------------

// executes the moment the bot's ready, which I think means that it has loggen into discord
client.on('ready', async () => {
    
    // confirming discord login
    console.log('Logged into discord');
  
    try {
        // fetch the require channel
        let channel = await client.channels.fetch(dolChannelID)
        // executing the inti
        await exec.execTimingStuff(client, msgs, channel)
    }

    // console logging error
    catch (err) {
        console.log('Error in on.ready function\n', err)
    }
})

client.on('message', async message => {
    try {
        await exec.execMessageStuff(message, adminRoleID, msgs)
    }
    catch (err) {
        console.log('Error in message wrapper function\n', err)
    }
})



client.login('NjkwNzg2Nzc0MzUxNjA5ODY2.XncSHw.tdUNCbvu65Gi3bFFIqaFiGIEKl8')