const generator = () => {
  const numRows = parseInt(document.querySelector('#rows').value);
  const numCols = parseInt(document.querySelector('#cols').value);
  const numMines = parseInt(document.querySelector('#mines').value);
  let board = new Array(numRows);
  for (let rows = 0; rows < numRows; rows++) {
    board[rows] = new Array(numCols);
  };

  for (let i = 0; i < numMines; i++) {
    let set = 0;
    while (set === 0) {
      const row = Math.floor(Math.random() * numRows);
      const col = Math.floor(Math.random() * numCols);
      if (board[row][col] == null) {
        board[row][col] = 'X';
        set = 1;
      }
    }
  }

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      let count = 0;
      if (i > 0 && j > 0 && board[i - 1][j - 1] === 'X') {
        count++;
      }
      if (j > 0 && board[i][j - 1] === 'X') {
        count++;
      }
      if (i < (numRows - 1) && j > 0 && board[i + 1][j - 1] === 'X') {
        count++;
      }
      if (i > 0 && board[i - 1][j] === 'X') {
        count++;
      }
      if (i < (numRows - 1) && board[i + 1][j] === 'X') {
        count++;
      }
      if (i > 0 && j < (numCols - 1) && board[i - 1][j + 1] === 'X') {
        count++;
      }
      if (j < (numCols - 1) && board[i][j + 1] === 'X') {
        count++;
      }
      if (i < (numRows - 1) && j < (numCols - 1) && board[i + 1][j + 1] === 'X') {
        count++;
      }
      if (board[i][j] == null) {
        board[i][j] = count;
      }
    }    
  }

  console.log(board);
};

// generator(15, 15, 30);