//FUNCIÓN PARA LA COTIZACIÓN DE UN AUTO DE ALQUILER.

function cotizarReserva(){

    //DEFINO VARIABLES:
    let precioFinal = 0;
    let nombre = '';
    
    //PIDO DATOS:
    nombre = prompt('Ingrese su nombre y apellido: ');
    alert('Se informa que los dias miercoles y jueves hay 20% descuento.');
    let n_dia = determinarDia() //FUNCTION DEFINIDA ABAJO.

    //VALIDO DIA INGRESADO:
    if (n_dia == -1) {
        alert("No existe el dia de la semana ingresado");
        return;
    }

    //PIDO CANTIDAD DE DIAS A ALQUILAR:
    let cantDias = prompt('Ingrese cantidad de dias que desea alquilar auto: ');

    //PIDO LA CATEGORIA QUE QUIERE ALQUILAR:
    let precioDia = determinarCategoria() //FUNCTION DEFINIDA ABAJO.

    //BUCLE PARA QUE RECORRA LA CANTIDAD DE DIAS INGRESADOS
    for (let i = 1; i <= cantDias; i++) {
        //RESETEO DIA DE SEMANA.
        if(n_dia == 8){
            n_dia = 1; // SI EL CLIENTE INGRESA 8 --> EL DÍA 8 PASA A SER LUNES (DÍA 1).
        }
        //DESCUENTO LOS DIAS MIERCOLES (DIA 3) Y JUEVES (DIA 4).
        if (n_dia == 3 || n_dia == 4){
            precioFinal = precioFinal + (precioDia * 0.8); //SI SE CUMPLE LA CONDICIÓN SE LE OTORGA DESCUENTO.
        } else {
            precioFinal = precioFinal + precioDia; //SI NO SE CUMPLE LA CONDICIÓN NO SE LE OTORGA DESCUENTO.
        }
        //AVANZA OTRO DIA.
        n_dia = n_dia + 1
    }
    //RECORRIDO EL BUCLE Y CUMPLIDA O NO LA CONDICIÓN --> DEVUELVE LA COTIZACIÓN FINAL.
    alert(`Sr/Sra. ${nombre}.\nSu cotización final es de: $${precioFinal}.- pesos por ${cantDias} días.`);
}

function determinarDia() {
    dia = prompt('Ingrese que dia de la semana es hoy:')
    switch(dia){
        case "lunes": 
        return 1;
        case "martes": 
        return 2;
        case "miercoles": 
        return 3;
        case "jueves": 
        return 4;
        case "viernes":
        return 5;
        case "sabado": 
        return 6;
        case "domingo":
        return 7;
        default: -1
    }
}

function determinarCategoria() {
    categoria = prompt('Ingrese la categoría de vehículo que desea alquilar: ');
    switch(categoria){
        case 'a':
            return 3000;
        case 'b':
            return 2000;
        case 'c':
            return 1000;
        default: 
        break;
    }
}

cotizarReserva()
