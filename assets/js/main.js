const stopWatch = document.querySelector('#stopWatch')
const startButton = document.querySelector('#startButton')
const pauseButton = document.querySelector('#pauseButton')
const restartButton = document.querySelector('#restartButton')

let [hour, minute, second] = [0, 0, 0]
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
            [hour, minute, second] = [0, 0, 0];
    updateTimeShown()
    }
})

function timerOn () {
    timer = setInterval(() => {
        second++
        if (second >=60) {
            second = 0;
            minute++;
        }
        if (minute >=60) {
            minute = 0;
            hour++
        }
        updateTimeShown()
    }, 1000)
}

function twoDigitsNumber(number) {
    return number < 10 ? `0${number}` : number
}

function updateTimeShown() {
    stopWatch.textContent = `${twoDigitsNumber(hour)}:${twoDigitsNumber(minute)}:${twoDigitsNumber(second)}`
}