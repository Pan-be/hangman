import Hangman from './hangman'
import getPuzzle from './request'

const puzzleEl = document.querySelector('#puzzle')
const guessEl = document.querySelector('#guesses')
let word1

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    word1.makeGuess(guess)
    render()
})

const render = () => {
    puzzleEl.innerHTML = ''
    guessEl.textContent = word1.statusMessage
    word1.puzzle.split('').forEach(letter => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    });
}

const startGame = async() => {
    const puzzle = await getPuzzle('1')
    word1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()
