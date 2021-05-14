
let countDownDate = new Date("May 14, 2021 10:00:00").getTime()
let countDownDate2 = new Date("Nov 14, 2021 10:00:00").getTime()
let x = setInterval(function() {
  let now = new Date().getTime()
  let distance = now - countDownDate
  let days = Math.floor(distance / (1000 * 60 * 60 * 24))
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  let seconds = Math.floor((distance % (1000 * 60)) / 1000)
  document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s "
  let distance2 = countDownDate2 - now
  let days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24))
  let hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  let minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60))
  let seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000)
  document.getElementById("timer2").innerHTML = days2 + "d " + hours2 + "h " + minutes2 + "m " + seconds2 + "s "
  if (distance2 < 0) {
    clearInterval(x)
    document.getElementById("timer2").innerHTML = "EXPIRED"
  }
}, 1000)