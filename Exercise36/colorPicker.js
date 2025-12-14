const doorColor = document.querySelector("#doorColor");
const colorPreview = document.querySelector("#colorPreview");
const colorHistory = document.querySelector("#colorHistory");
const clearHistoryButton = document.querySelector("#clearHistoryButton");


doorColor.addEventListener("input", function () {
  const selectedColor = doorColor.value;
  colorPreview.style.backgroundColor = selectedColor;
  addColorToHistory(selectedColor);
});


function addColorToHistory(color) {
  const li = document.createElement("li");
  li.textContent = color;
  li.style.color = color;
  colorHistory.appendChild(li);
}


clearHistoryButton.addEventListener("click", function () {
  colorHistory.innerHTML = "";
});
