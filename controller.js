canvas.addEventListener("click", function (e) {
  var x = e.clientX - canvas.offsetLeft;
  var y = e.clientY - canvas.offsetTop;

  console.log('x: ' + x + ' y: ' + y);
  var modelCoordinates = viewToModel(x, y);
  console.log('COL: ' + modelCoordinates.x + ' ROW: ' + modelCoordinates.y);
});
