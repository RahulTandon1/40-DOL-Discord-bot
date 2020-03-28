// checks if is valid command
function is_meant_to_be_command(text) {
    if (text.startsWith('$')) return true
}

async function verify_command_and_execute(text, msgs, channel) {
    // removes $ sign and removes whitespaces
    let tempCommand = String(text.replace('$', '').trim())
    try {
        // -------------- addKidsMessage-------------

        //  checking if starts with addKids message
        if (tempCommand.startsWith('addKids')) {
            tempCommand = tempCommand.replace('addKids', '')     // deleting 'addKids'
            
            tempCommand.split(' ').forEach( async kidName => {
                kidName = kidName.trim()
                if (kidName !== '') msgs.kids.push(kidName.toLocaleLowerCase())
            })
            await channel.send('Kids added')
        }

        // ----------  removeKids message ---------------
        else if (tempCommand.startsWith('removeKids')) {
            tempCommand =  tempCommand.replace('removeKids', '')     // deleting removeKids
            tempCommand.split(' ').forEach( async kidName => {
                kidName = kidName.trim().toLowerCase()
                
                // doesn't delete name if not in msgs.kids

                if ( kidName !== '' && msgs.kids.includes(kidName)) {
                    let index = msgs.kids.indexOf(kidName)
                    msgs.kids.splice(index, 1)
                } 
                else {
                    if (kidName.length !== 0) await channel.send(`${kidName} not in kidsList`)
                    return
                }
                
            })
            await channel.send('Kids present in list removed')
        }
        // ------- listKids -------------------
        else if (tempCommand.startsWith('listKids')) {
            let tempMessage = 'Kids: \n'
            msgs.kids.forEach( async (kidName) => {
                tempMessage += `${kidName}\n`
            })
            await channel.send(tempMessage)
        }
        else {
            await channel.send('Command not valid')
        }
    }
    catch (err) { console.log(err) }
        
    
}

function isAuthorised(message, adminRoleID) {
    let list_of_roles  = message.member.roles.cache.keyArray()
    if (list_of_roles.includes(adminRoleID)) {
       return true
    }
    else {
        return false
    }
}

// exporting functions
module.exports = {
    is_meant_to_be_command,
    verify_command_and_execute,
    isAuthorised,
}