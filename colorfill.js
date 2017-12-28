var ROWS = 6;
var COLS = 6;
var NUM_COLORS = 3;

var board = [];

function init() {
  for (var x = 0; x < COLS; x++) {
    board[x] = [];
    for (var y = 0; y < ROWS; y++) {
      board[x][y] = Math.floor(Math.random() * NUM_COLORS);
    }
  }

  console.log(board);
}

init();
