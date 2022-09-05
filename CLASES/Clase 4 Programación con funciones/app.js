/*let resultado = 0;
function sumar(numero1, numero2) {
    resultado = numero1 + numero2;
}
sumar(2,2);
console.log(resultado);*/

//porque toma los valores de la función, 
//si están definidos en el scope local y no en el global??

// ACTIVIDAD 1: ENTRADAS Y SALIDAS.
/* Codificar tres funciones:
Una función entrada(), la cual solicite un valor al usuario y lo retorne.
Una función procesamiento(valor), donde se transforme la entrada.
Una función salida(valor), la cual mostrará el resultado por alerta.
Luego, invocar las tres funciones.
La actividad propone agrupar en funciones las instrucciones de 
1) entrada. 2) procesamiento, y 3) salida. 
La llamada de las funciones debe coincidir con dicho orden.*/
/*
function entrada() {
    return prompt('Ingrese un numero: ');
}

function procesamiento(valor) {
        return `El nro ingresado: ${valor}.`;
}

function salida(valor) {
    return valor;
}
alert(salida(procesamiento(entrada())));*/

//ACTIVIDAD 2: REDONDEO.
/*Codificar una función que reciba un número decimal por parámetro, y lo retorne redondeado al entero más cercano. 
Para ello, puede emplearse Math.round.
Luego invocar la función de forma iterativa cinco (5) veces, solicitando en cada ciclo un número al usuario.*/
/*
function redondeo(decimal) {
    return Math.round(decimal);
}

for (let i = 0; i < 5; i++) {
    let entrada = parseFloat(prompt('Ingrese un numero decimal: '));
    alert(redondeo(entrada));
}*/

//ACTIVIDAD 3: IMPUESTOS.
/*Codificar una función con la siguiente cabecera: impuesto(precio, porcentaje). 
En ella, se retorna un valor numérico compuesto por el precio recibido, más la suma del porcentaje ingresado.
Luego invocar la función de forma iterativa cinco (5) veces, solicitando en cada ciclo un precio y porcentaje al usuario.

Un impuesto es la suma de un monto al precio inicial. Buscamos calcular en la función el porcentaje sobre dicho precio, y sumarlo; 
por ejemplo: si el precio es 100, el 20% es 20, entonces el precio final es 100+20 = 120.*/
/*
function impuesto(precio,porcentaje) {
    return precio + (precio * porcentaje)/100;
}

for (let i = 0; i < 5; i++) {
    let entrada = Number(prompt('Ingrese un precio: '));
    let entrada2 = Number(prompt('Ingrese un porcentaje: '));
    alert(impuesto(entrada, entrada2));
}*/

// COMO LO RESOLVIERON ELLOS.
/*function impuesto(precio, porcentaje){
    return precio + ((precio * porcentaje)/100)
}
for (let index = 0; index < 5; index++) {
    let resultado = impuesto(parseFloat(prompt("INGRESAR PRECIO")),parseFloat(prompt("INGRESAR %")));
    alert(resultado);
}*/

// ACTIVIDAD 4: COTIZACIÓN.
/*Codificar dos funciones:
Una función cotizarDolar(pesos), la cual recibe un valor monetario en pesos argentinos, y lo retorna en su equivalente en dólares.
Una función cotizarPesos(dolar), que recibe un valor monetario en dólares, y lo retorna en su equivalente en pesos argentinos.
Luego invocar las funciones solicitando al usuario el valor y el tipo de cotización a realizar.*/
/*
//cotización dolar hoy = 300.
const dolarHoy = 300;

//para saber cuantos dolares son: pesos que tenes / dolar que cotiza hoy = dolares
function cotizarDolar(pesos) {
    return pesos / 300;
}

//para saber cuantos pesos son: dolares que tenes * dolar que cotiza hoy = pesos
function cotizarPesos(dolar) {
    return dolar * 300;
}

let cotizar = (prompt('Seleccione las siguientes opciones: \n 1. PESO/DOLAR. \n 2. DOLAR/PESO.'));
let cuanto = parseFloat(prompt('Ingrese el monto: '));

switch(cotizar) {
    case '1':
        alert(cotizarDolar(cuanto));
        break;
    case '2':
        alert(cotizarPesos(cuanto));
        break;
    default:
        alert('ERROR');
        break;
    }
*/
//ACTIVIDAD 5: VALIDACIÓN.
/*Codificar una función con la siguiente cabecera: validacion(cadena). En ella, se retorna un valor booleano, 
el cual es true si el parámetro no es un cadena vacía. Caso contrario, se retorna false. 
Luego invocar la función de forma iterativa, hasta que el usuario tipee “ESC”, solicitando en cada ciclo una cadena a validar.
Es común emplear funciones para validar si un valor recibido por parámetro cumple con cierto formato. 
La comparación de cadena vacía es (cadena != ‘’)*/
/*
function validacion(cadena) {
    if (cadena != '') {
        return true;
    } else {
        return false;
    }
}
let entrada = prompt('salude: ');
while (cadena != 'ESC' || cadena != 'esc') {
    alert(validacion(entrada));
    entrada = prompt('salude: ');
} 

// ASÍ LO RESOLVIERON ELLOS (NO SE PORQUE NO TOMA EL QUE HICE YO!!)
function validacion(cadena){
    return cadena != '';
}
let entrada =  prompt("INGRESAR CADENA");
while (entrada != 'ESC') {
    alert(validacion(entrada));
    entrada = prompt("INGRESAR CADENA");
}*/

