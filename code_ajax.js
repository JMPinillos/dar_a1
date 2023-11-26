let statesList = ['NO INICIALIZADA', 'ABIERTA', 'CABECERAS RECIBIDAS', 'CARGANDO', 'COMPLETADA'];
let initialTime = 0;

window.onload = function() {
  // Recogemos los valores de la URL
  let source = document.getElementById('code');

  // Asignamos el valor de la URL al campo de texto
  source.value = location.href;
  
  // Cuando hacemos click en el botón Mostrar Contenidos, llamamos a la función loadContent
  document.getElementById('enviar').onclick = loadContent;
  // Cuando hacemos click en el botón WEB, llamamos a la función showWEB
  document.getElementById('web').onclick = showWEB;
  // Cuando hacemos click en el botón HTML, llamamos a la función showHTML
  document.getElementById('html').onclick = showHTML;
}

function loadContent() {
  // Limpia datos previos
  document.getElementById("html").style.display = "none";
  document.getElementById('contenido').innerHTML = "";
  document.getElementById('estados').innerHTML = "";
  document.getElementById('codigo').innerHTML = "";
  document.getElementById('cabeceras').innerHTML = "";
  
  // Se instancia un objeto de la clase
  if(window.XMLHttpRequest) { 
    request = new XMLHttpRequest(); 
  }
  
  // Asigna la función de respuesta
  request.onreadystatechange = showContent; 
  
  // Petición
  initialTime = new Date(); // Guarda el tiempo inicial
  let source = document.getElementById('code').value; // Obtiene la fuente
  request.open('GET', source+'?nocache='+Math.random(), true); // Abre la conexión
  request.send(null); // Envía la petición
}

// Función de respuesta
function showContent() {
  let finalTime = new Date();
  let miliseconds = finalTime - initialTime;
  
  let states = document.getElementById('estados'); // Obtiene el elemento
  states.innerHTML += request.readyState +" - [" + miliseconds + " ms.] " + statesList[request.readyState] + "<br/>"; // Muestra el estado 
  
  if(request.readyState == 4 && request.status == 200) {
    let contents = document.getElementById('contenido'); // Obtiene el elemento
    contents.textContent = request.responseText // Muestra el contenido
    document.getElementById("web").style.display = "inline";  
    showHeaders();
    showStateCodes();
  }
}

function showHeaders() {
  let headers = document.getElementById('cabeceras'); // Obtiene el elemento
  headers.innerHTML = request.getAllResponseHeaders(); // Muestra los encabezados
}

function showStateCodes() { 
  let code = document.getElementById('codigo'); // Obtiene el elemento
  code.innerHTML = request.status + " " + request.statusText; // Muestra el código 
}

function showWEB() {
  
  document.getElementById("web").style.display = "none";
  document.getElementById("html").style.display = "inline";
  
  
  if(request.readyState == 4 && request.status == 200) {
    let contents = document.getElementById('contenido'); // Obtiene el elemento
      contents.innerHTML = request.responseText // Muestra el contenido
  }
}

function showHTML() {
  
  document.getElementById("html").style.display = "none";
  document.getElementById("web").style.display = "inline";
  
  if(request.readyState == 4 && request.status == 200) {
    let contents = document.getElementById('contenido'); // Obtiene el elemento
      contents.textContent = request.responseText // Muestra el contenido
  }
}