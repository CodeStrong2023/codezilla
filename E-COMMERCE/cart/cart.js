// Función para renderizar los elementos del carrito
function renderCart() {
  console.log("Iniciando renderCart...");

  const cartItemsContainer = document.getElementById("cart-items");
  const cartSummaryContainer = document.getElementById("cart-summary");

  let carrito = obtenerCarrito();
  console.log("Carrito obtenido:", carrito);

  cartItemsContainer.innerHTML = "";
  cartSummaryContainer.innerHTML = "";

  if (carrito.length === 0) {
    console.log("El carrito está vacío.");
    cartItemsContainer.innerHTML = "<p>El carrito está vacío.</p>";
    return 0; // Si el carrito está vacío, el total es 0
  }

  let total = 0;

  // Renderizar cada producto en el carrito
  carrito.forEach((producto, index) => {
    const subtotal = producto.precio * producto.cantidad;
    console.log(`Producto ${index}:`, producto, "Subtotal:", subtotal);

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

  console.log("Total del carrito:", total);

  // Resumen del carrito
  cartSummaryContainer.innerHTML = `
      <h4>Total: $${total.toFixed(2)}</h4>
  `;

  return total; // Retornamos el total calculado
}

// Función para actualizar la cantidad de un producto
function actualizarCantidad(index, change) {
  console.log(`Actualizando cantidad para el producto en índice ${index} con cambio de cantidad: ${change}`);

  let carrito = obtenerCarrito();
  carrito[index].cantidad += change;

  if (carrito[index].cantidad <= 0) {
    console.log("Cantidad es 0 o menor, eliminando producto del carrito.");
    carrito.splice(index, 1); // Elimina el producto si la cantidad es 0
  }

  guardarCarrito(carrito);
  console.log("Carrito después de actualizar cantidad:", carrito);
  renderCart();
}

// Función para eliminar un producto del carrito
function eliminarProducto(index) {
  console.log(`Eliminando producto en índice ${index}`);

  let carrito = obtenerCarrito();
  carrito.splice(index, 1);
  guardarCarrito(carrito);

  console.log("Carrito después de eliminar producto:", carrito);
  renderCart();
}

// Inicializa el SDK de Mercado Pago
const mp = new MercadoPago('APP_USR-980da1ea-e319-449d-a161-b8e6c005386e', {
  locale: 'es-AR',
});
console.log("SDK de Mercado Pago inicializado con la clave de acceso.");

// Proceder al pago
document.getElementById("checkout-btn").addEventListener("click", async () => {
  try {
    console.log("Iniciando proceso de checkout...");

    const total = renderCart(); // Obtenemos el total calculado al renderizar el carrito
    console.log("Total a pagar:", total);

    if (total <= 0) {
      alert("El total no es válido.");
      console.log("El total es 0 o menor, deteniendo el proceso de checkout.");
      return;
    }

    // Crear el objeto de datos del pedido
    const orderData = {
      items: obtenerCarrito().map(producto => ({
        title: producto.nombre,
        quantity: producto.cantidad,
        unit_price: parseFloat(producto.precio), // Aseguramos que sea un número
        currency_id: "ARS"
      })),
    };
    console.log("Datos del pedido enviados a la API de Mercado Pago:", orderData);

    // Hacer la solicitud para crear la preferencia en Mercado Pago
    const response = await fetch("http://localhost:3000/create_preference", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(orderData)
    });

    const preference = await response.json();
    console.log("Respuesta de la API de Mercado Pago:", preference);

    // Verificamos si hay un error en la respuesta
    if (preference.error) {
      alert("Hubo un error al crear la preferencia: " + preference.error);
      console.log("Error al crear la preferencia:", preference.error);
      return;
    }

    createCheckoutButton(preference.id);

  } catch (error) {
    alert("Error en la solicitud de checkout:", error);
    console.error("Error en el proceso de checkout:", error);
  }
});

// Función para crear el botón de pago
const createCheckoutButton = (preferenceId) => {
  console.log("Intentando crear el botón de checkout con preferenceId:", preferenceId);

  // Verificar si ya existe el botón de pago en el contenedor
  if (window.checkoutButton) {
    console.log("El botón de checkout ya ha sido creado. No se generará otro.");
    return; // Si ya existe, no creamos uno nuevo
  }

  const bricksBuilder = mp.bricks();

  const renderComponent = async () => {
    console.log("Renderizando componente del botón de pago...");

    // Crear y montar el botón de pago
    window.checkoutButton = await bricksBuilder.create("wallet", "wallet_container", {
      initialization: {
        preferenceId: preferenceId,
        redirectMode: 'modal',
      },
      customization: {
        texts: {
          valueProp: 'smart_option',
        },
      },
    });

    console.log("Botón de checkout creado con éxito.");
  };

  renderComponent();
};


// Cargar el carrito cuando se abre la página
document.addEventListener("DOMContentLoaded", () => {
  console.log("Página cargada, renderizando carrito...");
  renderCart();
});
