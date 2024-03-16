let count = 0;
let sec = 0;
let min = 0;
let hr = 0;
let timer = false;

function stop() {
    timer = false;
}

function start() {
    timer = true;
    stopwatch();
}

function reset() {
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0; 
    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";
}

function stopwatch() {
    if (timer == true) {
        count = count + 1;  

        if (count == 100) {
            sec = sec + 1;
            count = 0;
        }

        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }

        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        let hrString = hr < 10 ? "0" + hr : hr;
        let minString = min < 10 ? "0" + min : min;
        let secString = sec < 10 ? "0" + sec : sec;
        let countString = count < 10 ? "0" + count : count;

        document.getElementById("hr").innerHTML = hrString;
        document.getElementById("min").innerHTML = minString;
        document.getElementById("sec").innerHTML = secString;
        document.getElementById("count").innerHTML = countString;

        setTimeout(stopwatch, 10);
    }
}
