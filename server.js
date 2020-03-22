const Discord = require('discord.js');
const client = new Discord.Client();

msgs = {
    kids: ['Ravit', 'Arghya', 'Rushil', 'Arnav', 'Aarush', 'Shreyas', 'Shresth', 'Raghav', 'Ayush', 'Aditey'],
    morning: 'Good morning bois! \n I hope all of you are keeping healthy and safe, and have had a hearty breakast! C\'mon bois let\'s get to work!',
    evening: `Evening fellas! Do share an update of what you did today. \n @${this.kids}`,
    finale: 'Ah! My final message is here my padawans! I hope that ALL of YOU who participated during these past 40DAYS have learnt A LOT, and I hope that you enjoyed a lot. Always remember\n\n \|\|THIS IS NOIDA\|\|'
}

client.on('ready', () => {
  console.log('Logged into discord');
  
  // fetch the require channel
  client.channels.fetch('689063973332582518')
  .then( channel => {
      init(msgs, channel)
  })
  .catch(() => console.log('Error from code \n\n', err))
});



function init(msgs, learningChannel) {
    // calculating time to wait + dateConstants
    
    let rn = new Date()         // current time
    const startTime = new Date('March 22, 2020 21:00:00')   // time to start
    let timeToWait = startTime - rn     // time to wait before starting theLoopy kinda stuff
    const endTime = new Date('April 27, 2020 21:00:00') // time to end
    
    // time interval between message
    const interv = 12 * 60 * 60
    
    // time out for when to start the interval
    client.setTimeout((msgs, learningChannel, endTime) => {
        
        console.log('Timeout started')
        
        // the main interval that should keep taking place
        let theLoop = client.setInterval( (msgs, learningChannel, endTime) => {
            console.log('inside Interval')
            
            // getting current time
            let rn = new Date()
            
            // last day is in future
            if (endTime > rn) {
                
                // if AM
                // TOOGGLE MINUTES TO HOURS
                if (rn.getHours() < 12) {
                    // send morning msg
                    learningChannel.send(msgs.morning)
                    .then(()=> console.log('message sent'))
                    .catch(err => console.log('Error \n', err))
                }
                // if PM
                else {
                    // send evening msg
                    learningChannel.send(msgs.evening)
                    .then(()=> console.log('message sent'))
                    .catch(err => console.log('Error \n', err))
                }
            }
            // if Today is last day or last day has passed
            else {
                // send last message
                learningChannel.send(msgs.finale)
                    .then(()=> console.log('LAST message sent'))
                    .catch(err => console.log('Error \n', err))
                // exit
                client.clearInterval(theLoop)
            }

        },
        interv, msgs, learningChannel, endTime)
    }, 
    timeToWait, msgs, learningChannel, endTime)
}



client.login('NjkwNzg2Nzc0MzUxNjA5ODY2.XncSHw.tdUNCbvu65Gi3bFFIqaFiGIEKl8');