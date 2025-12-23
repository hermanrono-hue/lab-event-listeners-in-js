//logic

function changeBackgroundColor() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)

  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}

function resetBackgroundColor() {
  document.body.style.backgroundColor = ""
}

function displayKeyPress(event) {
  const keyPressDisplay = document.getElementById("keyPressDisplay")
  if (keyPressDisplay) {
    keyPressDisplay.textContent = `Key pressed: ${event.key}`
  }
}

function displayUserInput() {
  const textInput = document.getElementById("textInput")
  const textInputDisplay = document.getElementById("textInputDisplay")

  if (textInput && textInputDisplay) {
    textInputDisplay.textContent = `You typed: ${textInput.value}`
  }
}

//listeners
function setupEventListeners() {
  const changeColorButton = document.getElementById("changeColorButton")
  const resetColorButton = document.getElementById("resetColorButton")
  const textInput = document.getElementById("textInput")

  if (changeColorButton) {
    changeColorButton.addEventListener("click", changeBackgroundColor)
  }

  if (resetColorButton) {
    resetColorButton.addEventListener("dblclick", resetBackgroundColor)
  }

  if (textInput) {
    textInput.addEventListener("input", displayUserInput)
  }

  document.addEventListener("keydown", displayKeyPress)
}

//init browser
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", setupEventListeners)
}

//jest export

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners
}