const container = document.querySelector('#container');
for(let i = 1; i<= 256; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    container.appendChild(cell);   
}

function colorChange(e) {
    this.style.backgroundColor = 'black';
}

const cells = document.querySelectorAll('.cell');
cells.forEach(cell => cell.addEventListener('mouseover', colorChange));