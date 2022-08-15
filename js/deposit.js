/* step 1- addEventListener to the deposit button */
document.getElementById('btn-deposit').addEventListener('click', function () {
   /* step 2- get amount to the deposit field */
    const depositField = document.getElementById('deposit-field');
    const NewDepositAmountString = depositField.value;
    const NewDepositAmount = parseFloat(NewDepositAmountString);
    
    /* step -3 get the deposit total */
    const depositTotalElement = document.getElementById('deposit-total');
    const PreviousDepositTotalString = depositTotalElement.innerText;
    const PreviousDepositTotal = parseFloat(PreviousDepositTotalString);

    /* step-4 add number to set the total amount */
    const currentDepositTotal = PreviousDepositTotal + NewDepositAmount;

    depositTotalElement.innerText = currentDepositTotal;

    /* step --5--  */
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    /* step--6-- calculate total balance */
    const currentBalanceTotal = previousBalanceTotal + NewDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    /* step -- clear the deposit field */
    depositField.value = '';
})