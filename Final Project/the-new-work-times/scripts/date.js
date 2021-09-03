const date = window.document.getElementById('date');

function time () {
    const data = new Date()
    
    const hour = window.document.getElementById('hour');
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
        salutation = "Good Morning"
    } else if (hours >= 12 && hours < 18) {
        salutation = "Good afternoon"
    } else {
        salutation = "Good Night"
    }
}

const temp = setInterval(time,1000);