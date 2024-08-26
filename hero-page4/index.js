var countDowndate = new Date("Apr 30, 2024 00:00:00").getTime();
setInterval(() => {
    var now = new Date().getTime();
    var distance = countDowndate - now;
    var day = Math.floor(distance/(1000*60*60*24));
    var hour = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
    var minute = Math.floor((distance % (1000*60*60))/(1000*60));
    var second = Math.floor((distance % (1000*60))/(1000));

    document.getElementById("days").innerHTML = day;
    document.getElementById("hours").innerHTML = hour;
    document.getElementById("minutes").innerHTML = minute;
    document.getElementById("seconds").innerHTML = second;

    if (distance < 0){
        clearInterval();
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }


}, 1000);
