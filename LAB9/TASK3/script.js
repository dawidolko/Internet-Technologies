// Dane, które będą użyte do generowania tabeli
const data = [
    ['Imię', 'Nazwisko', 'Wiek'],
    ['John', 'Doe', '30'],
    ['Alice', 'Smith', '28'],
    ['Bob', 'Brown', '35']
  ];
  
  // Funkcja generująca tabelę HTML z danymi
  function generateTable(tableData) {
    const table = document.createElement('table');
    const tableBody = document.createElement('tbody');
  
    tableData.forEach(rowData => {
      const row = document.createElement('tr');
  
      rowData.forEach(cellData => {
        const cell = document.createElement('td');
        cell.appendChild(document.createTextNode(cellData));
        row.appendChild(cell);
      });
  
      tableBody.appendChild(row);
    });
  
    table.appendChild(tableBody);
    document.body.appendChild(table);
  
    // Dodanie stylów do tabeli
    table.style.borderCollapse = 'collapse';
    Array.from(table.getElementsByTagName('td')).forEach(td => {
      td.style.border = '1px solid black';
    });
  }
  
  // Wywołanie funkcji z danymi
  generateTable(data);
  