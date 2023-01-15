const startBtn = document.querySelector('.start-btn')
const stopBtn = document.querySelector('.stop-btn') 
const resetBtn = document.querySelector('.reset-btn')

let hr = (min=sec=ms="0" + 0);
let startTimer;

const start = () => {
    startBtn.classList.add("active");
    stopBtn.classList.remove("active");
    resetBtn.classList.remove("active");

    startTimer = setInterval(()=>{
        ms++;
        ms = ms < 10 ? "0" + ms:ms;
        
        if (ms == 100) {
            sec++;
            sec = sec < 10 ? "0" + sec:sec;
            ms = "0" + 0
        }
        if (sec ==60) {
            min++;
            min = min < 10 ? "0" + min:min;
            sec = "0" + 0
        }

         if (min == 60) {
            hr++;
            hr = hr < 10 ? "0" + hr:hr;
            min = "0" + 0
         }
        setValue()
    }, 10);
};

const stop = () => {
    startBtn.classList.remove("active");
    stopBtn.classList.add("active");
    resetBtn.classList.remove("active"); 
    startBtn.innerHTML = "Resume";
    clearInterval(startTimer);
}

const reset = () => {
    stop();
    startBtn.classList.remove("active");
    stopBtn.classList.remove("active");
    resetBtn.classList.add("active"); 
    hr = min = sec = ms = "0" + 0;
    setValue();
    startBtn.innerHTML = "Start";
}

const setValue =() =>{
    document.querySelector(".milli-seconds").innerText = ms;
    document.querySelector(".seconds").innerText = sec;
    document.querySelector(".minutes").innerText = min;
    document.querySelector(".hours").innerText = hr;
}

startBtn.addEventListener("click", start)
stopBtn.addEventListener("click", stop)
resetBtn.addEventListener("click", reset)