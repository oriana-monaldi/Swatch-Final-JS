const checkboxMujer = document.getElementById('checkboxMujer');
const checkboxHombre = document.getElementById('checkboxHombre');
const checkboxUnisex = document.getElementById('checkboxUnisex');

const checkboxRojo = document.getElementById('checkboxRojo');
const checkboxAmarillo = document.getElementById('checkboxAmarillo');
const checkboxRosa = document.getElementById('checkboxRosa');
const checkboxBlanco = document.getElementById('checkboxBlanco');
const checkboxNegro = document.getElementById('checkboxNegro');
const checkboxAzul = document.getElementById('checkboxAzul');
const checkboxCeleste = document.getElementById('checkboxCeleste');
const checkboxVerde = document.getElementById('checkboxVerde');
const checkboxNaranja = document.getElementById('checkboxNaranja');

const checkboxUrbano = document.getElementById('checkboxUrbano');
const checkboxDeportivo = document.getElementById('checkboxDeportivo');

const contenedores = ['container4'].map(id => document.getElementById(id)).filter(Boolean);

function aplicarFiltros() {
    let relojesFiltrados = reloj
        .filter(el => 
            (checkboxMujer.checked && el.clasificacion === 'Mujer') ||
            (checkboxHombre.checked && el.clasificacion === 'Hombre') ||
            (checkboxUnisex.checked && el.clasificacion === 'Unisex') ||
            (!checkboxMujer.checked && !checkboxHombre.checked && !checkboxUnisex.checked) 
        )
        .filter(el => 
            (checkboxRojo.checked && el.color === 'Rojo') ||
            (checkboxAmarillo.checked && el.color === 'Amarillo') ||
            (checkboxRosa.checked && el.color === 'Rosa') ||
            (checkboxBlanco.checked && el.color === 'Blanco') ||
            (checkboxNegro.checked && el.color === 'Negro') ||
            (checkboxAzul.checked && el.color === 'Azul') ||
            (checkboxCeleste.checked && el.color === 'Celeste') ||
            (checkboxVerde.checked && el.color === 'Verde') ||
            (checkboxNaranja.checked && el.color === 'Naranja') ||
            (!checkboxRojo.checked && !checkboxAmarillo.checked && !checkboxRosa.checked && !checkboxBlanco.checked &&
             !checkboxNegro.checked && !checkboxAzul.checked && !checkboxCeleste.checked && !checkboxVerde.checked && 
             !checkboxNaranja.checked)
        )
        .filter(el => 
            (checkboxUrbano.checked && el.tipo === 'Urbano') ||
            (checkboxDeportivo.checked && el.tipo === 'Deportivo') ||
            (!checkboxUrbano.checked && !checkboxDeportivo.checked)
        );

    contenedores.forEach(container => {
        container.innerHTML = '';
        relojesFiltrados.forEach(el => crearCard(el, container.id));
    });
}

[checkboxMujer, checkboxHombre, checkboxUnisex, checkboxRojo, checkboxAmarillo, checkboxRosa, checkboxBlanco, checkboxNegro, checkboxAzul, checkboxCeleste, checkboxVerde, checkboxNaranja, checkboxUrbano, checkboxDeportivo].forEach(checkbox => checkbox.addEventListener('change', aplicarFiltros));

aplicarFiltros();