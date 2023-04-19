let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0]
let int = null
const timeRef = document.querySelector('.timer')
const start = document.getElementById('start')
const stop = document.getElementById('stop')
const reset = document.getElementById('reset')

function displayTimer () {
  milliseconds += 10
  if (milliseconds === 1000) {
    milliseconds = 0
    seconds++
    if (seconds === 59) {
      seconds = 0
      minutes++
      if (minutes === 60) {
        minutes = 0
        hours++
      }
    }
  }
  const h = hours < 10 ? '0' + hours : hours
  const m = minutes < 10 ? '0' + minutes : minutes
  const s = seconds < 10 ? '0' + seconds : seconds
  const ms = milliseconds < 10 ? '00' + milliseconds : milliseconds < 100 ? '00' + milliseconds : milliseconds

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
stop.addEventListener('click', stopButton)

function resetButton () {
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0]
  timeRef.innerHTML = '00 : 00 : 00 : 000'
}
reset.addEventListener('click', resetButton)
