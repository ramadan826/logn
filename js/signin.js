var singInEmail = document.getElementById('loginEmail');
var signInPassword = document.getElementById('loginPassword');
var login = document.getElementById('login')
var formarray = []
formarray = JSON.parse(localStorage.getItem('resigter'))

login.addEventListener('click', function () {

    if (singInEmail.value == '' || signInPassword.value == '') {
        document.getElementById('error').classList.add('text-danger')
        document.getElementById('error').innerHTML = `<p class ='text-center'>All inputs is required</p>`;
    } else {
        check();
    }
})

function check() {
    for (var i = 0; i < formarray.length; i++) {
        if (singInEmail.value == formarray[i].email && signInPassword.value == formarray[i].password) {

            location.href = 'home.html';
            break;
        }
        else {
            document.getElementById('error').classList.add('text-danger')
            document.getElementById('error').innerHTML = `<p class ='text-center'>the email or password is incorrect</p>`;
        }
    }
}