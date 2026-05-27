import { callAPI } from "./api.js";

//Atrapamos los elemntos de la interfaz
const pantalla = document.getElementById('pantallaResultados');
const btnBuscar = document.getElementById('btnBuscar');
const input = document.getElementById('inputId');
const btnError = document.getElementById('btnError');
const formCrear = document.getElementById('formCrear');

//GET DINÁMICO (Buscar Publicación)
btnBuscar.addEventListener('click', async ()=>{
const id = input.value.trim();
//Seguridad: Que no nos envien campos vacíos
if(id===""){
    pantalla.textContent.textContent = "⚠️Por favor, escribe un número de ID.";
    return;
}
pantalla.textContent = "⌛Viajando a internet ...";

try {
    //Liamos anuestro cartero con la ruta dinámica
    const post = await callAPI(`/posts/${id}`);
    //Pintamos el objeto pantañña de forma bonita
    //JSON.stringify(objeto,null,2)le da el formato de línea y espacios
    pantalla.textContent = JSON.stringify(post, null, 2);
} catch (error) {
    pantalla.textContent = "No se encontró la publicación o hubo un error."
    
}

});

btnBorrar.addEventListener('click', async () => {
    
});