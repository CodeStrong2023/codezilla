// Función para cargar el modal desde el archivo modal.html
document.addEventListener('DOMContentLoaded', function () {
  fetch('/assets/html/modal.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('modal-container').innerHTML = data;

      // Una vez que el modal ha sido cargado, se asegura que funcione el botón "Ver detalles"
      inicializarBotonesProducto();
    })
    .catch(error => console.error('Error cargando el modal:', error));
});
