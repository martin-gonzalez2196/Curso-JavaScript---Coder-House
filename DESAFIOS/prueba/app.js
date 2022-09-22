//FUNCIÓN PARA LA COTIZACIÓN DE UN AUTO DE ALQUILER.
//DEFINO VARIABLES:
/*let precioFinal = 0;
let nombre = '';
let destino = '';
let carrito = [];

function cotizarReserva() {
    //PIDO DATOS:
    nombre = prompt('Ingrese su nombre y apellido: ');
    console.log(`nombre:${nombre}`);
    destino = prompt('Ingrese ciudad de destino:\nBariloche.\nBuenos Aires.\nMendoza.');
    console.log(`destino:${destino}`);
    alert('Se informa que los dias miercoles y jueves hay 20% descuento.');
    let n_dia = determinarDia()
    console.log(`n_dia:${n_dia}`)
    //VALIDO DIA INGRESADO:
    if (n_dia == -1) {
        alert("No existe el dia de la semana ingresado");
        return;
    }
    //PIDO CANTIDAD DE DIAS A ALQUILAR:
    let cantDias = Number(prompt('Ingrese cantidad de dias que desea alquilar auto:'));
    console.log(`cantDias:${cantDias}`)
    //PIDO LA CATEGORIA QUE QUIERE ALQUILAR:
    let precioDia = determinarPrecioCategoria()
    console.log(`precioDia:${precioDia}`)
//BUCLE PARA QUE RECORRA LA CANTIDAD DE DIAS INGRESADOS:
for (let i = 1; i <= cantDias; i++) {
    //RESETEO DIA DE SEMANA.
    if (n_dia == 8) {
        n_dia = 1;
    }
    //DESCUENTO LOS DIAS MIERCOLES (DIA 3) Y JUEVES (DIA 4).
    if (n_dia == 3 || n_dia == 4) {
        precioFinal = precioFinal + (precioDia * 0.8);
    } else {
        precioFinal = precioFinal + precioDia;
    }
    console.log(`valor al pasar ${i} dias: ${precioFinal}`)
    //AVANZA OTRO DIA.
    n_dia = n_dia + 1
}
//RECORRIDO EL BUCLE Y CUMPLIDA O NO LA CONDICIÓN --> DEVUELVE LA COTIZACIÓN FINAL.
alert(`Sr/Sra. ${nombre}.\n\nINFORMACIÓN DE LA RESERVA:\nCotización final: $${precioFinal}.- pesos. \nDias de alquiler: ${cantDias} días.\nDestino: ${destino}.`);

    const itemCompra = {
        responsableInscripto: nombre,
        precioFinal: precioFinal,
        diasAlquiler: cantDias
    }
    carrito.push(itemCompra);
}
//Array de objetos con cada uno de los días de la semana.
const dias = [
    {
        dia: "lunes",
        posicion: 1,
    },
    {
        dia: "martes",
        posicion: 2,
    },
    {
        dia: "miercoles",
        posicion: 3,
    },
    {
        dia: "jueves",
        posicion: 4
    },
    {
        dia: "viernes",
        posicion: 5
    },
    {
        dia: "sabado",
        posicion: 6
    },
    {
        dia: "domingo",
        posicion: 7
    },
]
//función para determinar que dia de la semana desea alquilar el auto
function determinarDia() {
    const elegirDia = prompt('Ingrese que dia de la semana desea alquilar el vehículo:')
    console.log(`elegirDia:${elegirDia}`)
    const diasDeReserva = dias.find(x => x.dia == elegirDia)
    console.log(`categoria:${diasDeReserva}`)
    return diasDeReserva.posicion;
}
//Array de objetos con las 3 categorias de autos.
const categorias = [
    {
        nombreCategoria: "a",
        precio: 3000
    },
    {
        nombreCategoria: "b",
        precio: 2000
    },
    {
        nombreCategoria: "c",
        precio: 1000
    },
]
//función para determinar el precio de cada categoria.
function determinarPrecioCategoria() {
    const selectedCategoria = prompt('Ingrese la letra de la categoría de vehículo que desea alquilar:\nCategoria A. \nCategoria B. \nCategoria C.');
    console.log(`selectedCategoria:${selectedCategoria}`)
    const categoria = categorias.find(tipoCategoria => tipoCategoria.nombreCategoria == selectedCategoria)
    console.log(`categoria:${categoria}`)
    return categoria.precio;
}
//función para cerrar el procedimiento. Puede sumar otro auto o que se le otorgue la confirmación de la reserva.
function main() {
    while (true) {
        cotizarReserva()
        const decision = prompt("Si desea alquilar un vehiculo adicional, ingrese: ADICIONAL.\nSi desea confirmar la reserva, ingrese: CONFIRMAR.")
        console.log(carrito);
        if (decision.toLowerCase() === 'confirmar') {
            calcularTotalCarrito(carrito);
            alert(`Muchas gracias por confiar en nosotros!\nEl monto total de su reserva es de: $${calcularTotalCarrito(carrito)}.- pesos.`)
            break;
        } 
    }
    }
main()
//función que suma los objetos que están dentro del array (carrito).
function calcularTotalCarrito(carrito) {
        let total = 0;
        carrito.forEach(cadaReserva=> {
            total += cadaReserva.precioFinal;
        })
    return total;
    }*/

const buscarDisponibilidad = document.querySelector("#correo");

buscarDisponibilidad.onClick = function() {
    alert("Buscando disponiblidad...")
}