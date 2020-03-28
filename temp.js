function oops() {
    x = 10
    if (x === 10) {
        return true
    }
}

if (oops()) console.log('hello world')
else console.log('not hello world')