// Función para mostrar detalles del producto en un modal
function mostrarProducto(titulo, descripcion, imagen, precio) {
  // Cambiar el contenido del modal dinámicamente
  document.getElementById('productoModalLabel').innerText = titulo;
  document.getElementById('productoDescripcion').innerText = descripcion;
  document.getElementById('productoImagen').src = imagen;
  document.getElementById('productoPrecio').innerText = precio;

  // Mostrar el modal
  var productoModal = new bootstrap.Modal(document.getElementById('productoModal'));
  productoModal.show();
}
