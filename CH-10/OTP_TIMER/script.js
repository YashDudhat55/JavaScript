let time = 120;

let timer = document.getElementById("timer");
let resendBtn = document.getElementById("resendBtn");
let message = document.getElementById("message");

let resendCount = 0;
let maxResend = 3;

let interval;

function startTimer() {

    clearInterval(interval);

    time = 120;

    resendBtn.disabled = true;

    timer.innerText = "01:59";


    message.innerHTML = `
        <span>
            You can resend the code after the timer ends.
        </span>
    `;


    interval = setInterval(function() {

        time--;

        let minutes = Math.floor(time / 60);

        let seconds = time % 60;


        minutes =
            minutes < 10 ?
            "0" + minutes :
            minutes;


        seconds =
            seconds < 10 ?
            "0" + seconds :
            seconds;


        timer.innerText =
            minutes + ":" + seconds;

        if (time === 0) {

            clearInterval(interval);

            if (resendCount >= maxResend) {

                timer.innerText = "24h";


                message.innerHTML = `
                    <span>
                        Try again after 24 hours.
                    </span>
                `;


                resendBtn.disabled = true;

                return;
            }

            timer.innerText = "00:00";

            resendBtn.disabled = false;


            message.innerHTML = `
                <span>
                    You can resend the code now.
                </span>
            `;

        }

    }, 1000);
}


resendBtn.addEventListener(
    "click",
    function() {

        if (resendCount >= maxResend) {
            return;
        }


        resendCount++;


        startTimer();

    }
);


startTimer();

// const otpCard = document.querySelector(".otp-card");
