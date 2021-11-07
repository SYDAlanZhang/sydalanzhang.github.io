
let countDownDate = new Date("Sep 11, 2021 10:00:00").getTime()
let firstMeetDate = new Date("Nov 05, 2021 19:10:00").getTime()
let x = setInterval(function() {
  let now = new Date().getTime()

  let distance = now - countDownDate
  let days = Math.floor(distance / (1000 * 60 * 60 * 24))
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  let seconds = Math.floor((distance % (1000 * 60)) / 1000)

  let meetDistance = now - firstMeetDate
  let meetDays = Math.floor(meetDistance / (1000 * 60 * 60 * 24))
  let meetHours = Math.floor((meetDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  let meetMinutes = Math.floor((meetDistance % (1000 * 60 * 60)) / (1000 * 60))
  let meetSeconds = Math.floor((meetDistance % (1000 * 60)) / 1000)
  document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`
  document.getElementById("meetTimer").innerHTML = `${meetDays}d ${meetHours}h ${meetMinutes}m ${meetSeconds}s`
}, 1000)