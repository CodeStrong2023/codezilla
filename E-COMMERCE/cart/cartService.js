// Función para obtener el carrito desde localStorage
function obtenerCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

// Función para guardar el carrito en localStorage
function guardarCarrito(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Función para agregar un producto al carrito
function agregarProductoAlCarrito(producto) {
    let carrito = obtenerCarrito();

    // Verificar si el producto ya está en el carrito
    const indexProducto = carrito.findIndex(item => item.id === producto.id);

    if (indexProducto !== -1) {
        // Si ya está, aumenta la cantidad
        carrito[indexProducto].cantidad += producto.cantidad;
    } else {
        // Si no está, agrégalo al carrito
        carrito.push(producto);
    }

    guardarCarrito(carrito);
    console.log(`Producto "${producto.nombre}" agregado al carrito.`);
    alert(`${producto.nombre} ha sido agregado al carrito.`);
}

// Función para mostrar el carrito en la consola (para pruebas)
function mostrarCarrito() {
    const carrito = obtenerCarrito();
    console.log("Contenido del carrito:", carrito);
}
