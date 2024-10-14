// Función para cargar el contenido del header y footer

function includeHTML() {
    var elements = document.querySelectorAll('[data-include]');
    
    elements.forEach(function(element) {
      var file = element.getAttribute('data-include');
      if (file) {
        fetch(file)
          .then(response => response.text())
          .then(data => {
            element.innerHTML = data;
          })
          .catch(err => console.log('Error:', err));
      }
    });
  }
  
  // Llamada a la función al cargar la página
  window.onload = includeHTML;
  