let nombre = prompt('Ingrese su nombre y apellido: ');
let cantidadDiasAlquilados = Number(prompt('Ingrese la cantidad de días que desea alquilar el vehiculo: '));
let montoDiaAlquiler = 2000;

for (let i = 1; i <= cantidadDiasAlquilados; i++) {
    let resultado = i * montoDiaAlquiler;
    alert(`Estimado ${nombre},
    Si alquila el vehiculo por ${i} día/s, el costo del alquiler del mismo es de: $${resultado}.- pesos.`)
}