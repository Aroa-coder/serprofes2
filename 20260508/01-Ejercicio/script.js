// GENERAR NUMERO ALEATORIO
// Math.random() genera un numero entre 0 y 11
// *10 => 0 y 9
// +1 => 1 y 10
// Math.floor elimina los decimales
let numerosecreto = Math.floor(Math.random() * 10) + 1;
// Variables del juego
let vidas = 3;
let juegoTerminado = false;
// FUNCIÓN PRINCIPAL
function comprobarnumero() {
    // Captura el numero que escribe el usuario
    let intento = Number(
        document.getElementById("input-numero").value
    );
    //Captura el párrafo donde mosotramos mensajes
    let etiqueta = document.getElementById("mensaje-salida");
    //Captura el texto de vida 
    let textoVidas = document.getElementById("texto-vidas");


    // SI EL USUARIO GANA 
    if (intento === numerosecreto) {
        etiqueta.textContent =
            "🎊 ¡HAS GANADO! 🎉 el numero era" + numerosecreto;
        etiqueta.style.color = "green";
    } else {
        // Restamos vidas
        vidas--;
        // Actualizar vidas en la pantalla
        textoVidas.textContent = "vidas: " + vidas + "♥️";


        // **PISTAS**
        if (intento < numerosecreto) {
            etiqueta.textContent =
                "¡Fallo El numero es MAYOR ⬆️"
        } else {
            etiqueta.textContent =
                "¡FALLO! El número es MENOR ⬇️"
        }
        etiqueta.style.color = "orange"
        // GAME OVER
        if (vidas === 0) {
            etiqueta.textContent =
                "☠️ GAME OVER. El número era " + numerosecreto;
            etiqueta.style.color = "red";
            // Desactivar el botón
            document.getElementById("btn-jugar").disabled = true;
        }

    }
}