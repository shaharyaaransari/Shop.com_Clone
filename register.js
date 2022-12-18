function registerSubmit(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let data = {email,password}
    localStorage.setItem('userCred',JSON.stringify(data));
    alert('Registration successfull');
}