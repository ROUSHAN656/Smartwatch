// function enableScrollview() {
//     let elmnt = document.getElementsByClassName[0]("content");
//     elmnt.scrollIntoView();
//   }


    $("#second").click(function(){
        $(".stopwatch").hide();
        $(".musicplayer").show();
        $(".messages").hide();

    });
    $("#first").click(function(){
        $(".messages").show();
        $(".musicpalyer").hide();
        $(".stopwatch").hide();

    });

    $("#third").click(function(){
        $(".musicplayer").hide();
        $(".stopwatch").show();
        $(".messages").hide();

    });

  let today = new Date();
  let day = today.getDay();
  let daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  console.log("Today is : " + daylist[day] + ".");
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
