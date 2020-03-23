var uk = new Date("2015-03-25T12:00:00Z");
var india = new Date("2015-03-25T12:00:00+05:30");
function getIndiaDate() {
    let temp = new Date()
    temp.setMinutes( temp.getMinutes() + 330)    // 300 for 5 hrs + 30 for 30 mins
    return temp
}


console.log('uk', uk)
console.log('india', india)
console.log('rn default', new Date())
console.log('rn custom', getIndiaDate())