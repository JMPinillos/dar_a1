function ejer1() {
  // Capturamos la cadena del campo de texto
  let cadena = document.getElementById("ejercicio1").value;

  // Comprobamos que se ha introducido algo en el formulario
  if(cadena == "") {
    document.getElementById("resultado1").textContent = "Por favor, introduce algo de texto.";
    document.getElementById("resultado1").style.color = "red";
  } else {
    // Eliminamos espacios y convertios a minúsculas
    cadena = cadena.replace(/\s/g, "").toLowerCase();
    
    // Comparamos la cadena original con la cadena invertida
    if(cadena === cadena.split("").reverse().join("")) {
      document.getElementById("resultado1").textContent = "Es palindromo.";
      document.getElementById("resultado1").style.color = "black";
    }else{
      document.getElementById("resultado1").textContent = "No es palindromo.";
      document.getElementById("resultado1").style.color = "black";
    }
  }
}

function ejer2() {
  // Capturamos los números de los campos de texto
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;

  // Comprobamos que se ha introducido algo en el formulario
  if(num1 == "" || num2 == "") {
    document.getElementById("resultado2").textContent = "Por favor, introduzca números.";
    document.getElementById("resultado2").style.color = "red";
  } else {   

    // Comparamos si los números son iguales
    if(num1 == num2) {
      document.getElementById("resultado2").textContent = "Los números son iguales.";
      document.getElementById("resultado2").style.color = "black";
    }else{
      // Comparamos los números y sacamos el mayor
      if(num1 < num2) {
        document.getElementById("resultado2").textContent = num2 + " es el número mayor.";
        document.getElementById("resultado2").style.color = "black";
      }else{
        document.getElementById("resultado2").textContent = num1 + " es el número mayor.";
        document.getElementById("resultado2").style.color = "black";
      }
    }
  }
}

function ejer3() {
  // Capturamos la cadena del campo de texto
  let cadena = document.getElementById("ejercicio3").value;
  
  // Eliminamos signos de acentuación de las vocales
  cadena=sinSignos(cadena);
  
  // Eliminamos espacios y convertios a minúsculas 
  cadena = cadena.replace(/\s/g, "").toLowerCase();
  cadena.split("");
  
  // Comprobamos que se ha introducido algo en el formulario
  if(cadena == "") {
    document.getElementById("resultado3").textContent = "Por favor, introduce algo de texto.";
    document.getElementById("resultado3").style.color = "red";
  } else {
       
    const vocales = "aeiou";
    texto = "";
    
    for (const letra of cadena) {
      
      if (vocales.includes(letra)) {
        texto = texto + letra;
      }
    }
    document.getElementById("resultado3").textContent = texto;
    document.getElementById("resultado3").style.color = "black";
    }
  }

function ejer4() {
  // Capturamos la cadena del campo de texto
  let cadena = document.getElementById("ejercicio4").value;

  // Eliminamos signos de acentuación de las vocales
  cadena=sinSignos(cadena);
  
  // Eliminamos espacios y convertios a minúsculas 
  cadena = cadena.replace(/\s/g, "").toLowerCase();

  // Comprobamos que se ha introducido algo en el formulario
  if(cadena == "") {
    document.getElementById("resultado4").textContent = "Por favor, introduce algo de texto.";
    document.getElementById("resultado4").style.color = "red";
  } else {
       
    let a=0, e=0, i=0, o=0, u=0;

    for (const texto of cadena) {
      
      if (texto.includes("a")) {
        a++;
      }
        
      if (texto.includes("e")) {
        e++;
      }

      if (texto.includes("i")) {
        i++;
      }

      if (texto.includes("o")) {
        o++;
      }

      if (texto.includes("u")) {
        u++;
      }
    }
    
    if (a == 0 && e == 0 && i == 0 && o == 0 && u == 0) {
      document.getElementById("resultado4").textContent = "El texto no contiene vocales.";
      document.getElementById("resultado4").style.color = "black";
    }else {
    document.getElementById("resultado4").textContent = "La 'A' aparece " + a + " veces.\n"+
    "La 'E' aparece " + e + " veces.\n"+
    "La 'I' aparece " + i + " veces.\n"+
    "La 'O' aparece " + o + " veces.\n"+
    "La 'U' aparece " + u + " veces.\n";
    document.getElementById("resultado4").style.color = "black";
    }
  }
}

  // Función que elimina signos de acentuación
  let sinSignos = (function(){
    let de = 'ÁÃÀÄÂÉËÈÊÍÏÌÎÓÖÒÔÚÜÙÛÑáãàäâéëèêíïìîóöòôúüùû',
         a = 'AAAAAEEEEIIIIOOOOUUUUNaaaaaeeeeiiiioooouuuu',
        re = new RegExp('['+de+']' , 'ug');

    return texto =>
        texto.replace(
            re, 
            match => a.charAt(de.indexOf(match))
        );
})();
