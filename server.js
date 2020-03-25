const Discord = require('discord.js');
const client = new Discord.Client();
let funky = require('./funky')

msgs = {
    wash: 'Everybody @here, go and wash your hands right now!',
    kids: ['Ravit', 'Arghya', 'Rushil', 'Arnav', 'Aarush', 'Shreyas', 'Shresth', 'Raghav', 'Ayush', 'Aditey'],
    morning: 'Good morning bois! \n I hope all of you are keeping healthy and safe, and have had a hearty breakast! C\'mon bois let\'s get to work!',
    evening: `Evening fellas! Do share an update of what you did today. \n ${this.kids}`,
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


async function init(msgs, learningChannel) {
    const timeToWait = funky.calcTimeToWait()
    const interv = (60 * 60 * 1000)
    const lastDay = new Date('April 27, 2020')
    
    try {

        // time out for when to start the interval
        await client.setTimeout((msgs, learningChannel, lastDay) => {
            
            // 1 hr interval
            let Loopy = client.setInterval(
                
                async () => {
                    
                    // Check if NOT early (Midnight-8AM) in India
                    if (! (funky.is_early_in_India())) {
                        
                        // hourly wash your hands message
                        await learningChannel.send(msgs.wash)

                        // if 9:00 AM in India -> message to start learning
                        if (funky.is_9AM_in_India()) {
                            await learningChannel.send(msgs.morning)
                        }
                        // else if 9:00 PM in India -> message for update
                        else if (funky.is_9PM_in_India()) {
                            await learningChannel.send(msgs.evening)
                            if (funky.isLastDay(lastDay)) {
                                await learningChannel.send(msgs.finale)
                            }
                        }
                    }
                }
            , interv, msgs, learningChannel, lastDay)

        },timeToWait, msgs, learningChannel, lastDay)
    }
    catch (err) {
        console.log('Error while running\n', err)
    }

}



client.login('NjkwNzg2Nzc0MzUxNjA5ODY2.XncSHw.tdUNCbvu65Gi3bFFIqaFiGIEKl8');