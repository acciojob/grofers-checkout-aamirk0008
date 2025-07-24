const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  const priceElements = document.querySelectorAll('.price');
            
            // Initialize total sum
            let totalPrice = 0;
            
            // Loop through each price element and add to total
            priceElements.forEach(priceElement => {
                // Convert text content to number and add to total
                const price = parseFloat(priceElement.textContent) || 0;
                totalPrice += price;
            });
            
            // Get the table element
            const table = document.getElementById('groceryTable');
            
            // Check if total row already exists to avoid duplicates
            const existingTotalRow = document.querySelector('.total-row');
            if (existingTotalRow) {
                existingTotalRow.remove();
            }
            
            // Create new row for total using Document.createElement()
            const totalRow = document.createElement('tr');
            totalRow.className = 'total-row';
            
            // Create cell that spans both columns with id="ans" for the test
            const totalCell = document.createElement('td');
            totalCell.colSpan = 2;
            totalCell.id = "ans";
            totalCell.textContent = totalPrice; // Just the number as expected by test
            totalCell.style.textAlign = 'center';
            
            // Add cell to row
            totalRow.appendChild(totalCell);
            
            // Add row to table
            table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);

