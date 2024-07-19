// Code your solutions in this fil
function writeCards(namesArray,eventName) {
    let messages = []
    for (let i = 0; i < namesArray.length; i++) {
        
        messages.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`)
    }
    return messages;
}
let names = ["Guadalupe", "Ollie", "Aki"]
let eventName = 'suprise'
let cards = writeCards(names,eventName)
console.log(cards);

function countDown(startingNurmbers) {
    let currentNumber = startingNurmbers

    while ( currentNumber>=0) {
        console.log(currentNumber);
        currentNumber--;
    }
}
countDown;