/* step 1: add click event handler with submit button  */
document.getElementById('btn-submit').addEventListener('click', function () {
    /* step-2 get the email from user input */
    //=>> always remember to use (.value) to get text from and user input.
    const emailField = document.getElementById('user-mail');
    const email = emailField.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    /* proper way oita na --
    *varify email and password
    */
    if (email === 'limon@limon.com' && password === 'limon') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Vag eikhane theke, passWord jane ay age.')
    }
})