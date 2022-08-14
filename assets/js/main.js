const stopWatch = document.querySelector('#stopWatch')
const startButton = document.querySelector('#startButton')
const pauseButton = document.querySelector('#pauseButton')
const restartButton = document.querySelector('#restartButton')

let [hour, minute, second, milisecond] = [0, 0, 0, 0]
let timer

document.addEventListener('click', (event) => {
    switch (event.target) {
        case startButton:
            clearInterval(timer)
            stopWatch.classList.remove('paused')
            timerOn();
            break;
        case pauseButton:
            clearInterval(timer)
            stopWatch.classList.add('paused');
            break;
        case restartButton:
            [hour, minute, second, milisecond] = [0, 0, 0, 0];
    updateTimeShown()
    }
})

function timerOn () {
    timer = setInterval(() => {
        milisecond = milisecond + 4
        if (milisecond >=1000) {
            milisecond = 0
            second++
        }
        if (second >=60) {
            second = 0;
            minute++;
        }
        if (minute >=60) {
            minute = 0;
            hour++
        }
        updateTimeShown()
    }, 1)
}

function numberWithXDigits (number, minDigits) {
    const numberLength = (number.toString()).length
    
    function CalculateZerosNeeded () {
        let zeroAccumulator = ''
        for (let i = 0; i < minDigits - numberLength; i++) {
            zeroAccumulator = `0${zeroAccumulator}`
        }
        return zeroAccumulator
    }
    const leftZeros = CalculateZerosNeeded()
    return `${leftZeros}${number}`
    }


function updateTimeShown() {
    stopWatch.innerHTML = `
    ${numberWithXDigits(hour, 2)}:${numberWithXDigits(minute, 2)}:${numberWithXDigits(second, 2)}:<span id="miliseconds">${numberWithXDigits(milisecond, 3)}</span>`
}