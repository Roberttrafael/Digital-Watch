const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

const watch = setInterval(function time() {
    let dateToday = new Date()
    let hr = dateToday.getHours()
    let min = dateToday.getMinutes()
    let s = dateToday.getSeconds()

    if (s < 10) s = '0' + s
    if (min < 10) min = '0' + min
    if (hr < 10) hr = '0' + hr

    hours.textContent = hr
    minutes.textContent = min
    seconds.textContent = s
})