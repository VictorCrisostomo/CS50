const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]
    //CONFIG OF DATE
    const date = new Date()
    const year = date.getFullYear()
    let month = date.getMonth()
    let dayOfWeek = date.getDay()
    let day = date.getDate()

    //DAYS OF WEEK
    if (dayOfWeek == 0) {dayOfWeek = days[0]}
    if (dayOfWeek == 1) {dayOfWeek = days[1]}
    if (dayOfWeek == 2) {dayOfWeek = days[2]}
    if (dayOfWeek == 3) {dayOfWeek = days[3]}
    if (dayOfWeek == 4) {dayOfWeek = days[4]}
    if (dayOfWeek == 5) {dayOfWeek = days[5]}
    if (dayOfWeek == 6) {dayOfWeek = days[6]}

    //MONTHS
    if (month == 0) {month = months[0]}
    if (month == 1) {month = months[1]}
    if (month == 2) {month = months[2]}
    if (month == 3) {month = months[3]}
    if (month == 4) {month = months[4]}
    if (month == 5) {month = months[5]}
    if (month == 6) {month = months[6]}
    if (month == 7) {month = months[7]}
    if (month == 8) {month = months[8]}
    if (month == 9) {month = months[9]}
    if (month == 10) {month = months[10]}
    if (month == 11) {month = months[11]}

    let data = `${dayOfWeek} | ${month} ${day}, ${year}`
    document.getElementById('date').innerHTML = data;


//CONFIG OF TIME
function time() {
    const data = new Date()
    let hours = data.getHours();
    let min = data.getMinutes();

    if (hours < 10) {
        hours = `0${hours}`
    }
    if (min < 10) {
        min = `0${min}`
    }
    const time = `${hours}:${min}`;

    document.getElementById('hour').innerHTML = time;

    let salutation = document.getElementById('salutation');

    if (hours >= 4 && hours < 12) {
        salutation.innerHTML = "Good Morning"
    } else if (hours >= 12 && hours <= 18) {
        salutation.innerHTML = "Good afternoon"
    } else {
        salutation.innerHTML = "Good Night"
    }
}
const temp = setInterval(time,1000);