// main.js

// Este archivo se encarga de la lógica para cargar y mostrar productos en la tienda Ferretería Don Luis.

function cargarProductos() {
    const contenedor = document.querySelector('.row');
    console.log("Cargando productos...");

    // Verifica si hay productos disponibles
    if (!productos || productos.length === 0) {
        contenedor.innerHTML = '<p>No hay productos disponibles para mostrar.</p>';
        console.warn("No hay productos para mostrar");
        return;
    }

    // Itera sobre el array de productos y crea un elemento para cada uno
    productos.forEach(producto => {
        console.log(`Creando elemento para el producto: ${producto.nombre}`);
        const productoDiv = crearProductoElemento(producto); // Crea el elemento del producto
        contenedor.appendChild(productoDiv); // Añade el div del producto al contenedor
    });

    console.log("Productos cargados exitosamente.");
}

// Crea un elemento HTML para cada producto
function crearProductoElemento(producto) {
    const productoDiv = document.createElement("div");
    productoDiv.classList.add("col-md-4", "mb-4");

    // Asigna el HTML del producto al div creado
    productoDiv.innerHTML = `
        <div class="card">
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
            <div class="card-body text-center">
                <h5 class="card-title">${producto.nombre}</h5>
                <button 
                    class="btn btn-primary" 
                    data-id="${producto.id}" 
                    onclick="verDetalles(this)"
                >
                    Ver detalles
                </button>
            </div>
        </div>
    `;
    console.log(`Elemento creado para el producto: ${producto.nombre}`);
    return productoDiv;
}

// Mostrar detalles en el modal
function verDetalles(button) {
    const id = button.dataset.id;
    console.log(`Ver detalles del producto con ID: ${id}`);
    const producto = productos.find(p => p.id === parseInt(id, 10));

    if (producto) {
        console.log(`Producto encontrado: ${producto.nombre}`);
        actualizarModal(producto);
    } else {
        alert("Producto no encontrado. Por favor, inténtalo de nuevo.");
        console.error("Producto no encontrado:", id);
    }
}

// Actualiza el contenido del modal con la información del producto seleccionado
function actualizarModal(producto) {
    console.log(`Actualizando modal con información del producto: ${producto.nombre}`);
    document.getElementById("productoModalLabel").textContent = producto.nombre;
    document.getElementById("productoImagen").src = producto.imagen;
    document.getElementById("productoDescripcion").textContent = producto.descripcion;

    // Formatear el precio usando Intl.NumberFormat
    const formattedPrice = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(producto.precio);
    document.getElementById("productoPrecio").textContent = formattedPrice;

    const modal = new bootstrap.Modal(document.getElementById("productoModal"));
    modal.show();
    console.log("Modal mostrado con el producto:", producto.nombre);
}

// Llamar a la función para cargar los productos cuando cargue la página
window.onload = () => {
    console.log("Página cargada. Llamando a cargarProductos.");
    cargarProductos();
};
