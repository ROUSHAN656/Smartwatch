// Author: Roushan Raj
//for the homescreen of bootstrap
$(document).ready(function(){
        $(".stopwatch").hide();
        $(".musicplayer").hide();
        $(".messages").hide();
        $(".homescreen").show();
});

    $("#second").click(function(){
        $(".stopwatch").hide();
        $(".musicplayer").show();
        $(".messages").hide();
        $(".homescreen").hide();

    });
    $("#first").click(function(){
        $(".messages").show();
        $(".musicpalyer").hide();
        $(".stopwatch").hide();
        $(".homescreen").hide();

    });

    $("#third").click(function(){
        $(".musicplayer").hide();
        $(".stopwatch").show();
        $(".messages").hide();
        $(".homescreen").hide();

    });
    $("#dismiss").click(function(){
        $(".chatBaloon").hide();
    });

//for getting the date and time

  let today = new Date();
  let day = today.getDay();
  const daylist = ["Sun","Mon","Tue","Wed ","Thur","Fri","Sat"];
  console.log("Today is : " + daylist[day] + ".");
  document.getElementById("day").innerHTML= daylist[day]+", Sept"+" "+today.getDate();
  document.getElementById("time").innerHTML=today.getHours()+":"+today.getMinutes();
//   document.getElementById("date").innerHTML=today.getDate();




//code for stopwatch

class Stopwatch {
    constructor(display, results) {
        this.running = false;
        this.display = display;
        this.results = results;
        this.laps = [];
        this.reset();
        this.print(this.times);
    }
    
    reset() {
        this.times = [ 0, 0, 0 ];
    }
    
    start() {
        if (!this.time) this.time = performance.now();
        if (!this.running) {
            this.running = true;
            requestAnimationFrame(this.step.bind(this));
        }
    }
    
    lap() {
        let times = this.times;
        let li = document.createElement('li');
        li.innerText = this.format(times);
        this.results.appendChild(li);
    }
    
    stop() {
        this.running = false;
        this.time = null;
    }

    restart() {
        if (!this.time) this.time = performance.now();
        if (!this.running) {
            this.running = true;
            requestAnimationFrame(this.step.bind(this));
        }
        this.reset();
    }
    
    clear() {
        clearChildren(this.results);
    }
    
    step(timestamp) {
        if (!this.running) return;
        this.calculate(timestamp);
        this.time = timestamp;
        this.print();
        requestAnimationFrame(this.step.bind(this));
    }
    
    calculate(timestamp) {
        var diff = timestamp - this.time;
        // Hundredths of a second are 100 ms
        this.times[2] += diff / 10;
        // Seconds are 100 hundredths of a second
        if (this.times[2] >= 100) {
            this.times[1] += 1;
            this.times[2] -= 100;
        }
        // Minutes are 60 seconds
        if (this.times[1] >= 60) {
            this.times[0] += 1;
            this.times[1] -= 60;
        }
    }
    
    print() {
        this.display.innerText = this.format(this.times);
    }
    
    format(times) {
        return `\
${pad0(times[0], 2)}:\
${pad0(times[1], 2)}:\
${pad0(Math.floor(times[2]), 2)}`;
    }
}

function pad0(value, count) {
    var result = value.toString();
    for (; result.length < count; --count)
        result = '0' + result;
    return result;
}

function clearChildren(node) {
    while (node.lastChild)
        node.removeChild(node.lastChild);
}

let stopwatch = new Stopwatch(
    document.querySelector('.stopwatch'),
    document.querySelector('.results'));