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