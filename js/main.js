// console.log('hii');
'use strict'

const MINE = '💣'
const FLAG = '🚩'
const IMPTY = ''
var gBoard = {
    minesAroundCount: 4,
    isShown: true,
    isMine: false,
    isMarked: true
}

var gLevel = {
    SIZE: 4,
    MINES: 2
}

var gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}

function init() {
    gBoard = createBoard();
    renderBoard(gBoard)
    setMinesNegsCount()
    newMineRandom()
    newMineRandom()
}

function createBoard() {
    var board = [];
    for (var i = 0; i < gLevel.SIZE; i++) {
        board.push([])
        for (var j = 0; j < gLevel.SIZE; j++) {
            if (board[i][j] = gBoard.isShown) {
                board[i][j] = IMPTY
            } else {
                board[i][j] = gBoard.isMine
            }
        }
    }
    

        // board[0][2] = MINE;
        // board[1][1] = MINE;
        console.table(board);
    return board;
}

function newMineRandom() {
	// console.log(gBoard);
	var emptyCells = []
	for (var i = 0; i < gBoard.length; i++) {
		// console.log('i', i);
		for (var j = 0; j < gBoard[0].length; j++) {
			var cell = gBoard[i][j]
			// console.log('cell', cell)
			// if (gBoard.isShown === ''){
				emptyCells.push({ i: i, j: j })
            // }
            // console.log(emptyCells);
		}
	}
    var randIdx = getRandomInt(0, emptyCells.length)
    console.log(randIdx);
    var randEmptyCell = emptyCells[randIdx]
    console.log(randEmptyCell);
    gBoard[randEmptyCell.i][randEmptyCell.j] = MINE
    console.log(gBoard);
    renderBoard(gBoard) 
}

function renderBoard(gBoard) {
    var strHTML = '';
    for (var i = 0; i < gBoard.length; i++) {
        strHTML += '<tr>'
        for (var j = 0; j < gBoard[0].length; j++) {
            var cell = gBoard[i][j]
            var className = (cell) ? 'cellArea' : '';
            strHTML += `<td class="${className}" 
            data-i="${i}" data-j="${j}"
            onclick="cellClicked(this,${i},${j})">
            ${cell}</td>`
            
        }
        strHTML += '</tr>'

    }
    // console.log(strHTML)
    var elBoard = document.querySelector('.board');
    elBoard.innerHTML = strHTML

}




function setMinesNegsCount(cellI, cellJ, mat) {
    for (var i = cellI - 1; i <= cellI + 1; i++) {
        if (i < 0 || i >= mat.length) continue;
        for (var j = cellJ - 1; j <= cellJ + 1; j++) {
            if (i === cellI && j === cellJ) continue;
            if (j < 0 || j >= mat[i].length) continue;
            console.log('mat[i][j]', mat[i][j]);
            
            var cell = mat[i][j]
        }
    }
    // return neighborsCount;
}


function cellClicked(elCell, cellI, cellJ) {
    console.log(elCell);
   
    
   
    
    if (elCell.innerText === MINE) {
        gameOver()
    }
    if (elCell = false) {
            gBoard.isShown = false
        }else {
                gBoard.isShown = true
            }
            setMinesNegsCount(cellI, cellJ, gBoard)
            
            
}


function gameOver() {
    var elrestart = document.querySelector('.resat')
    elrestart.style.display = 'block';

}

function restart() {
    // init()
    location.reload()
}