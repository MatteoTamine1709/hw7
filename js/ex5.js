const output = document.getElementById('output');
const table = document.createElement('table');

for (let i = 1; i <= 12; i++) {
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    cell.textContent = i;
    row.appendChild(cell);
    table.appendChild(row);
}

output.appendChild(table);