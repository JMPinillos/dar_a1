let statesList = ['NO INICIALIZADA', 'ABIERTA', 'CABECERAS RECIBIDAS', 'CARGANDO', 'COMPLETADA'];
let initialTime = 0;

window.onload = function() {
  // Cargar valores por defecto
  let source = document.getElementById('source');
  //Otra alternativa:
  //source.value = 'https://mindicador.cl/api/dolar';
  source.value = location.href;// Carga la URL actual
  
  // Carga el contenido cuando se hace click en el botón Mostrar Contenidos
  document.getElementById('send').onclick = loadContent;
}

function loadContent() {
  // Limpia datos previos
  document.getElementById('contents').innerHTML = "";
  document.getElementById('states').innerHTML = "";
  document.getElementById('code').innerHTML = "";
  document.getElementById('headers').innerHTML = "";
  
  // Se instancia un objeto de la clase
  if(window.XMLHttpRequest) { 
    request = new XMLHttpRequest(); 
  }
  
  // Asigna la función de respuesta
  request.onreadystatechange = showContent; 
  
  // Petición
  initialTime = new Date(); // Guarda el tiempo inicial
  let source = document.getElementById('source').value; // Obtiene la fuente
  request.open('GET', source+'?nocache='+Math.random(), true); // Abre la conexión
  request.send(null); // Envía la petición
}

// Función de respuesta
function showContent() {
  let finalTime = new Date();
  let miliseconds = finalTime - initialTime;
  
  let states = document.getElementById('states'); // Obtiene el elemento
  states.innerHTML += request.readyState +" - [" + miliseconds + " ms.] " + statesList[request.readyState] + "<br/>"; // Muestra el estado 
  
  if(request.readyState == 4 && request.status == 200) {
    let contents = document.getElementById('contents'); // Obtiene el elemento
      contents.innerHTML = request.responseText // Muestra el contenido
    showHeaders();
    showStateCodes();
  }
}

function showHeaders() {
  let headers = document.getElementById('headers'); // Obtiene el elemento
  headers.innerHTML = request.getAllResponseHeaders(); // Muestra los encabezados
}

function showStateCodes() { 
  let code = document.getElementById('code'); // Obtiene el elemento
  code.innerHTML = request.status + " " + request.statusText; // Muestra el código 
}