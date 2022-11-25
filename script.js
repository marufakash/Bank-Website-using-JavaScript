// login button event handeler

let loginBtn = document.querySelector(".login-btn");
loginBtn.addEventListener('click', () => {
    let loginPage = document.querySelector('.login-page');
    loginPage.style.display = 'none';

    let transactionArea = document.querySelector('.transaction-area');
    transactionArea.style.display = 'block';
})

// deposit button event handler

let depositBtn = document.querySelector('.deposit-btn');
depositBtn.addEventListener('click', () => {
    let depositAmount = document.getElementById('deposit-amount').value;
    let depositNumber = parseFloat(depositAmount);

    let currentDeposit = document.getElementById('current-deposit').innerText;
    let currentDepositNumber = parseFloat(currentDeposit);
    let totalDeposit = depositNumber + currentDepositNumber;

    document.getElementById('current-deposit').innerText = totalDeposit;
    document.getElementById('deposit-amount').value = '';

    let balanceAmount = document.getElementById('balence-amount').innerText;
    let balanceAmountNumber = parseFloat(balanceAmount);
    let totalBalance =  depositNumber + balanceAmountNumber;
    document.getElementById('balence-amount').innerText = totalBalance;
})

// withdraw button event handler
let withdrawBtn = document.querySelector(".widthdraw-btn");
withdrawBtn.addEventListener('click' , () => {
    let widthdrawAmount = document.getElementById('withdraw-amount').value;
    let withdrawNumber =parseFloat(widthdrawAmount);

    let currentWithdraw = document.getElementById('current-withdraw').innerText;
    let currentWithdrawNumber = parseFloat(currentWithdraw);
    let totalWithdraw = withdrawNumber + currentWithdrawNumber;

    document.getElementById('current-withdraw').innerText = totalWithdraw;
    document.getElementById('withdraw-amount').value = '';

    let balanceAmount = document.getElementById('balence-amount').innerText;
    let balanceAmountNumber = parseFloat(balanceAmount);
    let totalBalance = balanceAmountNumber- withdrawNumber;
    document.getElementById('balence-amount').innerText = totalBalance;
})