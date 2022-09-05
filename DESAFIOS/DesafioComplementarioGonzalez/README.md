En este desafío busque simular una consulta de un presupuesto para alquilar un vehiculo.
Primero la persona ingresa su nombre y su apellido.
Segundo, ingresa la cantidad de días que pretende alquilar el vehiculo.
Tercero, a través de una variable defini cuanto cuesta el día de alquiler.
Definidas las variables, hice un bucle FOR para que me devuelva a través de un ALERT cuanto costaría alquilar un auto en función de los días alquilados. 

let nombre = prompt('Ingrese su nombre y apellido: ');
let cantidadDiasAlquilados = Number(prompt('Ingrese la cantidad de días que desea alquilar el vehiculo: '));
let montoDiaAlquiler = 2000;

for (let i = 1; i <= cantidadDiasAlquilados; i++) {
    let resultado = i * montoDiaAlquiler;
    alert(`Estimado ${nombre},
    Si alquila el vehiculo por ${i} día/s, el costo del alquiler del mismo es de: $${resultado}.- pesos.`)
}