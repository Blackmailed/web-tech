function fulltime() {
    var time = new Date();
    var clock = 
       (time.getHours() > 9 ? time.getHours() : "0" + time.getHours())
       + ":" + (time.getMinutes() > 9 ? time.getMinutes() : "0" + time.getMinutes())
       + ":" + (time.getSeconds() > 9 ? time.getSeconds() : "0" + time.getSeconds());
    var date = time.getDate() + "." + time.getMonth() + 1 + "." + time.getFullYear();
    document.getElementById("clock").textContent = "Текущее время: " + clock;
    document.getElementById("date").textContent = "Дата: " + date;
    setTimeout('fulltime()', 1000);
 }
fulltime()