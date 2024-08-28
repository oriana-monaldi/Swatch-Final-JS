const carrito = [];
const carritoElement = document.getElementById('carrito');
const carritoContenido = document.getElementById('carrito-contenido');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

document.querySelector('.navbar-icons .icono').addEventListener('click', () => {
    carritoElement.classList.toggle('abierto');
});

function mostrarCarrito() {
    carritoElement.classList.add('abierto');
}

function agregarAlCarrito(producto) {
    carrito.push(producto);
    actualizarCarrito();
    guardarCarritoEnLocalStorage();
}

function actualizarCarrito() {
    carritoContenido.innerHTML = ''; 
    let total = 0;

    carrito.forEach(producto => {
        const productoElemento = document.createElement('div');
       
        const imgElemento = document.createElement('img');
        imgElemento.src = producto.img;
        
        const textoElemento = document.createElement('div');
        textoElemento.innerHTML = `<p>${producto.nombre} - $${producto.precio.toLocaleString()}</p>`;

        productoElemento.appendChild(imgElemento);
        productoElemento.appendChild(textoElemento);

        carritoContenido.appendChild(productoElemento);
        total += producto.precio;
    });

    const totalElemento = document.createElement('div');
    totalElemento.innerHTML = `<p>Total: $${total.toLocaleString()}</p>`;
    carritoContenido.appendChild(totalElemento);
}

function guardarCarritoEnLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function cargarCarritoDeLocalStorage() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        carrito.push(...JSON.parse(carritoGuardado));
        actualizarCarrito();
    }
}

vaciarCarritoBtn.addEventListener('click', () => {
    carrito.length = 0;
    actualizarCarrito();
    localStorage.removeItem('carrito'); 
});

function agregarBotonCarrito(id) {
    const producto = reloj.find(producto => producto.id === id);
    if (producto) {
        console.log('Producto encontrado:', producto);
        agregarAlCarrito(producto);
    } else {
        console.error('Producto no encontrado con ID:', id);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    cargarCarritoDeLocalStorage();

    const botonesAgregarCarrito = document.querySelectorAll('.btn-agregar-carrito');

    botonesAgregarCarrito.forEach(boton => {
        boton.addEventListener('click', () => {
            const productoId = parseInt(boton.dataset.id, 10); 
            agregarBotonCarrito(productoId);
        });
    });
});

document.addEventListener('click', (event) => {
    if (!carritoElement.contains(event.target) && !event.target.matches('.navbar-icons .icono')) {
        carritoElement.classList.remove('abierto');
    }
});


