// Crear la card de cada producto para mostrarla en el HTML recorriendo el array de todos los relojes
function crearCard(producto, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return; 

    const card = document.createElement("div");
    card.className = "reloj";

    const img = document.createElement("img");
    img.src = producto.img || './assets/default.jpg';
    img.alt = producto.nombre;

    const nombreProducto = document.createElement("h3");
    nombreProducto.innerText = producto.nombre;

    const precio = document.createElement("p");
    precio.innerText = `$${producto.precio.toLocaleString()}`;

    const boton = document.createElement("button");
    boton.innerText = "Añadir al carrito 🛒";
    boton.addEventListener('click', () => agregarBotonCarrito(producto.id)) 
    card.append(img);
    card.append(nombreProducto);
    card.append(precio);
    card.append(boton);

    container.append(card);
}

reloj.slice(0, 6).forEach(el => crearCard(el, 'container1'));
reloj.slice(7, 13).forEach(el => crearCard(el, 'container2')); 
reloj.slice(13, 19).forEach(el => crearCard(el, 'container3'));
reloj.slice(0, 36).forEach(el => crearCard(el, 'container4'));
reloj.slice(26, 35).forEach(el => crearCard(el, 'container10'));


