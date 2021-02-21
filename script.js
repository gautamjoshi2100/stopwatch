const timer = document.getElementById("time");
let cur_min = 0, cur_sec = 0, cur_hour = 0;
function update() {
    cur_sec++;
    if (cur_sec == 60) {
        cur_min++;
        cur_sec = 0;
    }
    if (cur_min == 60) {
        cur_min = 0;
        cur_hour++; 
    }
    let mm = String(cur_min);
    if (mm.length == 1) {
        mm = '0' + mm;
    }
    let ss = String(cur_sec);
    if (ss.length == 1) {
        ss = '0' + ss;
    }
    let hh = String(cur_hour);
    if (hh.length == 1) {
        hh = '0' + hh;
    }
    let cur_time = hh + ":" + mm + ":" + ss;
    timer.innerHTML = cur_time;
}
const start_btn = document.getElementById("start");
let x;
let  started = 0;
start_btn.addEventListener('click', function() {
    x = setInterval(update, 1000);
    started = 1;
});
const stop_btn = document.getElementById("stop");
const reset_btn = document.getElementById("reset");
stop_btn.addEventListener('click', function() {
    clearInterval(x);
})
reset_btn.addEventListener('click', function() {
    timer.innerHTML = "00:00:00";
    cur_min = 0, cur_sec = 0, cur_hour = 0;
    clearInterval(x);
})
