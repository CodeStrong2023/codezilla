// cartService.js

/**
 * Obtiene el carrito de compras desde el localStorage.
 * @returns {Array} Arreglo de productos en el carrito.
 */
function getCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log("Carrito obtenido:", cart); // Log del carrito obtenido
    return cart;
}

/**
 * Guarda el carrito de compras en el localStorage.
 * @param {Array} cart - Arreglo de productos a guardar en el carrito.
 */
function saveCart(cart) {
    console.log("Guardando carrito:", cart); // Log del carrito a guardar
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log("Carrito guardado en localStorage."); // Confirmación de guardado
}

/**
 * Limpia el carrito de compras del localStorage.
 */
function clearCart() {
    console.log("Limpiando carrito de localStorage."); // Log antes de limpiar el carrito
    localStorage.removeItem('cart');
    console.log("Carrito limpiado."); // Confirmación de limpieza
}
