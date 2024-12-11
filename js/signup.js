var userName = document.getElementById('Name')
var emailInput = document.getElementById('email')
var passwordInput = document.getElementById('password')

var button = document.getElementById('addBtn')
var inputvaild = document.getElementById('inputvaild')
var inputError = document.getElementById('inputError')

document.getElementById('addBtn').addEventListener('click', function () {
    if(!check()){
        addResigter()
    }else{
        check()
    }
    

}
);
var formarray = []
if (localStorage.getItem('resigter')) {
    formarray = JSON.parse(localStorage.getItem('resigter'))
}

function addResigter() {
    // if (userName.value = "", emailInput.value = "", passwordInput.value = ""){
    //     inputError.textContent = "All inputs is required.";

    // }
    if (vaildation(Name) && vaildation(email) && vaildation(password)) {
        var resigter = {
            Name: userName.value,
            email: emailInput.value,
            password: passwordInput.value

        }

        formarray.push(resigter)
        location.href = 'signin.html';
        localStorage.setItem('resigter', JSON.stringify(formarray))

        clear()
    }


}

function clear() {
    userName.value = null,
        emailInput.value = null,
        passwordInput.value = null
}



function vaildation(input) {
    regex = {
        Name: /^[a-zA-Z0-9._\s-]{3,}$/,
        email: /^[a-z]{3,}[0-9]{1,}(@gmail\.com)$/,
        password: /\w{8,}/
    }
    if (regex[input.id].test(input.value)) {
        input.nextElementSibling.classList.replace('d-block', 'd-none')
        inputvaild.classList.add('text-success')
        inputvaild.classList.remove('text-danger')
        inputvaild.textContent = "success"
        return true;
    }
    else {
        input.nextElementSibling.classList.replace('d-none', 'd-block')
        inputvaild.classList.add('text-danger')
        inputvaild.classList.remove('text-success')
        inputvaild.textContent = "not success"

        return false;
    }
}

function check() {
    for (let i = 0; i < formarray.length; i++) {
        if (formarray[i].email.includes(email.value)) {
            inputvaild.textContent = "email already exists"; 
       inputvaild.classList.add('text-danger')
return true;
        }
    }
}