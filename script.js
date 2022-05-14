var btnStart  
var btnPause 
var btnReset 
var divTempo
var tempo = 0
var timerId

init()

function init() {
  btnStart = document.querySelector("#start")
  btnStart.onclick = start
  btnPause = document.querySelector("#pause")
  btnPause.onclick = pause
  btnPause.disabled = true
  btnReset = document.querySelector("#reset")
  btnReset.onclick = reset
  btnReset.disabled = true
  divTempo = document.querySelector("#tempo")
}

function update() {
  tempo = tempo + 0.1
  divTempo.innerHTML = tempo.toFixed(1) + "s"
}

function start() {
  timerId = setInterval(update, 100)
  btnStart.disabled = true
  btnPause.disabled = false
  btnReset.disabled = false
}

function pause() {
  clearInterval(timerId)
  btnPause.disabled = true
  btnStart.disabled = false
  
}

function reset() {
  clearInterval(timerId)
  btnStart.disabled = false
  btnPause.disabled = true
  btnReset.disabled = true
  tempo = 0
  divTempo.innerHTML = tempo.toFixed(1) + "s"
}
