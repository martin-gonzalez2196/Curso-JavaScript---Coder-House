//CLASE 3: ACTIVIDAD 1: EL PIZARRON.
/*Solicitar al usuario un (1) un número y un (1) texto. Efectuar una salida por alerta con el mensaje ingresado 
por cada repetición, hasta alcanzar el valor señalado por el usuario.*/
/*
let pedirNumero = Number(prompt('Ingrese un numero: '));
let pedirTexto = prompt('Ingrese un texto: ');

for (let i = 0; i < pedirNumero; i++) {
    if (i <= pedirNumero) {
        alert(`${pedirTexto} se repite: ${pedirNumero} veces.`)
    } else {
        alert('error');
    }
}*/

/*
let cantidad = prompt('INGRESAR CANTIDAD DE REPETICIONES');
let texto    = prompt('INGRESAR TEXTO A REPETIR');
for (let index = 0; index < cantidad; index++) {
    alert(texto);
}*/

// ACTIVIDAD 2: EL CUADRADO ORDINARIO.
/* Solicitar al usuario un (1) un número. Emplear este valor para determinar la cantidad de repeticiones, 
y efectuar una salida por alerta con el mensaje “lado” en cada repetición. 
Pero si se alcanza un número de iteraciones mayor que cuatro (4), cancelar el ciclo.*/
/*
let numero = Number(prompt('Ingrese un numero: '));

for (let i = 1; i <= numero; i++) {
    if (numero > 4) {
        break;
    } alert('lado');
}*/

/* RESOLUCIÓN QUE DIERON ELLOS.  
let lados = prompt('INGRESAR CANTIDAD DE LADOS');
for (let index = 0; index < lados; index++) {
    if (index > 3) {
    break;
    }
    alert("lado");
}*/

// ACTIVIDAD 3: REGISTRO DE ALUMNOS.
/*Solicitar al usuario la carga de diez (10) alumnos de forma consecutiva.
Luego realizar un única salida por alerta, con el listado de alumnos registrados.*/
/*
let listado = ' '
for (let i = 1; i <= 10; i++) {
    listado += prompt('Nombre del alumno: ');
} alert(`Listado de Alumnos registrados: ${listado} +"\n"`);*/

//PREGUNTAR SI HAY UNA FORMA DE DEVOLVER EL LISTADO ENUMERADO!!!!!!!!!!
//PREGUNTAR PORQUE SE NECESITA LA VARIABLE ACUMULADOR!!!!!!!

/* RESOLUCIÓN QUE DIERON ELLOS.  
let alumnos = '';
for (let index = 0; index < 10; index++) {
    alumnos += prompt("INGRESAR NOMBRE DE ALUMNO")+"\n";
}
alert(alumnos);*/

// ACTIVIDAD 4: EL INNOMBRABLE.
/* Solicitar al usuario la carga de nombres de forma consecutiva,  hasta que se ingrese “Voldemort”.
Luego realizar un única salida por alerta, con todos los nombres ingresados.

let ingreseNombres = prompt('Ingrese un nombre: ');
let nombres = '';
while (ingreseNombres != 'Voldemort') { //→ esta sería la condición de frenado.
	nombres += ingreseNombres + '\n';
    ingreseNombres = prompt('Ingrese un nombre: '); //ESTO ES PORQUE SE CORTA EL PEDIDO Y HAY QUE VOLVER A PEDIR?
} alert(nombres);
*/

// ACTIVIDAD 5: COMPRANDO PRODUCTOS.
/* Solicitar al usuario un (1) número de forma consecutiva, hasta que se ingrese “ESC”. 
Generar una única salida compuesta por los siguientes productos, según el valor ingresado en cada ciclo:
“Tomate” si es 1.
“Papa” si es 2.
“Carne” si es 3.
“Pollo” si es 4.*/
/*
let numero = Number(prompt('Ingrese un numero: '));
while (numero != 'ESC') {
        switch(numero) {
        case 1:
            alert('Tomate');
            break;
        case 2:
            alert('Papa');
            break;
        case 3:
            alert('Carne');
            break;
        case 4:
            alert('Pollo');
            break;
        default:
            alert("Error");
            break;
        }
        numero = Number(prompt('Ingrese un numero: '));
}*/

