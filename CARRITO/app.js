class Productos {
    constructor(id,modelo,precio,imagen) {
        this.id = id;
        this.modelo = modelo;
        this.precio = precio;
        this.imagen = imagen
    }
}

const carritoProductos = [];

const auto1 = new Productos ("1","Volkswagen Gol Trend", 1000, "./assets/images/goltrend.jpg");
const auto2 = new Productos ("2","Renault Kwid", 1000, "./assets/images/kwid.jpg");
const auto3 = new Productos ("3","Renault Sandero", 1000, "./assets/images/sandero.jpg");
const auto4 = new Productos ("4","Fiat Argo", 2000, "./assets/images/argo.jpg");
const auto5 = new Productos ("5","Chevrolet Onix", 2000, "./assets/images/onix.jpg");
const auto6 = new Productos ("6","Chevrolet Prisma", 2000, "./assets/images/prisma.jpg");
const auto7 = new Productos ("7","Renault Alaskan", 3000, "./assets/images/alaskan.jpg");
const auto8 = new Productos ("8","Fiat Toro", 3000, "./assets/images/toro.jpg");
const auto9 = new Productos ("9","Chevrolet Spin", 3000, "./assets/images/spin.jpg");

carritoProductos.push(auto1,auto2,auto3,auto4,auto5,auto6,auto7,auto8,auto9);

//función para mostrar los productos.

function mostrarAutos(productos) {
    const productContainer = document.getElementById("product-container");
    productos.forEach(producto => {
        const card = document.createElement('card');
        card.innerHTML += `<div class="card text-center" style="width: 18rem">
        <img
            src="${producto.imagen}"
            alt="Foto de auto"
            style="padding: 25px"
            class="card-img-top"
            alt="Foto de Auto"
        />
        <div class="card-body">
            <h5 class="card-title">${producto.modelo}</h5>
            <p class="card-text">
            $${producto.precio}.- por día.
            </p>
            <a href="#" class="btn btn-primary" id="${producto.id}">Agregar al Carrito</a>
        </div>
    </div>`
    productContainer.appendChild(card);

    const button = document.getElementById(`${producto.id}`);
    button.addEventListener(`click`, () => {
        carrito(`${producto.id}`);
        alert()
    })
    })
}

mostrarAutos(carritoProductos)

function alert(){
    Swal.fire({
        icon: 'warning',
        title: 'Usted está por reservar el siguiente vehiculo:',
        text: 'modelo del auto',// quiero mostrar `${productos.modelo}` pero no se como.
        confirmButtonText: 'Confirmar',
        footer: '<b>Ir al Carrito para confirmar la reserva.</b>',
        backdrop: true,
        allowOutsideClick: false,
        allowEscapeKey: true,
        showCloseButton: true,
    })
}