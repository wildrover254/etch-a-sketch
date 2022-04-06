//Selects the grid container
const container = document.querySelector('#container');

function makeCells(num) {
    for(let i = 1; i<= num*num; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);   
    }
}

//Target all cells and apply event listener
function setCells() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.addEventListener('mouseover', colorChange));
}

//Function to change the color of cells
function colorChange(e) {
    this.classList.add('hovered')
}

//Uses a loop to create the initial grid
function makeGrid(num) {
    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`
    container.style.gridTemplateRows = `repeat(${num}, 1fr)`
    makeCells(num);
    setCells();
};

function resetGrid() {
    let num = prompt("Please enter a number of rows and columns for the grid. (Cannot exceed 100 columns)");
    if(num > 100) {
        alert('The grid cannot exceed 100 columns, defaulting to 100 x 100.');
        num = 100;
        const cells = document.querySelectorAll('.cell');
        makeGrid(num);
        cells.forEach(cell => cell.classList.remove('hovered'));
    } else {
        const cells = document.querySelectorAll('.cell');
        makeGrid(num);
        cells.forEach(cell => cell.classList.remove('hovered'));
    }
}

makeGrid(25);