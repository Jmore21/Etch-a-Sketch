
// Creating the Grid

for (i=0; i < 16; i++ ) {
    let row = document.createElement('div');
    row.className = "rows";
    document.getElementById('container').appendChild(row);

    for (j=0; j < 16; j++) {
       let column = document.createElement('div');
        column.className = 'columns';
        document.getElementById('container').appendChild(column);
    }

}

// Changing the color of squares

let squares = document.querySelectorAll('.columns');

let drawColor = (e) => {
    e.target.style.backgroundColor = 'black';
}

squares.forEach(columns => columns.addEventListener("mouseenter", drawColor));

// Resetting the grid

let reset = document.getElementById('reset'); 

reset.onclick = function() {
    squares.forEach(columns => columns.style.backgroundColor = "white");
}


//Changing grid size

let gridChange = document.getElementById('gridChange');

gridChange.onclick = function() {
    let length = window.prompt('Enter a valve between 1 and 100');
    
// Removing old grid

    let children = document.querySelectorAll('.rows');
    children.forEach((child) => container.removeChild(child));

    let columnChild = document.querySelectorAll('.columns');
    columnChild.forEach((child) => container.removeChild(child));

// Creating new grid size 
    for (i=0; i < length; i++ ) {
        let row = document.createElement('div');
        row.className = "rows";
        document.getElementById('container').appendChild(row);
    
        for (j=0; j < length; j++) {
           let column = document.createElement('div');
            column.className = 'columns';
            document.getElementById('container').appendChild(column);
        }
    
    }
    
}
