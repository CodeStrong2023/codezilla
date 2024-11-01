// modal.js
// Este script gestiona el comportamiento del modal que muestra los detalles de un producto seleccionado. 
// Permite actualizar la visualización del modal con la información del producto y agregar el producto al carrito de compras, almacenando la información en el localStorage del navegador.

// Objeto para almacenar el producto seleccionado
let selectedProduct = {
    id: null,
    nombre: "",
    imagen: "",
    precio: 0.00,
    cantidad: 1 // Inicializar cantidad
};

// Función para mostrar el modal con los detalles del producto
const showModal = (product) => {
    selectedProduct = { ...product, cantidad: 1 }; // Asigna el producto seleccionado y reinicia cantidad a 1
    console.log("Producto seleccionado:", selectedProduct); // Log del producto seleccionado

    // Actualiza el contenido del modal
    document.getElementById("productoModalLabel").innerText = product.nombre;
    document.getElementById("productoImagen").src = product.imagen;
    document.getElementById("productoDescripcion").innerText = product.descripcion || "Sin descripción"; // Texto por defecto si no hay descripción
    document.getElementById("productoPrecio").innerText = `$${product.precio.toFixed(2)}`;
    
    console.log("Contenido del modal actualizado:"); // Log del contenido actualizado
    console.log("Nombre:", product.nombre);
    console.log("Imagen:", product.imagen);
    console.log("Descripción:", product.descripcion || "Sin descripción");
    console.log("Precio:", product.precio.toFixed(2));

    // Muestra el modal
    const modal = new bootstrap.Modal(document.getElementById('productoModal'));
    modal.show();
    console.log("Modal mostrado para el producto:", product.nombre); // Log del modal mostrado
};

// Función para agregar el producto al carrito
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []; // Obtener el carrito del localStorage
    console.log("Carrito actual:", cart); // Log del carrito actual
    console.log("Producto a agregar:", product); // Log del producto a agregar

    // Verificar si el producto ya está en el carrito
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    if (existingProductIndex > -1) {
        // Si ya está, aumentar la cantidad
        cart[existingProductIndex].cantidad += product.cantidad; // Asegúrate de que product.cantidad sea correcto
        console.log(`Producto ${product.nombre} ya existe en el carrito. Nueva cantidad: ${cart[existingProductIndex].cantidad}`); // Log de actualización de cantidad
    } else {
        // Si no está, agregar el nuevo producto
        cart.push({ ...product }); // Asegúrate de que product tenga la propiedad 'cantidad'
        console.log(`Producto ${product.nombre} agregado al carrito.`); // Log del producto agregado
    }

    // Guardar el carrito actualizado en el localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log("Carrito guardado en localStorage:", cart); // Log del carrito guardado
}

// Selecciona el botón de "Agregar al carrito" dentro del modal
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("agregarCarritoBtn").addEventListener("click", () => {
        console.log("Botón 'Agregar al carrito' clicado."); // Log del clic en el botón
        addToCart(selectedProduct); // Agregar el producto al carrito
    });
});
