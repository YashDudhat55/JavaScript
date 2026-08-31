// setInterval(() => {
//     console.log('This message will be logged every second.');
// }, 1000);


let second = 0;
let minute = 0;
let timerInterval = null;

const timer = document.getElementById('timer');

document.querySelector('#start').addEventListener('click', () => {
    if (timerInterval != null) {

        return;
    }

    timerInterval = setInterval(() => {
        second++;

        if (second === 60) {
            minute++;
            second = 0;
        }

        let ss = second < 10 ? `0${second}` : `${second}`;
        let mm = minute < 10 ? `0${minute}` : `${minute}`;

        timer.textContent = `${mm}:${ss}`;
    }, 1000);
});

document.querySelector('#stop').addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
});

document.querySelector('#reset').addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
    second = 0;
    minute = 0;
    timer.textContent = "00:00";
})