//1
var num1 = 5;
var num2 = 10;
var suma = num1 + num2;
console.log(suma); 

//2 
var str1 = "Hola";
var str2 = "Mundo";
var concatenacion = str1 + str2;
console.log(concatenacion); 

//3
var str3 = "Hola";
var str4 = "Mundo";
var largoTotal = str3.length + str4.length;
console.log(largoTotal); 

//Strings

//a
var texto1 = "hola mundo";
var textoMayuscula = texto1.toUpperCase();
console.log(textoMayuscula);

//b

var texto2 = "abcdefghij";
var primerosCincoCaracteres = texto2.substring(0, 5);
console.log(primerosCincoCaracteres); 

//c
var texto3 = "abcdefghij";
var ultimosTresCaracteres = texto3.substring(texto3.length - 3);
console.log(ultimosTresCaracteres); 

//d

let texto4 = "sEBASTIAN mUSILLI";
let primeraLetraMayuscula = texto4.substring(0, 1).toUpperCase();
let restoDelTextoMinuscula = texto4.substring(1).toLowerCase();
let resultado = primeraLetraMayuscula + restoDelTextoMinuscula;
console.log(resultado); 

//e
let texto5 = "Hola mundo";
let posicionEspacioBlanco = texto5.indexOf(" ");
console.log(posicionEspacioBlanco); 

//array

//a 
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log(meses[4]); 
console.log(meses[10]); 

//b 
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

meses.sort();

console.log(meses);

//c
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

meses.unshift("Inicio"); 
meses.push("Fin"); 

console.log(meses);

//d

const meses = ["Inicio", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre", "Fin"];

meses.shift(); 
meses.pop(); 

console.log(meses);



//e

const meses5 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

meses.reverse();

console.log(meses5);

//f

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const resultado = meses.join('-');

console.log(resultado);

//g

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const copiaMeses = meses.slice(4, 11);

console.log(copiaMeses);


//if else

//a
const randomNumber = Math.random();

if (randomNumber >= 0.5) {
  alert("Greater than 0.5");
} else {
  alert("Lower than 0.5");
}

//b
const age = Math.floor(Math.random() * 101); 

if (age < 2) {
  alert("Bebe");
} else if (age >= 2 && age <= 12) {
  alert("Niño");
} else if (age >= 13 && age <= 19) {
  alert("Adolescente");
} else if (age >= 20 && age <= 30) {
  alert("Joven");
} else if (age >= 31 && age <= 60) {
  alert("Adulto");
} else if (age >= 61 && age <= 75) {
  alert("Adulto mayor");
} else {
  alert("Anciano");
}


//for

// Ejercicio 5a
const palabras = ["Seba", "Musilli", "UAI", "2023", "Ejemplo"];

for (let i = 0; i < palabras.length; i++) {
  alert(palabras[i]);
}

// Ejercicio 5b
for (let i = 0; i < palabras.length; i++) {
  const palabraModificada = palabras[i][0].toUpperCase() + palabras[i].substring(1);
  alert(palabraModificada);
}

// Ejercicio 5c
let sentence = "";
for (let i = 0; i < palabras.length; i++) {
  sentence += palabras[i] + " ";
}
alert(sentence);

// Ejercicio 5d
const numeros = [];
for (let i = 0; i < 10; i++) {
  numeros.push(i);
}
console.log(numeros);




//Funciones

// Ejercicio 6a
function suma(num1, num2) {
    return num1 + num2;
  }
  
  const resultadoSuma = suma(3, 5);
  console.log(resultadoSuma);
  
  // Ejercicio 6b
  function suma(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      alert("Error! Uno de los parámetros no es un número.");
      return NaN;
    }
    return num1 + num2;
  }
  
  // Ejercicio 6c
  function validateInteger(num) {
    return Number.isInteger(num);
  }
  
  // Ejercicio 6d
  function suma(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      alert("Error! Uno de los parámetros no es un número.");
      return NaN;
    }
    if (!validateInteger(num1) || !validateInteger(num2)) {
      alert("Error! Uno de los números no es entero.");
      return Math.round(num1) + Math.round(num2);
    }
    return num1 + num2;
  }
  
  // Ejercicio 6e
  function validateInteger(num) {
    return Number.isInteger(num);
  }
  
  function suma(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      alert("Error! Uno de los parámetros no es un número.");
      return NaN;
    }
    if (!validateInteger(num1) || !validateInteger(num2)) {
      alert("Error! Uno de los números no es entero.");
      return Math.round(num1) + Math.round(num2);
    }
    return num1 + num2;
  }
  