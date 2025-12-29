const fileInput = document.getElementById('product-img-file');
const titleInput = document.getElementById('title');
const brandInput = document.getElementById('brand');
const subcategoryInput = document.getElementById('subcategory');
const priceInput = document.getElementById('price');
const priceCashInput = document.getElementById('priceCash');
const priceInstallmentCountInput = document.getElementById('priceInstallmentCount');
const priceInstallmentInput = document.getElementById('priceInstallment');
const descriptionInput = document.getElementById('description');


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

titleInput.addEventListener('input', () => {
    clearError(titleInput);
  
    if (validator.isEmpty(titleInput.value)) {
        showError(titleInput, 'El nombre es obligatorio');
    } else if (!validator.isLength(titleInput.value, { min: 5 })) {
        showError(titleInput, 'El nombre debe tener al menos 5 caracteres');
    }
});

brandInput.addEventListener('input', () => {
    clearError(brandInput);
    
    if (validator.isEmpty(brandInput.value)) {
        showError(brandInput, 'La marca es obligatoria');
    }
});

subcategoryInput.addEventListener('input', () => {
    clearError(subcategoryInput);

    if (validator.isEmpty(subcategoryInput.value)) {
        showError(subcategoryInput, 'La subcategoria es obligatoria');
    }
});

priceInput.addEventListener('input', () => {
    clearError(priceInput);
    
    if (validator.isEmpty(priceInput.value)) {
        showError(priceInput, 'El precio es obligatorio');
    } else if (!validator.isNumeric(priceInput.value)) {
        showError(priceInput, 'El precio debe ser un número');
    }
});

priceCashInput.addEventListener('input', () => {
    clearError(priceCashInput);
    
    if (validator.isEmpty(priceCashInput.value)) {
        showError(priceCashInput, 'El precio en efectivo es obligatorio');
    } else if (!validator.isNumeric(priceCashInput.value)) {
        showError(priceCashInput, 'El precio en efectivo debe ser un número');
    }
});

priceInstallmentCountInput.addEventListener('input', () => {
    clearError(priceInstallmentCountInput);
    
    if (validator.isEmpty(priceInstallmentCountInput.value)) {
        showError(priceInstallmentCountInput, 'La cantidad de cuotas es obligatoria');
    } else if (!validator.isNumeric(priceInstallmentCountInput.value)) {
        showError(priceInstallmentCountInput, 'La cantidad de cuotas debe ser un número');
    }
});

priceInstallmentInput.addEventListener('input', () => {
    clearError(priceInstallmentInput);
    
    if (validator.isEmpty(priceInstallmentInput.value)) {
        showError(priceInstallmentInput, 'El precio en cuotas es obligatorio');
    } else if (!validator.isNumeric(priceInstallmentInput.value)) {
        showError(priceInstallmentInput, 'El precio en cuotas debe ser un número');
    }
});

descriptionInput.addEventListener('input', () => {
    clearError(descriptionInput);
    
    if (validator.isEmpty(descriptionInput.value)) {
        showError(descriptionInput, 'La descripción es obligatoria');
    } else if (!validator.isLength(descriptionInput.value, { min: 20 })) {
        showError(descriptionInput, 'La descripción debe tener al menos 20 caracteres');
    }
})