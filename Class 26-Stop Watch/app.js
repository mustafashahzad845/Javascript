var timeCounter = document.getElementById("timeCounter")
var startBtn = document.getElementById("startBtn")

var hour = 0;
var minute = 0;
var sec = 0;
var millisec = 0;


        timeCounter.innerHTML = `0${hour} : 0${minute} : 0${sec} : 0${millisec}`

var timer ;

  function startWatch() {
//     console.log("startWatch");
    
  timer = setInterval(
        function() {
millisec++


        timeCounter.innerHTML = `${ hour < 10 ? '0'+hour : hour} : ${ minute < 10 ? '0'+minute : minute} : ${ sec < 10 ? '0'+sec : sec} : ${millisec < 10 ? '0' + millisec : millisec}`

        if(millisec == 99){
            `${millisec = 0}0`
            sec++
        }

if(sec >= 10){
  
}

        if(sec == 60){
            minute++
           `${sec = 0}0`
        }


      startBtn.disabled = true
      startBtn.style.opacity = "0.7"

        }
        ,
      
         10)




  
return timeCounter
    }




 
    


    function pauseWatch() {
// console.log(timeCounter);



clearInterval(timer)

startBtn.disabled = false
      startBtn.style.opacity = "1"

return
    }
        

    function resetWatch() {
        // console.log("resetWatch");

hour = 0 ;
minute = 0 ;
sec = 0 ;
millisec = 0 


clearInterval(timer)

        timeCounter.innerHTML = timeCounter.innerHTML = `0${hour} : 0${minute} : 0${sec} : 0${millisec}`
        
startBtn.disabled = false
      startBtn.style.opacity = "1"

    }