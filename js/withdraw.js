/* 
*1.add event handler or addeventlistner
*2. get the withdraw amount to the input field.
*2.5 make sure the convert to the number by using the parseFloat.
*3.Get the previous total
*4. calculate the total withdraw amount
*4.5 set the total withdraw amount
*5.get the previous balance total
*6.set the new balance total 
*7.
*/
// step-1
document.getElementById('btn-withdraw').addEventListener('click', function () {
// step --2
    const withdrawField = document.getElementById('withdraw-field');
    const newwithdrawAmountString = withdrawField.value;
    const newwithdrawAmount = parseFloat(newwithdrawAmountString);
        // step -7
        withdrawField.value = '';

    if (isNaN(newwithdrawAmount)) {
        alert('Taka de')
        return;
    }
    // step-3
    const previousWithdrawElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = previousWithdrawElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    console.log(previousWithdrawTotal);

    // step--5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    /* set alert */
    if (newwithdrawAmount > previousBalanceTotal) {
        alert('Baap er bank e eto Taka nai')
        return;
    }


    // step-4

    const currentwithdrawTotal = previousWithdrawTotal + newwithdrawAmount;

    previousWithdrawElement.innerText = currentwithdrawTotal;

    // step-6
    const newBalanceTotal = previousBalanceTotal - newwithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;



})