// Función para mostrar los relojes de mujer
function mostrarRelojesMujer() {
    const relojesMujer = reloj.filter(el => el.clasificacion === 'Mujer');

    const container6 = document.getElementById('container6');
    if (!container6) return;
    container6.innerHTML = '';

    relojesMujer.forEach(el => crearCard(el, 'container6'));
}

mostrarRelojesMujer();

//Funcion para mostrar los relojes de hombre

function mostrarRelojesHombre() {
    const relojesHombre = reloj.filter(el => el.clasificacion === 'Hombre');

    const container7 = document.getElementById('container7');
    if (!container7) return; 
    container7.innerHTML = '';
    relojesHombre.forEach(el => crearCard(el, 'container7'));
}
mostrarRelojesHombre();

//Funcion para mostrar los relojes  unisex

function mostrarRelojesUnisex() {
    const relojesUnisex = reloj.filter(el => el.clasificacion === 'Unisex');

    const container8 = document.getElementById('container8');
    if (!container8) return; 
    container8.innerHTML = '';
    relojesUnisex.forEach(el => crearCard(el, 'container8'));
}
mostrarRelojesUnisex();

