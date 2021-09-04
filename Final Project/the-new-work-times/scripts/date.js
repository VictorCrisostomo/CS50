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
function formatDate() {
    const date = new Date()

    const year = date.getFullYear()
    let month = date.getMonth()
    let dayOfWeek = date.getDay()
    let day = date.getDate()

    date.innerHTML `${dayOfWeek} | ${month} ${day}, ${year}`
}
console.log(formatDate())
const date = window.document.getElementById('date');

function time () {
    const data = new Date()
    
    let hour = window.document.getElementById('hour');
    let salutation = window.document.getElementById('salutation');

    let hours = data.getHours()
    let min = data.getMinutes()

    if (hours < 10) {
        hours = `0${hours}`
    }
    if (min < 10) {
        min = `0${min}`
    }
    
    hour.innerHTML = `${hours}:${min}`
    if (hours >= 0 && hours < 12) {
        salutation.innerHTML = "Good Morning"
    } else if (hours >= 12 && hours <= 18) {
        salutation.innerHTML = "Good afternoon"
    } else {
        salutation.innerHTML = "Good Night"
    }
}
const temp = setInterval(time,1000);