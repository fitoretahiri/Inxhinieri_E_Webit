function regex(){

    var passwordRegex=/^[A-Z]{1}[A-Za-z0-9]+\d{3}$/;
    var inputi =document.getElementById('password').value
    var testo=passwordRegex.test(inputi);

    var nameRegex=/^[A-Z]{1}[a-zA-Z]+/;
    var nameInput=document.getElementById('name').value;
    var testName=nameRegex.test(nameInput);
    
    var surnameRegex=/^[A-Z]{1}[a-zA-Z]+/;
    var surnameInput=document.getElementById('surname').value;
    var testSurname=surnameRegex.test(surnameInput);

    var emailRegex=/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    var emailInput=document.getElementById('email').value;
    var testEmail=emailRegex.test(emailInput);

    var usernameRegex=/.{8,15}/;
    var usernameInput=document.getElementById('username').value;
    var testUsername=usernameRegex.test(usernameInput);
    
    if(testo &&testUsername&&testName&&testSurname&&testEmail){
        console.log("Te dhenat jane shenuar mire");
    }
    else{
        console.log("Te dhenat jane shenuar gabim");
    }
}