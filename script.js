document.addEventListener("DOMContentLoaded", () => { 
    const minutesElem = document.querySelector(".min");
    const secondsElem = document.querySelector(".sec");
    
    let timerSeconds = 5 * 60;  

    function updateTimer() {
        let minutes = Math.floor(timerSeconds / 60);
        let seconds = timerSeconds % 60;

        minutesElem.textContent = minutes < 10 ? '0' + minutes : minutes;
        secondsElem.textContent = seconds < 10 ? '0' + seconds : seconds;

        if (timerSeconds > 0) {
            timerSeconds--;
        } else {
            clearInterval(timerInterval);
            console.log('Час вийшов');
        }
    } 

    const timerInterval = setInterval(updateTimer, 1000);

    updateTimer();
});
