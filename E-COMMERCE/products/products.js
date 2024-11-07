const productos = [
    // Herramientas Eléctricas
    {
        id: 1,
        nombre: "Taladro Inalámbrico",
        categoria: "Herramientas Eléctricas",
        marca: "dewalt",
        precio: 8999.99,
        descripcion: 'Taladro inalámbrico de alta potencia',
        imagen: "/assets/img/products/taladro.webp",
        cantidad: 1 // Cantidad inicial
    },
    {
        id: 2,
        nombre: "Sierra Circular",
        categoria: "Herramientas Eléctricas",
        marca: "makita",
        precio: 12999.99,
        descripcion: "Sierra circular potente para cortes precisos en madera.",
        imagen: "/assets/img/products/sierra_circular.webp",
        cantidad: 1 // Cantidad inicial
    },
    // Herramientas de Mano
    {
        id: 3,
        nombre: "Destornilladores",
        categoria: "Herramientas de Mano",
        precio: 2499.99,
        descripcion: "Juego de 10 destornilladores de diferentes tamaños y tipos.",
        imagen: "/assets/img/products/destornilladores.webp",
        cantidad: 1 // Cantidad inicial
    },
    {
        id: 4,
        nombre: "Martillo de Clavos",
        categoria: "Herramientas de Mano",
        marca: "stanley",
        precio: 1299.99,
        descripcion: "Martillo de 16 oz, ideal para trabajos de carpintería.",
        imagen: "/assets/img/products/martillo.webp",
        cantidad: 1 // Cantidad inicial
    },
    // Materiales de Construcción
    {
        id: 5,
        nombre: "Cemento Portland",
        categoria: "Materiales de Construcción",
        precio: 650.00,
        descripcion: "Saco de 50 kg de cemento Portland, ideal para obras de construcción.",
        imagen: "/assets/img/products/cemento.webp",
        cantidad: 1 // Cantidad inicial
    },
    {
        id: 6,
        nombre: "Bloques de Hormigón",
        categoria: "Materiales de Construcción",
        precio: 120.00,
        descripcion: "Bloques de hormigón de 20x40x20 cm, para construcción de muros.",
        imagen: "/assets/img/products/bloques_hormigon.webp",
        cantidad: 1 // Cantidad inicial
    },
    // Pinturas
    {
        id: 7,
        nombre: "Pintura Acrílica",
        categoria: "Pinturas",
        precio: 1999.99,
        descripcion: "Pintura acrílica de alta calidad, 1 litro.",
        imagen: "/assets/img/products/pintura_acrilica.webp",
        cantidad: 1 // Cantidad inicial
    },
    {
        id: 8,
        nombre: "Brochas y Rodillos",
        categoria: "Pinturas",
        precio: 1499.99,
        descripcion: "Juego de brochas y rodillos para pintura.",
        imagen: "/assets/img/products/brochas_rodillos.webp",
        cantidad: 1 // Cantidad inicial
    },
    // Tornillería
    {
        id: 9,
        nombre: "Juego de Tornillos",
        categoria: "Tornillería",
        precio: 1599.99,
        descripcion: "Juego de tornillos de diferentes tamaños y tipos.",
        imagen: "/assets/img/products/tornillos.webp",
        cantidad: 1 // Cantidad inicial
    },
    {
        id: 10,
        nombre: "Tuercas y Arandelas",
        categoria: "Tornillería",
        precio: 899.99,
        descripcion: "Set de tuercas y arandelas, ideal para diversos proyectos.",
        imagen: "/assets/img/products/tuercas_arandelas.webp",
        cantidad: 1 // Cantidad inicial
    },
    // Fontanería
    {
        id: 11,
        nombre: "Tuberías de PVC",
        categoria: "Fontanería",
        precio: 250.00,
        descripcion: "Tuberías de PVC de 3 metros, ideal para instalaciones de fontanería.",
        imagen: "/assets/img/products/tuberias_pvc.webp",
        cantidad: 1 // Cantidad inicial
    },
    {
        id: 12,
        nombre: "Grifo de Lavabo",
        categoria: "Fontanería",
        precio: 4999.99,
        descripcion: "Grifo de lavabo con sistema de ahorro de agua.",
        imagen: "/assets/img/products/grifo_lavabo.webp",
        cantidad: 1 // Cantidad inicial
    },
    // Electricidad
    {
        id: 13,
        nombre: "Cable Eléctrico",
        categoria: "Electricidad",
        precio: 199.99,
        descripcion: "Cable eléctrico de 50 metros, ideal para instalaciones eléctricas.",
        imagen: "/assets/img/products/cable_electrico.webp",
        cantidad: 1 // Cantidad inicial
    },
    {
        id: 14,
        nombre: "Tomas de Corriente",
        categoria: "Electricidad",
        precio: 599.99,
        descripcion: "Juego de 5 tomas de corriente, fácil instalación.",
        imagen: "/assets/img/products/tomas_corriente.webp",
        cantidad: 1 // Cantidad inicial
    },
    // Adhesivos
    {
        id: 15,
        nombre: "Pegamento Multiuso",
        categoria: "Adhesivos",
        precio: 499.99,
        descripcion: "Pegamento multiuso de 250 ml, ideal para diversas superficies.",
        imagen: "/assets/img/products/pegamento_multiuso.webp",
        cantidad: 1 // Cantidad inicial
    },
    {
        id: 16,
        nombre: "Cinta Adhesiva",
        categoria: "Adhesivos",
        precio: 299.99,
        descripcion: "Cinta adhesiva de 50 metros, ideal para reparaciones.",
        imagen: "/assets/img/products/cinta_adhesiva.webp",
        cantidad: 1 // Cantidad inicial
    },
    // Productos adicionales
    {
        id: 17,
        nombre: "Escuadra de Carpintero",
        categoria: "Herramientas de Mano",
        precio: 850.00,
        descripcion: "Escuadra de carpintero de 12 pulgadas.",
        imagen: "/assets/img/products/esquadra.webp",
        cantidad: 1 // Cantidad inicial
    },
    {
        id: 18,
        nombre: "Nivel de Burbuja",
        categoria: "Herramientas de Mano",
        precio: 1099.99,
        descripcion: "Nivel de burbuja de 24 pulgadas para trabajos de construcción.",
        imagen: "/assets/img/products/nivel_burbuja.webp",
        cantidad: 1 // Cantidad inicial
    },
    {
        id: 19,
        nombre: "Pinceles para Pintura",
        categoria: "Pinturas",
        precio: 999.99,
        descripcion: "Juego de pinceles de diferentes tamaños para pintar.",
        imagen: "/assets/img/products/pinceles.webp",
        cantidad: 1 // Cantidad inicial
    },
    {
        id: 20,
        nombre: "Sellador de Silicona",
        categoria: "Adhesivos",
        precio: 650.00,
        descripcion: "Sellador de silicona de 300 ml, ideal para sellar juntas.",
        imagen: "/assets/img/products/sellador.webp",
        cantidad: 1 // Cantidad inicial
    }
];

