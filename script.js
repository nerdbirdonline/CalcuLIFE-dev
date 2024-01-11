function calculateExpense() {
    // Get input values
const name1 = document.getElementById('name1').value;
const salary1 = parseFloat(document.getElementById('salary1').value);
const percentage1 = parseFloat(document.getElementById('percentage1').value);

const name2 = document.getElementById('name2').value;
const salary2 = parseFloat(document.getElementById('salary2').value);
const percentage2 = parseFloat(document.getElementById('percentage2').value);

const billInputs = document.querySelectorAll('.billName');
const billAmounts = document.querySelectorAll('.billAmount');

// Validate input
if (isNaN(salary1) || isNaN(percentage1) || isNaN(salary2) || isNaN(percentage2)) {
   alert('Please enter valid numbers for salaries and percentages');
   return;
}

let totalBills = 0;

// Calculate total of all bills
for (let i = 0; i < billAmounts.length; i++) {
   const billAmount = parseFloat(billAmounts[i].value);
   if (isNaN(billAmount)) {
       alert('Please enter valid numbers for bill amounts');
       return;
   }
   totalBills += billAmount;
}

// Calculate individual contributions based on total bills and percentages
const contribution1 = (percentage1 / 100) * totalBills;
const contribution2 = (percentage2 / 100) * totalBills;

// Display result
const resultElement = document.getElementById('result');
const resultTitleElement = document.getElementById('resultTitle');

// Calculate remaining amounts from each person's salary
const remaining1 = salary1 - contribution1;
const remaining2 = salary2 - contribution2;

document.getElementById('result').innerText = `
   ${name1} pays: £${contribution1.toFixed(2)} - (Remaining: £${remaining1.toFixed(2)})
   ${name2} pays: £${contribution2.toFixed(2)} - (Remaining: £${remaining2.toFixed(2)})
   `;

// Show the result box
resultElement.style.display = 'block';
resultTitleElement.style.display = 'block';
}







function addBillInput() {
    const billInputs = document.getElementById('billInputs');

    // Create new input fields
    const newBillName = document.createElement('input');
    newBillName.type = 'text';
    newBillName.placeholder = 'Enter name';
    newBillName.classList.add('billName');

    const newBillAmount = document.createElement('input');
    newBillAmount.type = 'number';
    newBillAmount.placeholder = 'Enter amount';
    newBillAmount.classList.add('billAmount');

    // Create new container div for each bill
    const newBillContainer = document.createElement('div');
    newBillContainer.classList.add('billInputsContainer');

    // Append new input fields to the container
    newBillContainer.appendChild(document.createTextNode('Bill ' + ' Name: '));
    newBillContainer.appendChild(newBillName);
    newBillContainer.appendChild(document.createTextNode(' Amount (£): '));
    newBillContainer.appendChild(newBillAmount);

    // Append the new container to the main container
    billInputs.appendChild(newBillContainer);
}
