canvas.addEventListener("click", function (e) {
  var x = e.clientX - canvas.offsetLeft;
  var y = e.clientY - canvas.offsetTop;

  var modelCoordinates = viewToModel(x, y);

  if (inBounds(modelCoordinates.x, modelCoordinates.y)) {
    clickBlock(modelCoordinates.x, modelCoordinates.y);
  }

  render();
});
