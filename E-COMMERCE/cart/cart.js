// Función para renderizar los elementos del carrito
function renderCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    const cartSummaryContainer = document.getElementById("cart-summary");

    let carrito = obtenerCarrito();
    cartItemsContainer.innerHTML = "";
    cartSummaryContainer.innerHTML = "";

    if (carrito.length === 0) {
        cartItemsContainer.innerHTML = "<p>El carrito está vacío.</p>";
        return;
    }

    let total = 0;

    // Renderizar cada producto en el carrito
    carrito.forEach((producto, index) => {
        const subtotal = producto.precio * producto.cantidad;
        total += subtotal;

        // Crear el elemento HTML para el producto
        const itemHTML = `
            <div class="card mb-3">
                <div class="card-body d-flex justify-content-between align-items-center">
                    <div class="size d-flex align-items-center">
                        <img src="${producto.imagen}" class="img-thumbnail me-3" alt="${producto.nombre}" style="width: 80px;">
                        <div>
                            <h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text">Precio: $${producto.precio.toFixed(2)}</p>
                        </div>
                    </div>
                    <div class="d-flex align-items-center">
                        <button class="btn btn-secondary me-2" onclick="actualizarCantidad(${index}, -1)">-</button>
                        <span>${producto.cantidad}</span>
                        <button class="btn btn-secondary ms-2" onclick="actualizarCantidad(${index}, 1)">+</button>
                    </div>
                    <p class="card-text">Subtotal: $${subtotal.toFixed(2)}</p>
                    <button class="btn btn-danger ms-2" onclick="eliminarProducto(${index})">Eliminar</button>
                </div>
            </div>
        `;
        cartItemsContainer.innerHTML += itemHTML;
    });

    // Resumen del carrito
    cartSummaryContainer.innerHTML = `
        <h4>Total: $${total.toFixed(2)}</h4>
    `;
}

// Función para actualizar la cantidad de un producto
function actualizarCantidad(index, change) {
    let carrito = obtenerCarrito();
    carrito[index].cantidad += change;

    if (carrito[index].cantidad <= 0) {
        carrito.splice(index, 1); // Elimina el producto si la cantidad es 0
    }

    guardarCarrito(carrito);
    renderCart();
}

// Función para eliminar un producto del carrito
function eliminarProducto(index) {
    let carrito = obtenerCarrito();
    carrito.splice(index, 1);
    guardarCarrito(carrito);
    renderCart();
}

// Función para proceder al pago
function proceedToCheckout() {
    const carrito = obtenerCarrito();
    if (carrito.length === 0) {
        alert("El carrito está vacío. Agrega productos antes de proceder al pago.");
    } else {
        alert("Procediendo al pago...");
        // Redireccionar o realizar acción de pago aquí
    }
}

// Cargar el carrito cuando se abre la página
document.addEventListener("DOMContentLoaded", () => {
    renderCart();
});