// Función para obtener el parámetro de la URL
function obtenerParametro(param) {
    const urlParams = new URLSearchParams(window.location.search);
    const valor = urlParams.get(param);
    console.log(`Parámetro obtenido: ${param} = ${valor}`); // Log del parámetro
    return valor;
}

// Función para cargar los productos en la página
function cargarProductos(marca) {
    console.log(`Cargando productos... Marca seleccionada: ${marca}`); // Log de inicio de carga
    const contenedor = document.createElement('div');
    contenedor.classList.add('row');

    // Obtener el parámetro de categoría
    const categoriaSeleccionada = obtenerParametro('categoria');
    console.log(`Categoría seleccionada: ${categoriaSeleccionada}`); // Log de categoría seleccionada

    // Filtrar productos por marca y por categoría si se proporciona
    const productosFiltrados = productos.filter(producto => {
        const coincideMarca = marca ? producto.marca === marca : true;
        const coincideCategoria = categoriaSeleccionada ? producto.categoria === categoriaSeleccionada : true;
        console.log(`Filtrando producto: ${producto.nombre}, Coincide marca: ${coincideMarca}, Coincide categoría: ${coincideCategoria}`); // Log de filtrado
        return coincideMarca && coincideCategoria;
    });

    console.log(`Productos filtrados: ${productosFiltrados.length}`); // Log de productos filtrados
    productosFiltrados.forEach(producto => {
        const productoDiv = document.createElement("div");
        productoDiv.classList.add("card-style", "col-md-4", "mb-4");

        productoDiv.innerHTML = `
            <div class="card">
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                <div class="card-body text-center">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">Precio: $${producto.precio.toFixed(2)}</p>
                    
                    <button class="btn btn-primary" onclick="mostrarProducto('${producto.nombre}', '${producto.descripcion}', '${producto.imagen}', ${producto.precio})">Ver detalles</button>

                    <button class="btn btn-success ms-2" onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
                </div>
                </div>
            </div>
        `;

        contenedor.appendChild(productoDiv);
    });

    document.querySelector(".container.my-5").appendChild(contenedor);
    console.log("Productos cargados en el contenedor."); // Log de productos cargados
}

// Función para agregar el producto al carrito
function agregarAlCarrito(idProducto) {
    const producto = productos.find(p => p.id === idProducto);
    if (!producto) return;

    // Obtener el carrito actual de localStorage o inicializarlo vacío
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Añadir el producto al carrito
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));

    console.log(`Producto agregado al carrito: ${producto.nombre}`); // Log del producto agregado
    alert(`${producto.nombre} ha sido agregado al carrito.`);
}

// Función para mostrar detalles del producto en un modal
function mostrarProducto(titulo, descripcion, imagen, precio) {
    console.log(`Mostrando producto: ${titulo}`); // Log del producto que se está mostrando
    // Cambiar el contenido del modal dinámicamente
    document.getElementById('productoModalLabel').innerText = titulo;
    document.getElementById('productoDescripcion').innerText = descripcion;
    document.getElementById('productoImagen').src = imagen;
    document.getElementById('productoPrecio').innerText = `Precio: $${precio.toFixed(2)}`;

    // Mostrar el modal
    var productoModal = new bootstrap.Modal(document.getElementById('productoModal'));
    productoModal.show();
    console.log("Modal mostrado."); // Log de modal mostrado
}

// Al cargar la página, obtener la marca y cargar productos
window.onload = function () {
    const marcaSeleccionada = obtenerParametro('marca');
    console.log(`Marca seleccionada al cargar la página: ${marcaSeleccionada}`); // Log de marca seleccionada
    cargarProductos(marcaSeleccionada);
};

// Puedes usar esta lista para mostrar productos en tu página web.
console.log("Lista de productos:", productos); // Log de la lista de productos
