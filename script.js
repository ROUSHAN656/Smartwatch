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