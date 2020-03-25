// Check if AM in India
//     true -> do nothing
//     false =>
//     hourly wash your hands message
//     if 9:00 PM in India -> message for update
//     else i f 9:00 AM in India -> message to start learning


// console.log('Inside Timeout')
        
// // the main interval that should keep taking place
// let theLoop = client.setInterval( (msgs, learningChannel, endTime) => {
//     console.log('inside Interval')
    
//     // getting current time
//     let rn = getIndiaDate()
    
//     // last day is in future
//     if (endTime > rn) {
        
//         // if AM
//         // TOOGGLE MINUTES TO HOURS
//         if (rn.getHours() < 12) {
//             // send morning msg
//             learningChannel.send(msgs.morning)
//             .then(()=> console.log('message sent'))
//             .catch(err => console.log('Error \n', err))
//         }
//         // if PM
//         else {
//             // send evening msg
//             learningChannel.send(msgs.evening)
//             .then(()=> console.log('message sent'))
//             .catch(err => console.log('Error \n', err))
//         }
//     }
//     // if Today is last day or last day has passed
//     else {
//         // send last message
//         learningChannel.send(msgs.finale)
//             .then(()=> console.log('LAST message sent'))
//             .catch(err => console.log('Error \n', err))
//         // exit
//         client.clearInterval(theLoop)
//     }

let oops = new Date('December 17, 1995')
console.log(oops.getDate())