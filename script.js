// login button handler
const submitBtn = document.getElementById("submit");
submitBtn.addEventListener('click', function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = 'none'
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display ="block";

})

// deposit button handler
const depositButton = document.getElementById("deposit-btn");
depositButton.addEventListener('click', function(){
    const depositNumber = getInputNumber("deposit-amount");
    updateSpanText("current-deposit", depositNumber);
    updateSpanText("current-balance", depositNumber);

    document.getElementById("deposit-amount").value = "";
    
})
// withdraw button handler
const withdrawButton = document.getElementById("withdraw-btn");
withdrawButton.addEventListener('click', function(){
    const withdrawNumber = getInputNumber("withdraw-amount");
    updateSpanText("current-withdraw", withdrawNumber);
    updateSpanText("current-balance", -1 * withdrawNumber);

    document.getElementById("withdraw-amount").value = "";
})
// functions

function updateSpanText(id, amount){
    const currentValue = document.getElementById(id).innerText;
    const currentNumber = parseFloat(currentValue);
    const totalValue = currentNumber + amount;
    document.getElementById(id).innerText = totalValue;

}
function getInputNumber(id){
    const Amount = document.getElementById(id).value;
    const number = parseFloat(Amount);
    return number;
    
}
