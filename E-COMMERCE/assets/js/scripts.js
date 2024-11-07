// Función para cargar el contenido del header y footer
function includeHTML() {
    // Selecciona todos los elementos que tienen el atributo data-include
    const elements = document.querySelectorAll('[data-include]');
    console.log("Elementos a incluir:", elements); // Log de elementos seleccionados

    // Itera sobre cada elemento
    elements.forEach((element) => {
        const file = element.getAttribute('data-include'); // Obtiene el archivo a cargar
        if (file) {
            console.log(`Cargando el archivo: ${file}`); // Log del archivo que se está cargando
            fetch(file)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Error: ${response.status}`); // Manejo de errores de respuesta
                    }
                    return response.text();
                })
                .then(data => {
                    element.innerHTML = data; // Inserta el contenido cargado
                    console.log(`Contenido del archivo ${file} cargado exitosamente.`); // Log de éxito
                })
                .catch(err => console.error('Error al cargar el contenido:', err));
        } else {
            console.warn('No se especificó un archivo para incluir en:', element); // Log de advertencia si no hay archivo
        }
    });
}

// Llama a la función al cargar la página
window.onload = () => {
    console.log("La página se ha cargado. Incluyendo HTML..."); // Log al cargar la página
    includeHTML();
};

// utils.js
export function obtenerParametro(param) {
    const urlParams = new URLSearchParams(window.location.search);
    const valor = urlParams.get(param);
    console.log(`Parámetro obtenido: ${param} = ${valor}`); // Log del parámetro obtenido
    return valor;
}

// productsDisplay.js
import { productos } from './data/productsData.js';
import { obtenerParametro } from './utils.js';
import { mostrarProducto } from './modal.js';

export function cargarProductos(marca) {
    const contenedor = document.createElement('div');
    contenedor.classList.add('row');

    // Obtener el parámetro de categoría
    const categoriaSeleccionada = obtenerParametro('categoria');
    console.log("Categoría seleccionada:", categoriaSeleccionada); // Log de la categoría seleccionada

    // Filtrar productos por marca y categoría si se proporciona
    const productosFiltrados = productos.filter(producto => {
        const coincideMarca = marca ? producto.marca === marca : true;
        const coincideCategoria = categoriaSeleccionada ? producto.categoria === categoriaSeleccionada : true;
        return coincideMarca && coincideCategoria;
    });

    console.log("Productos filtrados:", productosFiltrados); // Log de productos filtrados

    productosFiltrados.forEach(producto => {
        const productoDiv = document.createElement("div");
        productoDiv.classList.add("col-md-4", "mb-4");

        productoDiv.innerHTML = `
            <div class="card">
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                <div class="card-body text-center">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">Precio: $${producto.precio.toFixed(2)}</p>
                    <button class="btn btn-primary" onclick="mostrarProducto('${producto.nombre}', '${producto.descripcion}', '${producto.imagen}', ${producto.precio})">Ver detalles</button>
                </div>
            </div>
        `;
        contenedor.appendChild(productoDiv);
        console.log(`Producto agregado al contenedor: ${producto.nombre}`); // Log de cada producto agregado
    });

    document.querySelector(".container.my-5").appendChild(contenedor);
    console.log("Contenedor de productos agregado al DOM."); // Log al añadir el contenedor al DOM
}
