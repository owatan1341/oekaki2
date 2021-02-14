import "./styles.css";

const canvas = document.querySelector("#draw-area");
const context = canvas.getContext("2d");

canvas.addEventListener("mousemove", (event) => {
  draw(event.layerX, event.layerY);
});

canvas.addEventListener("touchmove", (event) => {
  var touch = event.touches[0]; // ここから追記
  var x = touch.pageX - canvas.offsetLeft;
  var y = touch.pageY - canvas.offsetTop;
  event.preventDefault();
  draw(x, y); // ここまで追記
});

canvas.addEventListener("mousedown", () => {
  context.beginPath();
  isDrag = true;
});

canvas.addEventListener("mouseup", () => {
  context.closePath();
  isDrag = false;
});

canvas.addEventListener("touchstart", () => {
  context.beginPath();
  isDrag = true;
});

canvas.addEventListener("touchend", () => {
  context.closePath();
  isDrag = false;
});

const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
});

const redButton = document.querySelector("#red-button");
redButton.addEventListener("click", () => {
  context.strokeStyle = "red";
});

const blueButton = document.querySelector("#blue-button");
blueButton.addEventListener("click", () => {
  context.strokeStyle = "blue";
});

const greenButton = document.querySelector("#green-button");
greenButton.addEventListener("click", () => {
  context.strokeStyle = "green";
});

const blackButton = document.querySelector("#black-button");
blackButton.addEventListener("click", () => {
  context.strokeStyle = "black";
});
const whiteButton = document.querySelector("#white-button");
whiteButton.addEventListener("click", () => {
  context.strokeStyle = "white";
});

let isDrag = false;

function draw(x, y) {
  if (!isDrag) {
    return;
  }
  context.lineWidth = 5;
  context.lineTo(x, y);
  context.stroke();
}
