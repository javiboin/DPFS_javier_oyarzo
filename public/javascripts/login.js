const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');


const showError = (input, message) => {
    const formGroup = input.parentElement;
    let errorElement = formGroup.querySelector('.error-message');
    
    if (!errorElement) {
        errorElement = document.createElement('p');
        errorElement.className = 'error-message';
        errorElement.style.color = 'red';
        errorElement.style.marginTop = '5px';
        errorElement.style.fontSize = '0.9em';
        formGroup.appendChild(errorElement);
    }
    
    errorElement.textContent = message;
    input.classList.add('is-invalid');
}

const clearError = (input) => {
    const formGroup = input.parentElement;
    const errorElement = formGroup.querySelector('.error-message');
    
    if (errorElement) {
        formGroup.removeChild(errorElement);
        input.classList.remove('is-invalid');
    }
}

const emailValidations = () => {
    clearError(emailInput);
  
    if (validator.isEmpty(emailInput.value)) {
        showError(emailInput, 'El email es obligatorio');
    } else if (!validator.isEmail(emailInput.value)) {
        showError(emailInput, 'Por favor ingresa un email válido');
    }
}

const passwordValidations = () => {
    clearError(passwordInput);

    const options = {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1
    }
    
    if (validator.isEmpty(passwordInput.value)) {
        showError(passwordInput, 'La contraseña es obligatoria');
    } else if (!validator.isLength(passwordInput.value, { min: 8 })) {
        showError(passwordInput, 'La contraseña debe tener al menos 8 caracteres');
    } else if (!validator.isStrongPassword(passwordInput.value, options)) {
        showError(passwordInput, 'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número');
    }
}

emailInput.addEventListener('input', () => {
    emailValidations();
});

passwordInput.addEventListener('input', () => {
    passwordValidations();
});