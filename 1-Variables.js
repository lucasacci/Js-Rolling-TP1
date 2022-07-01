// Primer ejercicio

//alert("Un mensaje");

// Segundo ejercicio

//document.write("Hello World");

// Tercer ejercicio

//console.log(3 + 5);

// cuarto ejercicio

//let a = prompt("Ingrese el nombre de usuario: ");
//console.log("Hola",a);

// Quinto ejercicio

// let a = parseInt(prompt("Ingrese el primer numero: "));
// let b = parseInt(prompt("Ingrese el segundo numero: "));
// console.log("El resultado es: %d",(a+b));

// sexto ejercicio

/* let a = parseInt(prompt("Ingrese el primer numero: "));
 let b = parseInt(prompt("Ingrese el segundo numero: "));

 if (a > b){
    document.write("El primer numero es mayor");
    console.log("El primer numero es mayor");
 }
 else{
    document.write("El segundo numero es mayor");
    console.log("El segundo numero es mayor");
 }
 */

// ejercicio 7

/* 
 let a = parseInt(prompt("Ingrese el primer numero: "));
 let b = parseInt(prompt("Ingrese el segundo numero: "));
 let c = parseInt(prompt("Ingrese el tercer numero: "));

 if (a > b && a > c){
    document.write("El primer numero es mayor");
    console.log("El primer numero es mayor");
 }
 else if(b > c){
    document.write("El segundo numero es mayor");
    console.log("El segundo numero es mayor");
 }
 else {
    document.write("El tercer numero es mayor");
    console.log("El tercer numero es mayor");
 }
 */

// ejercicio 8
/*
let a = parseInt(prompt("Ingrese el numero: "));

if (a % 2 === 0) {
  console.log(`El numero es par`);
  document.write(`El numero es par`);
} else {
  console.log(`El numero es impar`);
  document.write(`El numero es impar`);
}
*/

// ejercicio 9

/*
let text = prompt("Escribe una frase");
let nText = text.length;
let i;
for (i = 0; i < nText; i++) {
  if (
    text.substr(i, 1) === "a" ||
    text.substr(i, 1) === "e" ||
    text.substr(i, 1) === "i" ||
    text.substr(i, 1) === "o" ||
    text.substr(i, 1) === "u"
  ) {
    document.write(text.substr(i, 1));
  }
}
*/

// ejercicio 10

/*

let a = parseInt(prompt("Ingrese el numero: "));

if (a % 2 === 0 || a % 3 === 0 || a % 5 === 0 || a % 7 === 0) {
   document.write("Es divisible por 2, 3, 5 o 7");
   } else {
   document.write("No es divisible ni por 2, ni por 3, ni por 5, ni por 7");
   }

*/

// ejercicio 11

/*

let a = parseInt(prompt("Ingrese el numero: "));

if (a % 2 === 0 || a % 3 === 0 || a % 5 === 0 || a % 7 === 0) {
   if(a % 2 == 0){
      document.write(`El numero es divisible por 2`);
   }
   else if(a % 3 == 0){
      document.write(`El numero es divisible por 3`);
   }
   else if(a % 5 == 0){
      document.write(`El numero es divisible por 5`);
   }
   else if(a % 7 == 0){
      document.write(`El numero es divisible por 7`);
   }
   else{
      document.write(`El numero no es divisible por 2,3,5,7`);
   }
}

*/