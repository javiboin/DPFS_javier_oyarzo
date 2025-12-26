document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const showHideButton = document.getElementById('show-hide');
    
    showHideButton.addEventListener('click', function() {
        if (passwordInput.type == 'password') {
            passwordInput.type = 'text';
            confirmPasswordInput.type = 'text';
            showHideButton.innerHTML = 'Ocultar';
        } else {
            passwordInput.type = 'password',
            confirmPasswordInput.type = 'password';
            showHideButton.innerHTML = 'Mostrar';
        }
    }) 
});

const form = document.getElementById('registerForm');
const emailInput = document.getElementById('email');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const fileInput = document.getElementById('file');


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

emailInput.addEventListener('input', () => {
    clearError(emailInput);
  
    if (validator.isEmpty(emailInput.value)) {
        showError(emailInput, 'El email es obligatorio');
    } else if (!validator.isEmail(emailInput.value)) {
        showError(emailInput, 'Por favor ingresa un email válido');
    }
});

firstName.addEventListener('input', () => {
    clearError(firstName);
    
    if (validator.isEmpty(firstName.value)) {
        showError(firstName, 'El nombre es obligatorio');
    } else if (!validator.isLength(firstName.value, { min: 2 })) {
        showError(firstName, 'El nombre debe tener al menos 2 caracteres');
    }
});

lastName.addEventListener('input', () => {
    clearError(lastName);

    if (validator.isEmpty(lastName.value)) {
        showError(lastName, 'El apellido es obligatorio');
    } else if (!validator.isLength(lastName.value, { min: 2 })) {
        showError(lastName, 'El apellido debe tener al menos 2 caracteres');
    }
});

passwordInput.addEventListener('input', () => {
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
    
    if (confirmPasswordInput.value) {
        if (passwordInput.value !== confirmPasswordInput.value) {
            showError(confirmPasswordInput, 'Las contraseñas no coinciden');
        }
    }
});

confirmPasswordInput.addEventListener('input', () => {
    clearError(confirmPasswordInput);
    
    if (validator.isEmpty(confirmPasswordInput.value)) {
        showError(confirmPasswordInput, 'La confirmación de contraseña es obligatoria');
    } else if (passwordInput.value !== confirmPasswordInput.value) {
        showError(confirmPasswordInput, 'Las contraseñas no coinciden');
    }
});

fileInput.addEventListener('input', () => {
    clearError(fileInput);
    
    if (fileInput.files.length === 0) {
        showError(fileInput, 'La imagen es obligatoria');
    } else {
        const file = fileInput.files[0];
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
        
        if (!allowedTypes.includes(file.type)) {
            showError(fileInput, 'Solo se permiten imágenes (JPEG, PNG, GIF)');
        }
    }
});