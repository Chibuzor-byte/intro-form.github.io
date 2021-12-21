const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
const firstError = document.getElementById('first--error');
const lastError = document.getElementById('last--error');
const passwordError = document.getElementById('password--error');



form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (firstName.value === '' || firstName.value == null) {
        firstError.textContent = 'First Name cannot be empty';
        firstError.style.display = 'block';
        firstName.classList.add('error');
        firstName.placeholder = '';
        document.getElementById('error-symbol-first').style.display = 'block';
    } else {
        firstError.style.display = 'none'
        firstName.classList.remove('error');
        document.getElementById('error-symbol-first').style.display = 'none';
    }

    if (lastName.value === '' || lastName.value == null) {
        document.getElementById('last--error').textContent = 'Last Name cannot be empty';
        lastName.placeholder = '';
        lastError.style.display = 'block';
        lastName.classList.add('error');
        document.getElementById('error-symbol-second').style.display = 'block';
    } else {
        lastError.style.display = 'none';
        lastName.classList.remove('error');
        document.getElementById('error-symbol-second').style.display = 'none';
    }

    if (email.value === '' || email.value == null) {
        document.getElementById('email--error').textContent = 'Looks like this is not an email';
        document.getElementById('email--error').style.display = 'block';
        email.classList.add('error');
        email.classList.add('email-error');
        email.placeholder = 'email@example/com';
        document.getElementById('error-symbol-third').style.display = 'block';
    } else {
        document.getElementById('email--error').style.display = 'none';
        email.classList.remove('error');
        email.classList.remove('email-error');
        document.getElementById('error-symbol-third').style.display = 'none';
    }

    if (password.value === '' || password.value == null) {
        passwordError.textContent = 'Password cannot be empty';
        passwordError.style.display = 'block';
        password.classList.add('error');
        password.placeholder = '';
        document.getElementById('error-symbol-fourth').style.display = 'block';
    } else {
        document.getElementById('password--error').style.display = 'none'
        document.getElementById('password').classList.remove('error');
        document.getElementById('error-symbol-fourth').style.display = 'none';
    }
    
})

