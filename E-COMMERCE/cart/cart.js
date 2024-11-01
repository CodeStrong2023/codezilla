document.addEventListener('DOMContentLoaded', () => {
    console.log("Document ready. Cargando el carrito..."); // Log al cargar el documento
    displayCart(); // Mostrar el carrito al cargar la página
});

function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || []; // Cargar el carrito del localStorage
    console.log("Carrito obtenido:", cart); // Log del carrito obtenido
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Limpiar contenido previo

    if (cart.length === 0) {
        console.log("El carrito está vacío."); // Log si el carrito está vacío
        cartItemsContainer.innerHTML = '<p>El carrito está vacío.</p>';
    } else {
        cart.forEach(item => {
            console.log("Mostrando artículo del carrito:", item); // Log de cada artículo
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item d-flex justify-content-between align-items-center mb-3';
            itemElement.innerHTML = `
                <div>
                    <h5>${item.nombre}</h5>
                    <p>Precio: $${item.precio.toFixed(2)} x ${item.cantidad}</p>
                </div>
                <button class="btn btn-danger" onclick="removeFromCart(${item.id})">Eliminar</button>
            `;
            cartItemsContainer.appendChild(itemElement);
        });
    }

    updateCartSummary(cart); // Actualizar el resumen del carrito
}

function updateCartSummary(cart) {
    const cartSummary = document.getElementById('cart-summary');
    const total = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
    console.log("Total del carrito:", total); // Log del total calculado
    cartSummary.innerHTML = `<h4>Total: $${total.toFixed(2)}</h4>`;
}

function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log("Carrito antes de eliminar el producto:", cart); // Log del carrito antes de eliminar
    cart = cart.filter(item => item.id !== productId); // Filtrar el producto a eliminar
    console.log("Carrito después de eliminar el producto:", cart); // Log del carrito después de eliminar
    localStorage.setItem('cart', JSON.stringify(cart)); // Actualizar localStorage
    displayCart(); // Mostrar el carrito actualizado
}

function proceedToCheckout() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log("Intentando proceder al pago. Carrito actual:", cart); // Log al proceder al pago
    if (cart.length === 0) {
        alert('El carrito está vacío. Agrega productos para proceder al pago.');
        return;
    }
    // Aquí puedes implementar la lógica para proceder al pago
    alert('Procediendo al pago...');
}
