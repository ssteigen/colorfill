var W = 400;
var H = 400;

var BLOCK_H = H / ROWS;
var BLOCK_W = W / COLS;

function viewToModel(x, y) {
  return {
    x: Math.floor(x / BLOCK_W),
    y: Math.floor(y / BLOCK_H)
  }
}

function modelToView(x, y) {
  return {
    x: x * BLOCK_W,
    y: y * BLOCK_H
  }
}
