//Selects the grid container
const container = document.querySelector('#container');

//Uses a loop to create the initial grid
for(let i = 1; i<= 256; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    container.appendChild(cell);   
}

//Function to change the color of cells
function colorChange(e) {
    this.style.backgroundColor = 'black';
}

//Target all cells and apply event listener
const cells = document.querySelectorAll('.cell');
cells.forEach(cell => cell.addEventListener('mouseover', colorChange));