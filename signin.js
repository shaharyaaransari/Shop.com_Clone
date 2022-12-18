function signinSubmit(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let data = JSON.parse(localStorage.getItem('userCred'));
    if(data.email===email && data.password === password){
        alert('Sign In successfull');
        window.location.href='/wild-station-8443';
    }
    else
        alert('Wrong Credential');
}