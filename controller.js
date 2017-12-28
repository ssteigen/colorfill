document.getElementById("canvas").addEventListener("click", function (e) {
  var x = e.clientX + e.offsetX;
  var y = e.clientY + e.offsetY;

  console.log('x: ' + x + ' y: ' + y);
  var modelCoordinates = viewToModel(x, y);
  console.log('COL: ' + modelCoordinates.x + ' ROW: ' + modelCoordinates.y);
});
