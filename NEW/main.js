function regex(){
    //var regexi=/[a-z]{2}/;
    var passwordRegex=/^[A-Z]{1}[a-z]{6}\d{1}$/;
    var inputi =document.getElementById('password').value
    var testo=passwordRegex.test(inputi);
    if(testo){
        console.log("Te dhenat jane shenuar mire");
    }
    else{
        console.log("Te dhenat jane shenuar gabim");
    }
}