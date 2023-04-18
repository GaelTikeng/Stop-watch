let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0]
let int = null
let timeRef = document.querySelector('.timer')
let start = document.getElementById('start')
let stop = document.getElementById('stop')
let reset = document.getElementById('reset')

function displayTimer () {
  milliseconds += 10
  if (milliseconds === 1000) {
    milliseconds = 0
    seconds ++
    if (seconds === 59) {
      seconds = 0
      minutes ++
      if (minutes === 60) {
        minutes = 0
        hours ++
      }
    }
  }
  let h = hours < 10 ? "0" + hours : hours
  let m = minutes < 10 ? "0" + minutes : minutes
  let s = seconds < 10 ? "0" + seconds : seconds
  let ms =  milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "00" + milliseconds : milliseconds

  timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`
}

function startButton () {
    if(int !== null) {
    clearInterval(int)
  }
  int = setInterval(displayTimer, 10)
}
  start.addEventListener('click', startButton)

function stopButton () {
  clearInterval(int)
}

function resetButton () {
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0]
  timeRef.innerHTML = "00 : 00 : 00 : 000"
}
