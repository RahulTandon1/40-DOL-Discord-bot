// getting functions from timing.js
const timing = require('./timingFunctions')
const command = require('./commandFunctions')

// intiaties bot timing processes
async function execTimingStuff(client, msgs, learningChannel) {
    
    // calculates the no. of milliseconds before the next hour's first minute.
    const timeToWait = timing.calcTimeToWait()
    
    // constant interval between message for washing hands (in milliseconds)
    // set to 2 hours right now
    // formula: no. of hours * 60 [mins / hour] * 60 [seconds / min] * 1000 [millisec / sec]
    const interv = (2 * 60 * 60 * 1000)
    
    // date on which the BOT stops posting messages
    const lastDay = new Date('April 27, 2020')
    
    try {

        // time out for when to start the setInterval
        await client.setTimeout((msgs, learningChannel, lastDay) => {
            
            let Loopy = client.setInterval(
                
                async () => {
                    
                    // Check if NOT early (Midnight-8AM) in India
                    if (! (timing.is_early_in_India())) {
                        
                        // hourly wash your hands message
                        await learningChannel.send(msgs.wash)

                        // if 9:00 AM in India -> message to start learning
                        if (timing.is_9AM_in_India()) {
                            await learningChannel.send(timing.dayOf40DOL())
                            await learningChannel.send(msgs.morning)
                        }
                        // else if 9:00 PM in India -> message for update
                        else if (timing.is_9PM_in_India()) {
                            
                            // send update message
                            await learningChannel.send(msgs.evening)
                            
                            // if last day send the special finale message
                            if (timing.isLastDay(lastDay)) {
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


//  parses message sent by users and if it's a command, executes them.
async function execMessageStuff(message, adminRoleID, msgs) {
    const channel = message.channel
    let text = String(message.content)

    try {
        // check if meant to be a command
        if (command.is_meant_to_be_command(text)) {
            // check if authorised
            if (command.isAuthorised(message, adminRoleID)) await command.verify_command_and_execute(text, msgs, channel)
            else {
                channel.send('not authorised')
            }
        }
    }
    catch (err) {
        console.log('err', err)
    }

}

module.exports = {
    execTimingStuff,
    execMessageStuff
}