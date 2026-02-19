const redButton = document.getElementById("redBtn");
const greenButton = document.getElementById("greenBtn");
const blueButton = document.getElementById("blueBtn");
const resetButton = document.getElementById("resetBtn");
const applyColorButton = document.getElementById("applyColorBtn");
const colorInput = document.getElementById("colorInput");
const colorCodeSpan = document.getElementById("colorCode");
function changeColor(color) {
  document.body.style.backgroundColor = color;
  colorCodeSpan.textContent = color;
  disableButtons();
}
function disableButtons() {
  redButton.disabled = true;
  greenButton.disabled = true;
  blueButton.disabled = true;
  applyColorButton.disabled = true;
}
function enableButtons() {
  redButton.disabled = false;
  greenButton.disabled = false;
  blueButton.disabled = false;
  applyColorButton.disabled = false;
}
redButton.addEventListener("click", () => changeColor("red"));
greenButton.addEventListener("click", () => changeColor("green"));
blueButton.addEventListener("click", () => changeColor("blue"));
resetButton.addEventListener("click", () => {
  document.body.style.backgroundColor = "white";
  colorCodeSpan.textContent = "White";
  enableButtons();
});
applyColorButton.addEventListener("click", () => {
  const customColor = colorInput.value.trim();
  if (customColor) {
    document.body.style.backgroundColor = customColor;
    colorCodeSpan.textContent = customColor;
    disableButtons();
  }
});