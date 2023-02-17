var mins = 00;
var secs = 00;
var millisecs = 00;

var getMilliSecs = document.getElementById("millisecs");
var getSecs = document.getElementById("seconds");
var getMins = document.getElementById("mins")
var btnStart = document.getElementById("start");
var btnStop = document.getElementById("stop")
var btnReset = document.getElementById("reset");
var timing;


btnStart.onclick = function(){
  clearInterval(timing);
  timing = setInterval(startTimer,100)
}

function startTimer(){
  millisecs++;
    if (millisecs < 10) {
      getMilliSecs.innerHTML = "0" + millisecs;
    }
    if (millisecs >= 10) {
      getMilliSecs.innerHTML = millisecs;

    }
    if (millisecs > 100) {
      secs++;
        millisecs = 0;
        getMilliSecs.innerHTML = "0" + millisecs;
        if (secs < 10) {
          getSecs.innerHTML = "0" + secs;

        }
        if (secs >= 10) {
          getSecs.innerHTML = secs;
        }

        

        if (secs > 60) {
            mins++;
            if (mins < 10) {
              getMins.innerHTML = "0" + mins;

            }
            if (mins >= 10) {
              getMins.innerHTML = mins;
            }
            secs = 0;
            getSecs.innerHTML = "0"+0;
        }
       
    }
}

btnReset.onclick = function(){
  clearInterval(timing);
  mins = "00";
  secs = "00";
  millisecs = "00";
  getMilliSecs.innerHTML = millisecs;
  getSecs.innerHTML = secs;
  getMins.innerHTML = mins;
}

btnStop.onclick = function(){
  clearInterval(timing);
}