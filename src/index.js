import "./styles.css";

const canvas = document.querySelector("#draw-area");
const context = canvas.getContext("2d");

canvas.addEventListener("mousemove", (event) => {
  // PC動作
  draw(event.layerX, event.layerY);
});

canvas.addEventListener("touchmove", (event) => {
  // android動作
  var touch = event.touches[0];
  var x = touch.pageX - canvas.offsetLeft;
  var y = touch.pageY - canvas.offsetTop;
  event.preventDefault();
  draw(x, y);
});

canvas.addEventListener("mousedown", () => {
  //PC動作
  context.beginPath();
  isDrag = true;
});

canvas.addEventListener("mouseup", () => {
  context.closePath();
  isDrag = false;
}); //ここまで
canvas.addEventListener("touchstart", () => {
  //android動作
  context.beginPath();
  isDrag = true;
});

canvas.addEventListener("touchend", () => {
  context.closePath();
  isDrag = false;
}); //ここまで

const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
});

const redButton = document.querySelector("#red-button");
redButton.addEventListener("click", () => {
  context.strokeStyle = "red"; // 赤色ボタン
});

const blueButton = document.querySelector("#blue-button");
blueButton.addEventListener("click", () => {
  context.strokeStyle = "blue"; // 青色ボタン
});

const greenButton = document.querySelector("#green-button");
greenButton.addEventListener("click", () => {
  context.strokeStyle = "green"; //　緑色ボタン
});

const blackButton = document.querySelector("#black-button");
blackButton.addEventListener("click", () => {
  context.strokeStyle = "black"; // 黒色ボタン
});
const whiteButton = document.querySelector("#white-button");
whiteButton.addEventListener("click", () => {
  context.strokeStyle = "white"; //消しゴムボタン　白色を塗っているのみ
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
