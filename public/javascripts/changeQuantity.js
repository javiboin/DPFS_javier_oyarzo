document.querySelectorAll('.quantity').forEach(input => {
    const upButton = input.closest('.product-quantity').querySelector('.up');
    const downButton = input.closest('.product-quantity').querySelector('.down');
    
    upButton.addEventListener('click', () => { input.stepUp(); });
    downButton.addEventListener('click', () => { input.stepDown(); });
});