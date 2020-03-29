function getIndiaDate() {
    let temp = new Date()
    temp.setMinutes( temp.getMinutes() + 330)    // 300 for 5 hrs + 30 for 30 mins
    return temp
}

function calcTimeToWait() {
    let rn = getIndiaDate()
    var minsToWait
    var millisecondsToWait
    switch(rn.getHours() % 3) {
        case 0:
          // e.g. 9, 12, 15, 18, 21
          // e.g. 9:34
          // 2 hrs + 
          minsToWait = 180 - rn.getMinutes()
          millisecondsToWait = minsToWait * 60 * 1000
          break;
        
        case 1:
          minsToWait = 120 - rn.getMinutes()
          millisecondsToWait = minsToWait * 60 * 1000
          break;
        
        case 2:
            // e.g. 11, 13, 
            minsToWait = 60 - rn.getMinutes()
            millisecondsToWait = minsToWait * 60 * 1000
            break;
      }

    
    // adding 1 min delay
    millisecondsToWait += (60 * 1000)
    console.log('Milliseconds to wait', millisecondsToWait)
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

function dayOf40DOL() {
    let rn = getIndiaDate()

    // march
    if (rn.getMonth() === 2) return `Day #${(rn.getDate() - 18 + 1)} of 40 march`

    // will be april in other case
    else return `Day #${(rn.getDate() + 13 + 1)} of 40`
}

// exporting functions
module.exports = {
    getIndiaDate,
    calcTimeToWait,
    is_early_in_India,
    is_9AM_in_India,
    is_9PM_in_India,
    isLastDay, 
    dayOf40DOL
}
