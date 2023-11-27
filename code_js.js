function ejer1() {
  // Capturamos la cadena del campo de texto
  let cadena = document.getElementById("ejercicio1").value;

  // Comprobamos que se ha introducido algo en el formulario
  if(cadena == "") {
    document.getElementById("resultado1").innerHTML = `<b style="color:red">Por favor, introduce algo de texto.</b>`;
  } else {
    // Eliminamos espacios y convertios a minúsculas
    cadena = cadena.replace(/\s/g, "").toLowerCase();
    
    // Comparamos la cadena original con la cadena invertida
    if(cadena === cadena.split("").reverse().join("")) {
      document.getElementById("resultado1").textContent = "Es palindromo.";
    }else{
      document.getElementById("resultado1").textContent = "No es palindromo.";
    }
  }
}

function ejer2() {
  // Capturamos los números de los campos de texto
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;

  // Comprobamos que se ha introducido algo en el formulario
  if(num1 == "" || num2 == "") {
    document.getElementById("resultado2").innerHTML = `<b style="color:red">Por favor, introduzca dos números.</b>`;
  } else {   

    // Comparamos si los números son iguales
    if(num1 == num2) {
      document.getElementById("resultado2").textContent = "Los números son iguales.";
    }else{
      // Comparamos los números y sacamos el mayor
      if(num1 < num2) {
        document.getElementById("resultado2").innerHTML = `<b>${num2}</b> es el número mayor.`;
      }else{
        document.getElementById("resultado2").innerHTML = `<b>${num1}</b> es el número mayor.`;
      }
    }
  }
}

function ejer3() {
  // Capturamos la cadena del campo de texto
  let cadena = document.getElementById("ejercicio3").value;
  
  // Eliminamos signos de acentuación de las vocales
  cadena = sinSignos(cadena);
  
  // Eliminamos espacios y convertios a minúsculas 
  cadena = cadena.replace(/\s/g, "").toLowerCase();
  
  // Comprobamos que se ha introducido algo en el formulario
  if(cadena == "") {
    document.getElementById("resultado3").innerHTML = `<b style="color:red">Por favor, introduce algo de texto.</b>`;
  } else {
       
    const vocales = "aeiou";
    texto = "";
    
    for (const letra of cadena) {
      
      if (vocales.includes(letra)) {
        texto = texto + letra + " ";
      }
    }
    document.getElementById("resultado3").innerHTML = `<b>${texto}</b>`;
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
    document.getElementById("resultado4").innerHTML = `<b style="color:red">Por favor, introduce algo de texto.</b>`;
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
    }else {
    document.getElementById("resultado4").innerHTML = `La <b>A</b> aparece ${a} veces.<br/>
    La <b>E</b> aparece ${e} veces.<br/>
    La <b>I</b> aparece ${i} veces.<br/>
    La <b>O</b> aparece ${o} veces.<br/>
    La <b>U</b> aparece ${u} veces.`;
    }
  }
}

  // Función que elimina signos de acentuación
let sinSignos = (function(){
  // Definición de caracteres acentuados y sus equivalentes sin acento
  let de = 'ÁÃÀÄÂÉËÈÊÍÏÌÎÓÖÒÔÚÜÙÛÑáãàäâéëèêíïìîóöòôúüùû',
       a = 'AAAAAEEEEIIIIOOOOUUUUNaaaaaeeeeiiiioooouuuu',
      re = new RegExp('['+de+']' , 'ug');

  // Retorno de la función que realiza el reemplazo de caracteres
  return texto =>
    texto.replace(
      re, 
      match => a.charAt(de.indexOf(match))
    );
})();
