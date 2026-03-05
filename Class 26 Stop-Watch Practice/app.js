var timeCounter = document.getElementById("timeCounter")
console.log(timeCounter);

var hour = 0;
var minute = 0 ;
var sec = 0 ;
var milliSec = 0;

var timer ;

var startBtn = document.getElementById("startBtn")

function timeCounterDisplay() {
timeCounter.innerHTML = `${hour < 10 ? '0' + hour : hour} : ${minute < 10 ? '0' + minute : minute} : ${sec < 10 ? '0' + sec : sec} : ${milliSec < 10 ? '0' + milliSec : milliSec}`
}

timeCounterDisplay()

function startWatch() {
    console.log("startWatch");
    
timer = setInterval(
    function(){
milliSec++

if(milliSec > 99){
milliSec = 0

sec++
}

if(sec == 60){
sec = 0

minute++
}

if(minute == 60){
    minute = 0
    hour++
}

startBtn.disabled = true
startBtn.style.opacity = "0.6"


timeCounterDisplay()
    } , 10
)

}




function pauseWatch() {
    clearInterval(timer)


    startBtn.disabled = false
startBtn.style.opacity = "1"
}


function resetWatch() {
    hour = 0 ;
    minute = 0;
    sec = 0;
    milliSec = 0

    timeCounterDisplay()

    startBtn.disabled = false
startBtn.style.opacity = "1"

clearInterval(timer)

}