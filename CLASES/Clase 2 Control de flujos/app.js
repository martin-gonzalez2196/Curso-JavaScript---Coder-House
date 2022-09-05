//BOOKLET
// Actividad 1: Yo no fui.
//Solicitar al usuario un (1) nombre.
//Si el mismo es igual a otro nombre almacenado en una variable, realizar una salida por alerta 
//con el mensaje “Fui yo”. 
//Caso contrario, la salida será “Yo no fui”.
/*let nombreIngresado = prompt('Ingrese su nombre: ')
const nombre = 'martin';
if (nombreIngresado !== nombre) {
    alert('Yo no fui');
} else {
    alert('Fui yo');
}

// Actividad 2: Presionar Y
//Solicitar al usuario una (1) tecla.
//Si se presiona “y” (minúscula), o “Y” (mayúscula), realizar una salida por alerta con el mensaje “Correcto”. 
//Caso contrario, la salida será “Error”.

let ingresarY = prompt('Ingrese una letra: ');
if (ingresarY === 'y' || ingresarY === 'Y') {
    alert('Correcto');
} else {
    alert('Error');
}*/

// Actividad 3: Escoger personajes.
/*Solicitar al usuario un (1) un número.
Si el valor está entre 1 y 4, efectuar una de las siguientes salidas según corresponda: 
“Elegiste a Homero” si es 1.
“Elegiste a Marge” si es 2.
“Elegiste a Bart” si es 3.
“Elegiste a Lisa” si es 4.

let pedirNumero = Number(prompt('Ingrese un numero: '));
if (pedirNumero === 1) {
    alert('Elegiste a Homero');
} else if (pedirNumero === 2) {
    alert('Elegiste a Marge');
} else if (pedirNumero === 3) {
    alert('Elegiste a Bart');
} else if (pedirNumero === 4) {
    alert('Elegiste a Lisa');
}*/

// Actividad 4: Presupuesto.
/* Solicitar al usuario un (1) número.
Si el valor está entre dos números, efectuar una de las siguientes salidas, según corresponda: 
“Presupuesto bajo” si está entre 0 y 1000.
“Presupuesto medio” si está entre 1001 y 3000.
“Presupuesto alto” si es  mayor que 3000.

let numero = Number(prompt('Ingrese numero: '));
if (numero > 0 && numero < 1000) {
    alert('Presupuesto bajo');
} else if (numero > 1001 && numero < 3000) {
    alert('Presupuesto medio');
} else if (numero > 3000) {
    alert('Presupuesto alto');
}*/

// Actividad 5: Vacío.
/*Solicitar al usuario cuatro (4) productos de almacén. Si todos los elementos fueron cargados, 
realizar una única salida compuesta por el listado de productos. 
Caso contrario, la salida será “Error: Es necesario cargar todos los productos”.

let producto1 = prompt('Ingrese producto 1: ');
let producto2 = prompt('Ingrese producto 2: ');
let producto3 = prompt('Ingrese producto 3: ');
let producto4 = prompt('Ingrese producto 4: ');

if ((producto1 != '') && (producto2 != '') && (producto3 != '') && (producto4 != '')) {
    alert('1) ' + producto1 + ' 2) ' + producto2 + ' 3) ' + producto3 + ' 4) ' + producto4);
} else {
    alert('Error: Es necesario cargar todos los productos');
} */

// ACTIVIDAD DE CLASE: CREAR UN ALGORITMO CON UN CONDICIONAL
//Pedir número mediante prompt y si es mayor a 1000 mostrar un alert.
//Pedir un texto mediante prompt, y si es igual a 'Hola' mostrar un alerta por consola.
//Pedir un número por prompt y evaluar si está entre 10 y 50. En caso positivo mostrar un alert.
/*
let numero1 = Number(prompt('Ingrese un número: '));

if (numero1 > 1000) {
    alert('mayor a 1000')
} else {
    alert('menor a 1000')
}

let texto = prompt('Ingrese texto: ');

if (texto === 'Hola') {
    alert('Ingresó Hola');
} else {
    alert('Ingresó otra cosa');
}

let numero2 = Number(prompt('Ingrese numero: '));
if ((numero2 > 10) && (numero2 < 50)) {
    alert('Está entre esos valores');
} else {
    alert('Está por fuera de esos numeros');
}*/

//CLASE 3: ACTIVIDAD 1: EL PIZARRON.
/*Solicitar al usuario un (1) un número y un (1) texto. Efectuar una salida por alerta con el mensaje ingresado 
por cada repetición, hasta alcanzar el valor señalado por el usuario.

let texto = prompt('Ingrese su nombre: ');
let numero = Number(prompt('Ingrese un numero: '));

for (let i = 0; i < numero; i++) {
    alert(`${texto} se repite ${numero} veces.`);
}*/
