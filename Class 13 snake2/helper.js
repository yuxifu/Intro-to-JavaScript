// Clear the interval and display Game Over text
var gameOver = function () {
  clearInterval(intervalId);
  ctx.font = "40px Comic Sans MS";
  ctx.fillStyle = "Black";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("Game Over", width / 2, height / 2);
};
