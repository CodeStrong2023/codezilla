// cargarModal.js
// Este script se encarga de cargar el contenido del modal desde un archivo HTML externo (modal.html) y lo inserta en el contenedor definido en el DOM. 
// Además, inicializa los botones relacionados con los productos para que puedan interactuar adecuadamente después de que se haya cargado el modal.

// Función para cargar el modal desde el archivo modal.html
document.addEventListener('DOMContentLoaded', function () {
  console.log("Cargando el contenido del modal...");
  fetch('/assets/html/modal.html')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error al cargar el modal: ${response.status}`); // Manejo de errores de respuesta
      }
      return response.text();
    })
    .then(data => {
      document.getElementById('modal-container').innerHTML = data;
      console.log("Contenido del modal cargado exitosamente.");

    })
    .catch(error => console.error('Error cargando el modal:', error));
});
