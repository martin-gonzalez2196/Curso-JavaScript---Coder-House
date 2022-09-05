//COMO ALQUILAR UN AUTO.

let resultado = 0;

function reserva() {
    let nombre = '';
    let categoria = 0;
    let dias = 0;
    let descuento = 0;

    nombre = prompt('Ingrese su nombre y apellido: ');
    seleccioneCategoria = Number(prompt('Seleccione la categoría de vehiculo que desea alquilar: \n 1. Categoría A ($3.000 x día).\n 2. Categoría B ($2.000 x día).\n 3. Categoría C ($1.000 x día).'));

    switch(seleccioneCategoria) {
        case 1:
            alert(`La tarifa de la categoría A es de $${categoria}.- pesos por día.\nSi la reserva supera los 7 días, cuenta con una bonificación del 20%.`)
            categoria = 3000;
            dias = Number(prompt('Indique la cantidad de días que desea alquilar el vehículo: '));
            tarifaFinal = montoReserva(categoria,dias);
            if (dias > 7) {
                descuento = tarifaFinal - (tarifaFinal * 0.2);
                alert(`Sr/Sra. ${nombre}.\nAl realizar una reserva superior a los 7 días, la tarifa final es de: $${descuento}.-`);
            } else {
                alert(`Sr/Sra. ${nombre}.\nSu tarifa final es de: $${tarifaFinal}.-`);
            }
        break;
        case 2:
            alert(`La tarifa de la categoría B es de $${categoria}.- pesos por día.\nSi la reserva supera los 7 días, cuenta con una bonificación del 20%.`)
            categoria = 2000;
            dias = Number(prompt('Indique la cantidad de días que desea alquilar el vehículo: '));
            tarifaFinal = montoReserva(categoria,dias);
            if (dias > 7) {
                descuento = tarifaFinal - (tarifaFinal * 0.2);
                alert(`Sr/Sra. ${nombre}.\nAl realizar una reserva superior a los 7 días, la tarifa final es de: $${descuento}.-`);
            } else {
                alert(`Sr/Sra. ${nombre}.\nSu tarifa final es de: $${tarifaFinal}.-`);
            }
        break;
        case 3:
            alert(`La tarifa de la categoría C es de $${categoria}.- pesos por día.\nSi la reserva supera los 7 días, cuenta con una bonificación del 20%.`)
            categoria = 1000;
            dias = Number(prompt('Indique la cantidad de días que desea alquilar el vehículo: '));
            tarifaFinal = montoReserva(categoria,dias);
            if (dias > 7) {
                descuento = tarifaFinal - (tarifaFinal * 0.2);
                alert(`Sr/Sra. ${nombre}.\nAl realizar una reserva superior a los 7 días, la tarifa final es de: $${descuento}.-`);
            } else {
                alert(`Sr/Sra. ${nombre}.\nSu tarifa final es de: $${tarifaFinal}.-`);
            }
        break;
        default:
            alert('Reserva cancelada.')
        break;
    }
} 

reserva()

function montoReserva(categoria, dias) {
    resultado = categoria * dias;
    return resultado;
}