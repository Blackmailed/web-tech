document.getElementById("btn_task2").addEventListener("click", () => {
    let today = new Date();
    let year = today.getFullYear();
    let summerVacationStart = new Date(year, 6, 3);
    if (today > summerVacationStart) 
    {
        summerVacationStart = new Date(year + 1, 6, 3);
    }
    let timeDiff = summerVacationStart.getTime() - today.getTime();
    let daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));

    let result = document.getElementById("result days left");
    result.textContent = `До каникул осталось ${daysLeft} дней.`
})