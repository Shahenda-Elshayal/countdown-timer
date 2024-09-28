// get the element from html
let timerElement = document.querySelector(".timer");

// declare a variable to use in clearInterval
let countdownInterval;

// make the function of countdown
function countdown(duration) {
    let mins, secs;

    countdownInterval = setInterval(() => {

        // get the minutes and seconds
        mins = parseInt(duration / 60);
        secs = parseInt(duration % 60);

        // adding 0 if it consist of one digit
        mins = mins < 10 ? `0${mins}` : mins;
        secs = secs < 10 ? `0${secs}` : secs;

        // put them in the innerhtml
        timerElement.innerHTML = `${mins}:${secs}`;

        // stop the interval when it reaches 0
        if (--duration < 0) {
            clearInterval(countdownInterval);
        }
    }, 1000)
}

// call the function to work
countdown(110);