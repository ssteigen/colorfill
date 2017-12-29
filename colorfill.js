var ROWS = 6;
var COLS = 6;
var NUM_COLORS = 3;

var colors = [];

var board = [];
var turnCount = 0;

function init() {
  for (var x = 0; x < COLS; x++) {
    board[x] = [];
    for (var y = 0; y < ROWS; y++) {
      board[x][y] = Math.floor(Math.random() * NUM_COLORS);
    }
  }

  for (var i = 0; i < NUM_COLORS; i++) {
    colors.push('#' + Math.floor(Math.random()*16777215).toString(16));
  }

  console.log(colors);
}

function inBounds(x, y) {
  return (x >= 0 && y >= 0 && x < COLS && y < ROWS);
}

function clickBlock(x, y) {
  // Don't do anything the new color is the same as the old color.
  if (board[0][0] === board[x][y]) {
    return;
  }

  fillBlock(0, 0, board[x][y]);
  turnCount++;
}

function fillBlock(x, y, newValue) {
  var oldValue = board[x][y];

  // If the block already matches, do nothing.
  if (oldValue === newValue) {
    return
  }

  // Fill it.
  board[x][y] = newValue;

  // Flood fill
  for (var dx = -1; dx <= 1; dx++) {
    for (var dy = -1; dy <= 1; dy++) {
      var xx = x + dx;
      var yy = y + dy;

      if (inBounds(xx, yy)) {
        if (board[xx][yy] === oldValue) {
          fillBlock(xx, yy, newValue);
        }
      }
    }
  }
}

init();
