var W = 400;
var H = 500;

var INFO_H = 100;
var INFO_W = 400

var BLOCK_H = (H - INFO_H) / ROWS;
var BLOCK_W = W / COLS;

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// var colors = ['LightSlateGray', 'LightSteelBlue', 'LightGray'];

function modelToView(x, y) {
  return {
    x: x * BLOCK_W,
    y: y * BLOCK_H
  }
}

function viewToModel(x, y) {
  return {
    x: Math.floor(x / BLOCK_W),
    y: Math.floor(y / BLOCK_H)
  }
}

function renderInfo() {
  var viewCoordinates = modelToView(COLS, ROWS);

  ctx.fillStyle = "#eee";
  ctx.strokeStyle = "#333";
  ctx.fillRect(0, viewCoordinates.y, INFO_W, INFO_H);
  ctx.strokeRect(0, viewCoordinates.y, INFO_W, INFO_H);

  ctx.font = '20px Arial';
  ctx.fillStyle = '#333';
  var text = '# of Clicks: ' + turnCount;
  var textSize = ctx.measureText(text);
  var textSizeM = ctx.measureText('M');
  ctx.fillText(
    text,
    0 + INFO_W / 2 - textSize.width / 2,
    viewCoordinates.y + INFO_H / 2 + textSizeM.width / 2
  );
}

function renderBlock(x, y) {
  var viewCoordinates = modelToView(x, y);

  ctx.fillStyle = colors[board[x][y]];
  ctx.strokeStyle = '#333';
  ctx.fillRect(viewCoordinates.x, viewCoordinates.y, BLOCK_W, BLOCK_H);
  ctx.strokeRect(viewCoordinates.x, viewCoordinates.y, BLOCK_W, BLOCK_H);

  renderNumber(x, y);
}

function renderNumber(x, y) {
  var viewCoordinates = modelToView(x, y);

  ctx.fillStyle = "#333";
  ctx.font = '20px Arial';
  var textSize = ctx.measureText(board[x][y]);
  var textSizeM = ctx.measureText('M');
  ctx.fillText(
    board[x][y],
    viewCoordinates.x + BLOCK_W / 2 - textSize.width / 2,
    viewCoordinates.y + BLOCK_H / 2 + textSizeM.width / 2
  );
}

function render() {
  for (var x = 0; x < COLS; x++) {
    for (var y = 0; y < ROWS; y++) {
      renderBlock(x, y);
    }
  }

  renderInfo();
}

render();
