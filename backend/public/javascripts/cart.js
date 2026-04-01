// carrito de compras usando LocalStorage
const CART_KEY = 'shopping_cart';

function getCart() {
    const cart = localStorage.getItem(CART_KEY);
    return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartUI();
}

function addToCart(product) {
    const cart = getCart();
    const existingProductIndex = cart.findIndex(p => p.id === product.id);

    if (existingProductIndex >= 0) {
        cart[existingProductIndex].quantity += product.quantity;
    } else {
        cart.push(product);
    }

    saveCart(cart);

    // Abrir offcanvas si está definido en bootstrap
    if (typeof bootstrap !== 'undefined') {
        const offcanvasEl = document.getElementById('offcanvasRightLabel');
        if (offcanvasEl) {
            const offcanvasInfo = bootstrap.Offcanvas.getInstance(offcanvasEl) || new bootstrap.Offcanvas(offcanvasEl);
            offcanvasInfo.show();
        }
    }
}

function removeFromCart(productId) {
    const cart = getCart();
    const newCart = cart.filter(p => p.id !== productId);
    saveCart(newCart);
}

function updateQuantity(productId, newQuantity) {
    if (newQuantity < 1) return;
    const cart = getCart();
    const product = cart.find(p => p.id === productId);
    if (product) {
        product.quantity = newQuantity;
        saveCart(cart);
    }
}

function formatCurrency(amount) {
    return '$ ' + amount.toLocaleString('es-AR');
}

function updateCartUI() {
    const cart = getCart();
    const totalItems = cart.reduce((acc, curr) => acc + curr.quantity, 0);
    const totalPrice = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);

    // Actualizar badge del header
    const badge = document.getElementById('cart-badge');
    if (badge) {
        badge.innerText = totalItems;
    }

    // Renderizar Offcanvas
    const offcanvasContainer = document.getElementById('cart-offcanvas-items');
    if (offcanvasContainer) {
        offcanvasContainer.innerHTML = '';
        cart.forEach(product => {
            offcanvasContainer.innerHTML += `
            <div class="cart-product-detail card p-2 mb-2">
                <img class="cart-product-img" src="${product.image}" width="140px" height="140px" alt="${product.name}">
                <p class="cart-product-name">${product.name}</p>
                <img class="cart-product-delete" src="/images/trash.svg" width="20px" height="20px" alt="Eliminar" style="cursor: pointer;" onclick="removeFromCart('${product.id}')">
                <div class="cart-product-quantity">
                    <button class="down" style="width: 20px;" onclick="updateQuantity('${product.id}', ${product.quantity - 1})">-</button>
                    <input type="number" class="quantity text-center" style="width: 40px;" min="1" value="${product.quantity}" onchange="updateQuantity('${product.id}', parseInt(this.value))">
                    <button class="up" style="width: 20px;" onclick="updateQuantity('${product.id}', ${product.quantity + 1})">+</button>
                </div>
                <p class="cart-product-price">${formatCurrency(product.price * product.quantity)}</p>
            </div>
            `;
        });

        const offcanvasTotal = document.getElementById('cart-offcanvas-total');
        if (offcanvasTotal) {
            offcanvasTotal.innerText = formatCurrency(totalPrice);
        }
    }

    // Renderizar Página Carrito (productCart.ejs)
    const pageContainer = document.getElementById('cart-page-items');
    if (pageContainer) {
        pageContainer.innerHTML = '';
        if (cart.length === 0) {
            pageContainer.innerHTML = '<p>El carrito está vacío.</p>';
        } else {
            cart.forEach(product => {
                pageContainer.innerHTML += `
                <div class="product-detail position-relative mb-3">
                    <img class="product-img" src="${product.image}" width="140px" height="140px" alt="${product.name}">
                    <p class="product-name">${product.name}</p>
                    <button class="product-delete border-0 bg-transparent position-absolute" style="top: 10px; right: 10px;" onclick="removeFromCart('${product.id}')">
                        <img src="/images/trash.svg" width="20px" height="20px" alt="Eliminar">
                    </button>
                    <div class="product-quantity mt-2">
                        <button class="down" style="width: 20px;" onclick="updateQuantity('${product.id}', ${product.quantity - 1})">-</button>
                        <input type="number" class="quantity text-center" style="width: 40px;" min="1" value="${product.quantity}" onchange="updateQuantity('${product.id}', parseInt(this.value))">
                        <button class="up" style="width: 20px;" onclick="updateQuantity('${product.id}', ${product.quantity + 1})">+</button>
                    </div>
                    <p class="product-price">${formatCurrency(product.price * product.quantity)}</p>
                </div>
                `;
            });
        }

        const pageTotal = document.getElementById('cart-page-total');
        if (pageTotal) {
            pageTotal.innerText = formatCurrency(totalPrice);
        }
    }
}

// Inicializar vista al cargar la pagina
document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();

    // Event listener para el boton de agregar al carrito en productDetail
    const addCartBtn = document.getElementById('add-to-cart-btn');
    if (addCartBtn) {
        addCartBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            const id = addCartBtn.getAttribute('data-id');
            const name = addCartBtn.getAttribute('data-name');
            const price = parseFloat(addCartBtn.getAttribute('data-price'));
            const image = addCartBtn.getAttribute('data-img');
            
            // Buscar la cantidad ingresada por el usuario
            let quantity = 1;
            const quantityInput = document.querySelector('.product-detail .quantity');
            if (quantityInput) {
                quantity = parseInt(quantityInput.value) || 1;
            }

            const product = {
                id,
                name,
                price,
                image,
                quantity
            };

            addToCart(product);
        });
    }

    // Fix event listener for plus/minus in productDetail since changeQuantity.js might crash
    const productDetailQuantity = document.querySelector('.product-detail .product-quantity:not(.cart-product-quantity)');
    if (productDetailQuantity && document.getElementById('add-to-cart-btn')) {
        const upBtn = productDetailQuantity.querySelector('.up');
        const downBtn = productDetailQuantity.querySelector('.down');
        const input = productDetailQuantity.querySelector('.quantity');

        if (upBtn) upBtn.addEventListener('click', () => { input.stepUp(); });
        if (downBtn) downBtn.addEventListener('click', () => { input.stepDown(); });
    }
});
