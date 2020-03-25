function getIndiaDate() {
    let temp = new Date()
    temp.setMinutes( temp.getMinutes() + 330)    // 300 for 5 hrs + 30 for 30 mins
    return temp
}

function calcTimeToWait() {
    let rn = getIndiaDate()
    
    //
    let rnMins = rn.getMinutes()
    let minsToWait = 60 - rnMins
    let millisecondsToWait = (minsToWait * 60 * 1000)
    
    // adding 1 min delay
    millisecondsToWait += (60 * 1000)
    return millisecondsToWait
}

function is_early_in_India() {
    let rn = getIndiaDate()
    
    if (rn.getHours() <= 8) {
        return true
    }
    else {
        return false
    }
}

function is_9PM_in_India() {
    let rn = getIndiaDate()
    
    if (rn.getHours() === 21) {
        return true
    }
    else {
        return false
    }
}

function is_9AM_in_India() {
    let rn = getIndiaDate()
    
    if (rn.getHours() === 9) {
        return true
    }
    else {
        return false
    }
}

function isLastDay(lastDay) {
    let rn = getIndiaDate()
    if (rn.getMonth() === lastDay.getMonth() && rn.getDate() == lastDay.getDate()) {
        return true
    }
    else {
        return false
    }
}
// exporting functions
module.exports.getIndiaDate = getIndiaDate
module.exports.calcTimeToWait = calcTimeToWait
module.exports.is_early_in_India = is_early_in_India
module.exports.is_9AM_in_India = is_9AM_in_India
module.exports.is_9PM_in_India = is_9PM_in_India
module.exports.isLastDay = isLastDay