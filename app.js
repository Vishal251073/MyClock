setInterval(()=>{
var time = new Date();
var seconds = time.getUTCSeconds();
var hour = time.getUTCHours();
var min = time.getUTCMinutes();
var hr_rotation = 30*hour + min/2;
var min_rotation = 6*min;
var sec_rotation = 6*seconds;

document.querySelector('.hour').style.transform = `rotate(${hr_rotation}deg)`;
document.querySelector('.minutes').style.transform = `rotate(${min_rotation}deg)`;
document.querySelector('.seconds').style.transform = `rotate(${sec_rotation}deg)`;

},1000);


///Digital Clock

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();