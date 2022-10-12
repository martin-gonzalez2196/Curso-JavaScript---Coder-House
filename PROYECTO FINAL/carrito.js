const carritoVacio = JSON.parse(localStorage.getItem("Carrito")) || [];

const carrito = (productoId) => {
    const cartContainer = document.getElementById("cart-container");
    const mostrarProductosEnCarrito = () =>{
        let producto = carritoProductos.find(producto => producto.id === productoId);
        carritoVacio.push(producto)
        let div = document.createElement('div');
        div.innerHTML = `<p>${producto.modelo}</p>
        <p>Precio: $${producto.precio}</p>
        <button class="btn btn-danger btn-sm" id="delete${producto.id}"></button>`
        cartContainer.appendChild(div)
        const buttonDelete = document.getElementById(`${producto.id}`);
        buttonDelete.addEventListener('Click',(e) => {
            deleteProduct(e)
        })
    }
        mostrarProductosEnCarrito()
        recargaLocalStorage()
    };

    function deleteProduct(e) {
        let btnClicked = e.target;
        btnClicked.parentElement.remove()
    }

    function recargaLocalStorage(){
    localStorage.setItem("Carrito",JSON.stringify(carritoVacio))
}