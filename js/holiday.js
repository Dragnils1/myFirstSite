let input = document.getElementById('time');
//buttons
let buttonSet = document.getElementById('buttonSet');
//icons
let iconTimer = document.getElementById('iconTimer');
let iconAlarm = document.getElementById('iconAlarm');
let iconStopwatch = document.getElementById('iconStopwatch');
let iconHoliday = document.getElementById('iconHoliday');
//oters
let alarm1 = document.getElementById('alarm1');
let stopwatch1 = document.getElementById('alarm1');
let timer1 = document.getElementById('alarm1');
let holidayPos = document.getElementById('holidayPos');
let html = document.getElementById('html');


iconTimer.addEventListener('click', function() {
    html.className = 'timer-mode';
    timer1.classList.add('accent-4')
})
iconAlarm.addEventListener('click', function() {
    html.className = 'alarm-mode';
    alarm1.classList.add('accent-4')
})
iconStopwatch.addEventListener('click', function() {
    html.className = 'stopwatch-mode';
    stopwatch1.classList.add('accent-4')
})
$("#iconTheme").on('click', function() {
    $("body").toggleClass('blackBack')
    $(".about").toggleClass('blackTheme');
})
iconHoliday.addEventListener('click', function() {
    html.scrollTo({
        top: holidayPos.offsetTop,
        behavior: "smooth"
    })
})
buttonSet.addEventListener('click', function() {
    holiday()
})

let newYear = document.createElement('button');
let Easter = document.createElement('button');
let victoryDay = document.createElement('button');
let Summer = document.createElement('button');
let vlentineDay = document.createElement('button');
let womenDay = document.createElement('button');
holidayBat(newYear, 'Jan 01, 2022 00:00:00', 'Новый год');
holidayBat(Easter, 'Apr 04, 2021 00:00:00', 'Пасха');
holidayBat(victoryDay, 'May 09, 2021 00:00:00', 'День Победы');
holidayBat(Summer, 'Jun 01, 2021 00:00:00', 'Лето!');
holidayBat(vlentineDay, 'Sep 01, 2021 00:00:00', 'День Знаний');
holidayBat(womenDay, 'Mar 08, 2021 00:00:00', 'Женский день');


function holidayBat(elem, value, text) {
    elem.value = String(value);
    elem.classList.add("buttons")
    elem.innerHTML = text;
    elem.addEventListener('click', () => {
        input.value = elem.value;
        holiday()
    });

    holidayPos.before(elem);
}

// timer  

input.value = "Jun 01, 2021 00:00:00";

function holiday() {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
    countDown = new Date(input.value).getTime()

    let x = setInterval(function() {

        let now = new Date().getTime(),
            distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        let headline = document.getElementById("headline"),
            countdown = document.getElementById("countdown"),
            content = document.getElementById("content");

        if (distance < 0) {

            headline.innerHTML = 'Событие завершено!';
            countdown.style.display = "none";
            content.style.display = "block";

            clearInterval(x);
        } else {
            headline.innerHTML = 'Обратный отсчет до события:';
            countdown.style.display = "block";
            content.style.display = "none";
        }
        //seconds
    }, 0);

};
holiday();