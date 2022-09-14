/*class Categorias {
    constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    }
}

const categoriaA = new Categorias(1, "Categoría A.", 3000);
const categoriaB = new Categorias(2, "Categoría B.", 2000);
const categoriaC = new Categorias(3, "Categoría C.", 1000);

console.log(categoriaA); // DEVUELVE: el objeto y la clase a la que pertenece.*/
/*
const categorias = []; //→ representa un carrito vacío.
let cantidad = 1; //→ cantidad de datos que quiero almacenar en mi array vacío.

do {
  let entrada = prompt('Ingrese la categoría de vehículo que desea alquilar: \n 1. Categoría A. \n 2. Categoría B. \n 3. Categoría C. ');
  categorias.push(entrada);
} while (categorias.length != cantidad); //→ condición de frenado (hasta 5 nombres)

alert(categorias); //→ devuelve → martin, alina, jimena, papa, mama
class Producto {
    constructor(id, nombre, precio, inventario) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.inventario = inventario;

        this.mostrarStock = function () {
            alert(`Tenemos ${this.inventario} unidades disponibles.`);
        };
        this.realizarVenta = function () {
            this.inventario--;
            alert(`Venta realizada con éxito.`);
        };
        this.agregarStock = function (cantidad) {
            this.inventario += cantidad;
            alert(`Has agregado ${cantidad} ${this.nombre} al inventario `);
        };
    }
}
// ------>Generando nuevos productos y carrito:

let productos = [
    new Producto(1, 'Monitor', 15000, 10),
    new Producto(2, 'Motherboard', 3000, 10),
    new Producto(3, 'Teclado', 1200, 5),
    new Producto(4, 'Mouse', 500, 5),
]

let carrito = []

//--------> Funcion agregar al carrito por prompt y agregamostres productos:
function addToCart() {
    let productoId = Number(prompt('ID producto:'));
    let cantidad =  Number(prompt('Cantidad:'));
    let producto = productos.find(product => product.id===productoId);
    producto.cantidad = cantidad;
    producto.total = producto.precio * cantidad;
    carrito.push(producto)
}

addToCart()
// addToCart()
// addToCart()

console.log(carrito);*/

//FUNCIÓN PARA LA COTIZACIÓN DE UN AUTO DE ALQUILER.

function cotizarReserva(){

    //DEFINO VARIABLES:
    let precioFinal = 0;
    let nombre = '';
    
    //PIDO DATOS:
    nombre = prompt('Ingrese su nombre y apellido: ');
    console.log(`nombre:${nombre}`)
    alert('Se informa que los dias miercoles y jueves hay 20% descuento.');
    let n_dia = determinarDia() 
    console.log(`n_dia:${n_dia}`)
    //VALIDO DIA INGRESADO:
    if (n_dia == -1) {
        alert("No existe el dia de la semana ingresado");
        return;
    }

    //PIDO CANTIDAD DE DIAS A ALQUILAR:
    let cantDias = prompt('Ingrese cantidad de dias que desea alquilar auto: ');
    console.log(`cantDias:${cantDias}`)
    //PIDO LA CATEGORIA QUE QUIERE ALQUILAR:
    let precioDia = determinarPrecioCategoria()
    console.log(`precioDia:${precioDia}`)
    //BUCLE PARA QUE RECORRA LA CANTIDAD DE DIAS INGRESADOS:
    for (let i = 1; i <= cantDias; i++) {
        //RESETEO DIA DE SEMANA.
        if(n_dia == 8){
            n_dia = 1;
        }
        //DESCUENTO LOS DIAS MIERCOLES (DIA 3) Y JUEVES (DIA 4).
        if (n_dia == 3 || n_dia == 4){
            precioFinal = precioFinal + (precioDia * 0.8); 
        } else {
            precioFinal = precioFinal + precioDia;
        }
        console.log(`valor al pasar ${i} dias: ${precioFinal}`)
        //AVANZA OTRO DIA.
        n_dia = n_dia + 1
    }
    //RECORRIDO EL BUCLE Y CUMPLIDA O NO LA CONDICIÓN --> DEVUELVE LA COTIZACIÓN FINAL.
    alert(`Sr/Sra. ${nombre}.\nSu cotización final es de: $${precioFinal}.- pesos por ${cantDias} días.`);
}

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

function determinarDia() {
    const elegirDia = prompt('Ingrese que dia de la semana es hoy:')
    console.log(`elegirDia:${elegirDia}`)
    const diasDeReserva = dias.find(x => x.dia == elegirDia)
    console.log(`categoria:${diasDeReserva}`)
    return diasDeReserva.posicion;
}

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

function determinarPrecioCategoria() {
    const selectedCategoria = prompt('Ingrese la categoría de vehículo que desea alquilar:\n Categoria A. \n Categoria B. \n Categoria C.');
    console.log(`selectedCategoria:${selectedCategoria}`)
    const categoria = categorias.find(producto => producto.nombreCategoria == selectedCategoria)
    console.log(`categoria:${categoria}`)
    return categoria.precio
}

cotizarReserva()