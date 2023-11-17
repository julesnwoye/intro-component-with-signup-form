const btn = document.querySelector('button');
const error = document.querySelectorAll('.error-msg');
const errorSign = document.querySelectorAll('.error-icon');
const inputB = document.querySelectorAll('input');
const emailInput = document.querySelector('#email');
const emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function emailChecker () {
    for(let i = 2; i < 3; i++) {    
        if (!emailRegex.test(emailInput.value)){
            error[i].classList.add('active');
            errorSign[i].classList.add('active');
            inputB[i].classList.add('active');
            emailInput.value = '';
            inputB[i].placeholder = 'email@example/com';
        }else {
            error[i].classList.remove('active');
            errorSign[i].classList.remove('active');
            inputB[i].classList.remove('active');  
        }
    }
}

function result () {
    for(let i = 0; i < 4; i++) {    
        if (inputB[i].value === '' ){
            error[i].classList.add('active');
            errorSign[i].classList.add('active');
            inputB[i].classList.add('active');
            inputB[i].placeholder = '';
        }else {
            error[i].classList.remove('active');
            errorSign[i].classList.remove('active');
            inputB[i].classList.remove('active');  
        }
    }
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
 
     result();
     emailChecker ();
});


