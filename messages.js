msgs = {
    wash: 'Everybody @here, go and wash your hands right now!',
    kids: [],
    morning: 'Good morning bois! \n I hope all of you are keeping healthy and safe, and have had a hearty breakast! C\'mon bois let\'s get to work!',
    finale: 'Ah! My final message is here my padawans! I hope that ALL of YOU who participated during these past 40DAYS have learnt A LOT, and I hope that you enjoyed a lot. Always remember\n\n \|\|THIS IS NOIDA\|\|',
    get evening() {
        let tempMsg = 'Evening fellas! Do share an update of what you did today.\n'
        this.kids.forEach(kidName => {
            tempMsg += `@${kidName}\n`
        });
        return tempMsg
    }
}

module.exports = msgs
