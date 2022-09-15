document.getElementById('btn-deposit').addEventListener('click', function () {
    
    const dipositField = document.getElementById('diposit-field');
    const dipositAmount = dipositField.value;


const dipositTotalElement = document.getElementById ('deposit-total');
const depositTotal =dipositTotalElement.innerText;
console.log ( depositTotal);

dipositTotalElement.innerText =dipositAmount; 



})
