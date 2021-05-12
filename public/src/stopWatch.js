console.log("test");
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");
var miliseconds = document.getElementById("miliseconds");
var seconds = document.getElementById("seconds");
var minutes = document.getElementById("minutes");
var hours = document.getElementById("hours");

var msCounter = 0;
var secCounter = 0;
var minCounter = 0;
var hourCounter = 0;
var preventStartSpam = false;

function startStopWatch(){
    msCounter++;
    if(msCounter < 9)
    {
        miliseconds.innerHTML = "0" + msCounter;
    }
    if(msCounter > 9 && msCounter < 100) {
        miliseconds.innerHTML = msCounter;
    }
    if(msCounter > 99)
    {
        secCounter += 1;
        seconds.innerHTML = "0" + secCounter;
        msCounter = 0;
        miliseconds.innerHTML = "00";
    }
    if(secCounter > 9)
    {
        seconds.innerHTML = secCounter;
    }
    if(secCounter > 59)
    {
        minCounter += 1;
        minutes.innerHTML = "0" + minCounter;
        secCounter = 0;
        seconds.innerHTML = "00";
        msCounter = 0;
        miliseconds.innerHTML = "00";
    }
    if(minCounter < 9)
    {
        minutes.innerHTML = "0" + minCounter;
    }
    if(minCounter > 9)
    {
        minutes.innerHTML = minCounter;
    }
    if(minCounter > 59)
    {
        hourCounter += 1;
        hours.innerHTML = "0" + hourCounter;
        minCounter = 0;
        minutes.innerHTML = "00";
        secCounter = 0;
        seconds.innerHTML = "00";
        msCounter = 0;
        miliseconds.innerHTML = "00";
    }
    if(hourCounter < 9)
    {
        hours.innerHTML = "0" + hourCounter;
    }
    if(hourCounter > 9)
    {
        hours.innerHTML = hourCounter;
    }
}

start.onclick = function ()
{
    if(preventStartSpam == false)
    {
    interval = setInterval(startStopWatch,10);
    preventStartSpam = true;
    }
    console.log(choices1);
}
stop.onclick = function () {
    clearInterval(interval);
    preventStartSpam = false;
}
reset.onclick = function () {
    clearInterval(interval);
    msCounter = 0;
    miliseconds.innerHTML = "00";
    secCounter = 0;
    seconds.innerHTML = "00";
    minCounter = 0;
    minutes.innerHTML = "00";
    hourCounter = 0;
    hours.innerHTML = "00";
    preventStartSpam = false;
}