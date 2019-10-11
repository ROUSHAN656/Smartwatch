// Author: Roushan Raj
let seconds=0;
let minutes=0;
let hours=0;

let changedSeconds=0;
let changedMinutes=0;
let displayHours=0;

let interval=null;

let status="stopped";

function stopwatch(){
    seconds++;
    if(seconds/60===1){
        seconds=0;
        minutes++;
    if(minutes / 60 === 1){
        minutes = 0;
        hours++;
    }
}
if(seconds < 10){
    changedSeconds = "0" + seconds.toString();
}
else{
    changedSeconds = seconds;
}

if(minutes<10){
    changedMinutes="0"+minutes.toString();
}
else{
    changedMinutes=minutes;
}

if(hours<10){
    changedHours="0"+hours.toString();
}
else{
    changedHours=hours;
}

document.getElementById("display").innerHTML=changedHours + ":" + changedMinutes + ":" + changedSeconds;
}