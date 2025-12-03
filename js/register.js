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
})