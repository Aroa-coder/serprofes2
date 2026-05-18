// EJERCIO 1 : CONTADOR DE CLICS (Gestion de Datos)
//1. Identificamos las etiquetas exactas que vamos a manipular
const btnContar = document.querySelector('#countBtn');
const spanCount = document.querySelector('#count');

// 2. Variable global para recordar el numero de clics
let contador = 0;

//3. Escuchamos el evento clic en el boton
btnContar.addEventListener('click', () => {

    if (contador < 10) {
        contador++;
        spanCount.textContent = contador;
    }

    if (contador === 10) {
        btnContar.disabled = true;
        btnContar.textContent = '🎉 ¡Límite alcanzado!';

        lanzarCelebracion();
        mostrarNotificacion();
    }
});

// EJERCICIO 2 : TOGGLE MENU (Manipulación de Clases CSS)
const btnToggle = document.querySelector('#toggleMenu');
const nav = document.querySelector('#mainNav');

btnToggle.addEventListener('click',() =>{
    //classList.toggle() es mágico: si la clase 'oculto' está, la quita. Si no está la pone
    nav.classList.toggle('oculto');
    // cambiamos el texto del botón dependiendo de si el menú está visible o no
    const estaOculto = nav.classList.contains('oculto');
    if(estaOculto) {
        btnToggle.textContent = 'Mostrar Menu';
    }else {
        btnToggle.textContent = 'Ocultar Menú';
    }
});



// EJERCICIO 3 : MODO OSCURO
const toggleOscuro = document.querySelector('#themeToggle');
const textoSwitch = document.querySelector('.switch-text');
const cuerpoWeb = document.body;
// PASO A : Comprobar si el usuario ya tenia tenia el modo oscuro
//guardado al cargar la página
const temaGuardado = localStorage.getItem('temaPreferido');
if (temaGuardado === 'oscuro'){
    cuerpoWeb.classList.add('dark');
    toggleOscuro.checked = true;
    textoSwitch.textContent = 'Desactivar Modo Oscuro';
}
//PASO B: Escuchar cuando el usuario marca o desmarca el checkbox
toggleOscuro.addEventListener('change', () =>{
    if(toggleOscuro.checked) {
        //Si check está marcado, ponemos clase oscura y lo guardamos
        cuerpoWeb.classList.add('dark');
        localStorage.setItem('temaPreferido', 'oscuro');
        textoSwitch.textContent = 'Desactivar Modo Oscuro';
    } else {
        //Si se desmarca, quitamos la clase y guardamos la preferencia clara
        cuerpoWeb.classList.remove('dark');
        localStorage.setItem('temaPreferido', 'claro');
        textoSwitch.textContent = 'Activar Modo Oscuro';
    }
});

function lanzarCelebracion() {

    for (let i = 0; i < 30; i++) {

        const globo = document.createElement('div');
        globo.classList.add('globo');

        // Posición aleatoria
        globo.style.left = Math.random() * 100 + 'vw';

        // Color aleatorio
        const colores = ['#ff4d4d', '#00ccff', '#ffd633', '#66ff66', '#ff66cc'];
        globo.style.backgroundColor =
            colores[Math.floor(Math.random() * colores.length)];

        // Tamaño aleatorio
        const size = Math.random() * 20 + 20;
        globo.style.width = size + 'px';
        globo.style.height = size + 'px';

        document.body.appendChild(globo);

        // Eliminar después de la animación
        setTimeout(() => {
            globo.remove();
        }, 4000);
    }
}
function mostrarNotificacion() {

    const notificacion = document.createElement('div');

    notificacion.classList.add('notificacion');

    notificacion.textContent =
        '🎉 Enhorabuena, has conseguido tu objetivo';

    document.body.appendChild(notificacion);

    // Mostrar con animación
    setTimeout(() => {
        notificacion.classList.add('visible');
    }, 100);

    // Ocultar después de 4 segundos
    setTimeout(() => {
        notificacion.classList.remove('visible');

        setTimeout(() => {
            notificacion.remove();
        }, 500);

    }, 4000);
}