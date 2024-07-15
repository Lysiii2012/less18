document.addEventListener("DOMContentLoaded", () => { 
    const minutesElem = document.querySelector(".min");
    const secondsElem = document.querySelector(".sec");
    
    let timerСounter = localStorage.getItem('timerСounter');
    timerСounter = timerСounter ? parseInt(timerСounter, 10) : 5 * 60;

    function updateTimer() {
        let minutes = Math.floor(timerСounter / 60);
        let seconds = timerСounter % 60;

        minutesElem.textContent = minutes < 10 ? '0' + minutes : minutes;
        secondsElem.textContent = seconds < 10 ? '0' + seconds : seconds;

        if (timerСounter > 0) {
            timerСounter--; 
            localStorage.setItem('timerСounter', timerСounter);
        } else {
            clearInterval(timerInterval);
            console.log('Час вийшов');
            localStorage.removeItem('timerСounter');
        }
    } 

    const timerInterval = setInterval(updateTimer, 1000);

    updateTimer();
});
