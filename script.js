function insert_Row() {
    //Write your code here
	const table = document.getElementById('sampleTable');
    
    // Create a new row
    const newRow = table.insertRow(0); // Inserts a new row at the top (index 0)
    
    // Create two new cells
    const cell1 = newRow.insertCell(0); // Left cell
    const cell2 = newRow.insertCell(1); // Right cell
    
    // Set the text content for the cells
    cell1.textContent = 'New Cell1';
    cell2.textContent = 'New Cell2';
  
  
}
