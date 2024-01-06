const canvas = document.querySelector('#scene');
const thisNumber = document.querySelector('#this-number');
const thisColor = document.querySelector('#this-color');
const howMany = document.querySelector('#how-many');
const ctx = canvas.getContext('2d');

function randomDot() {
    const randomNumber = Math.random().toFixed(2,5).slice(2,5);
    return +randomNumber;
}

const colors = ['red', 'green', 'blue', 'indigo', 'cyan', 'yellow'];
const addedColors = []
const addedNumbers = []

let i = 0;

const forClear = setInterval(() => {
    const randomNumbers = randomDot()
    ctx.fillStyle = 'white';
    ctx.fillStyle = colors[randomNumbers]
    ctx.fillRect(randomDot(), randomDot(), 5, 5);
    console.log(randomNumbers);

    if (randomNumbers < 6) {
        addedNumbers.push(randomNumbers)
        thisNumber.innerHTML = `Number: ${addedNumbers.join(', ')}`;
        addedColors.push(colors[randomNumbers]);
        thisColor.innerHTML = `Color: ${addedColors.join(', ')}`;
        i++
    }
}, 1);

setTimeout(() => {
    clearInterval(forClear);
    console.log(`Result: ${i}`);
    howMany.innerHTML =  `How many: ${i}`

    if (ctx.fillStyle === '#ffffff') {
        fillStyle = 'black';
    }
}, 1000);