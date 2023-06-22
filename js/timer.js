var s = 0;
var m = 0;
var h = 0;

function tick() {
    s++;
    if (s >= 60) {
        s = 0;
        m++;
        if (m >= 60) {
            m = 0;
            h++;
        }
    }
}

function add() {
    tick();
    document.getElementById("timer").textContent =
        "Вы находитесь на этой страничке уже: "
        + (h > 9 ? h : "0" + h)
        + ":" + (m > 9 ? m : "0" + m)
        + ":" + (s > 9 ? s : "0" + s);
    timer();
}

function timer() {
    setTimeout(add, 1000);
}
add()