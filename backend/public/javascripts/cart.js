// Carrito de compras conectado a la API del Backend (Session & DB)

async function getCartFromAPI() {
    try {
        const response = await fetch('/api/cart');
        return await response.json();
    } catch (e) {
        console.error("Error al obtener el carrito:", e);
        return { items: [], total: 0 };
    }
}

async function addToCart(product) {
    try {
        await fetch('/api/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ productId: product.id, quantity: product.quantity })
        });

        await updateCartUI();

        // Abrir offcanvas si está definido en bootstrap
        if (typeof bootstrap !== 'undefined') {
            const offcanvasEl = document.getElementById('offcanvasRightLabel');
            if (offcanvasEl) {
                const offcanvasInfo = bootstrap.Offcanvas.getInstance(offcanvasEl) || new bootstrap.Offcanvas(offcanvasEl);
                offcanvasInfo.show();
            }
        }
    } catch (e) {
        console.error("Error al agregar producto:", e);
    }
}

async function removeFromCart(productId) {
    try {
        await fetch(`/api/cart/${productId}`, { method: 'DELETE' });
        await updateCartUI();
    } catch (error) {
        console.error("Error al eliminar producto:", error);
    }
}

async function updateQuantity(productId, newQuantity) {
    if (newQuantity < 1) return;
    try {
        await fetch(`/api/cart/${productId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ quantity: newQuantity })
        });
        await updateCartUI();
    } catch (error) {
        console.error("Error al actualizar cantidad:", error);
    }
}

function formatCurrency(amount) {
    return '$ ' + parseFloat(amount).toLocaleString('es-AR');
}

async function updateCartUI() {
    const data = await getCartFromAPI();
    const cart = data.items || [];
    const totalPrice = data.total || 0;
    const totalItems = cart.reduce((acc, curr) => acc + curr.quantity, 0);

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
                <img class="cart-product-img" src="${product.image}" alt="${product.name}">
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
                    <img class="product-img" src="${product.image}" alt="${product.name}">
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
            // La data es requerida solo para fallback, backend usara el ID.

            // Buscar la cantidad ingresada por el usuario
            let quantity = 1;
            const quantityInput = document.querySelector('.product-detail .quantity');
            if (quantityInput) {
                quantity = parseInt(quantityInput.value) || 1;
            }

            const product = {
                id,
                quantity
            };

            addToCart(product);
        });
    }

    // Fix event listener for plus/minus in productDetail
    const productDetailQuantity = document.querySelector('.product-detail .product-quantity:not(.cart-product-quantity)');
    if (productDetailQuantity && document.getElementById('add-to-cart-btn')) {
        const upBtn = productDetailQuantity.querySelector('.up');
        const downBtn = productDetailQuantity.querySelector('.down');
        const input = productDetailQuantity.querySelector('.quantity');

        if (upBtn) upBtn.addEventListener('click', () => { input.stepUp(); });
        if (downBtn) downBtn.addEventListener('click', () => { input.stepDown(); });
    }
});
