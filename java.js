
const form = document.getElementById('cakeOrderForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passError = document.getElementById('passError');

form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    let isValid = true;

   
    if(username.value.trim() === "") {
        nameError.style.display = "block";
        isValid = false;
    } else {
        nameError.style.display = "none";
    }

    const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if(!gmailPattern.test(email.value.trim())) {
        emailError.style.display = "block";
        isValid = false;
    } else {
        emailError.style.display = "none";
    }


    const passPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;
    if(!passPattern.test(password.value)) {
        passError.style.display = "block";
        isValid = false;
    } else {
        passError.style.display = "none";
    }

    if(isValid) {
        alert(`Order Confirmed! Thank you ${username.value}`);
        form.reset(); 
    }
});


username.addEventListener('input', () => {
    if(username.value.trim() !== "") nameError.style.display = "none";
});
email.addEventListener('input', () => {
    const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if(gmailPattern.test(email.value.trim())) emailError.style.display = "none";
});
password.addEventListener('input', () => {
    const passPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;
    if(passPattern.test(password.value)) passError.style.display = "none";
});
