function crearCard(producto, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const cardHTML = `
        <div class="reloj">
            <img src="${producto.img || './assets/default.jpg'}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio.toLocaleString()}</p>
            <button onclick="agregarBotonCarrito(${producto.id})">Add to cart🛒</button>
        </div>
    `;

    container.innerHTML += cardHTML;
}

reloj.slice(0, 6).forEach(el => crearCard(el, 'container1'));
reloj.slice(7, 13).forEach(el => crearCard(el, 'container2'));
reloj.slice(13, 19).forEach(el => crearCard(el, 'container3'));
reloj.slice(0, 36).forEach(el => crearCard(el, 'container4'));
reloj.slice(26, 35).forEach(el => crearCard(el, 'container10'));


