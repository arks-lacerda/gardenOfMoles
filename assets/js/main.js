const gameContainer = document.querySelector('#game-container')
const timeEl = document.querySelector('#time')
const scoreEl = document.querySelector('#score')
const holeEl = document.querySelectorAll('.hole')
let seconds = 0
let lastHole
let score = 0

function startGame() {
  setInterval(increaseTime, 1000)
  setInterval(randomHole, 1000)
}

function randomHole() {
  const idx = Math.floor(Math.random() * holeEl.length)
  const hole = holeEl[idx]
  if (hole === lastHole) {
    return randomHole()
  }
  lastHole = hole
  return hole
}

function increaseTime() {
  const hole = randomHole()
  if (hole.classList.contains('moles')) {
    hole.classList.remove('moles')
  } else {
    hole.classList.add('moles')
  }
  let m = Math.floor(seconds / 60)
  let s = seconds % 60
  m = m < 10 ? `0${m}` : m
  s = s < 10 ? `0${s}` : s
  timeEl.innerHTML = `Time: ${m}:${s}`
  seconds++
}

gameContainer.addEventListener('click', function (event) {
  if (event.target.classList.contains('moles')) {
    event.target.classList.remove('moles')
    score++
    scoreEl.textContent = `Score: ${score}`
  }
})

startGame()
