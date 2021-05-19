"use strict";

var generator = function generator(numRows, numCols, numMines) {
  var board = new Array(numRows);

  for (var rows = 0; rows < numRows; rows++) {
    board[rows] = new Array(numCols);
  }

  ;

  for (var i = 0; i < numMines; i++) {
    var set = 0;

    while (set === 0) {
      var row = Math.floor(Math.random() * numRows);
      var col = Math.floor(Math.random() * numCols);

      if (board[row][col] == null) {
        board[row][col] = 'X';
        set = 1;
      }
    }
  }

  for (var _i = 0; _i < numRows; _i++) {
    for (var j = 0; j < numCols; j++) {
      var count = 0;

      if (_i > 0 && j > 0 && board[_i - 1][j - 1] === 'X') {
        count++;
      }

      if (j > 0 && board[_i][j - 1] === 'X') {
        count++;
      }

      if (_i < numRows - 1 && j > 0 && board[_i + 1][j - 1] === 'X') {
        count++;
      }

      if (_i > 0 && board[_i - 1][j] === 'X') {
        count++;
      }

      if (_i < numRows - 1 && board[_i + 1][j] === 'X') {
        count++;
      }

      if (_i > 0 && j < numCols - 1 && board[_i - 1][j + 1] === 'X') {
        count++;
      }

      if (j < numCols - 1 && board[_i][j + 1] === 'X') {
        count++;
      }

      if (_i < numRows - 1 && j < numCols - 1 && board[_i + 1][j + 1] === 'X') {
        count++;
      }

      if (board[_i][j] == null) {
        board[_i][j] = count;
      }
    }
  }

  console.log(board);
};

generator(15, 15, 30);