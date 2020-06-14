const UiSelectors = {
  pencilColorSelector: "pencil-color",
  canvasColorSelector: "background-color",
  pencilSizeSelector: "pencil-size",
  clearBtnSelector: "[data-clear-btn]",
  saveBtnSelector: "[data-save-btn]",
};

const pencilColor = document.getElementById(UiSelectors.pencilColorSelector);
const canvasColor = document.getElementById(UiSelectors.canvasColorSelector);
const pencilSize = document.getElementById(UiSelectors.pencilSizeSelector);
const clearBtn = document.querySelector(UiSelectors.clearBtnSelector);
const saveBtn = document.querySelector(UiSelectors.saveBtnSelector);

function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
