// 1. Creamos nuestra caja grande (Array ->listado)
let carrito = ["🍏 Manzana", "🍌 Plátano"];
//2. Imprimir el carrito nada más al cargar la página
document.getElementById('pantalla-cesta').textContent = carrito.join("-");

// 3. La función para agregar cosas nuevas a la lista 
function añadirAlcarrito(){
//Atrapamos lo que escribe el usuario
let item = document.getElementById("nuevo-item").value;
// MAGIA DE ARRAYS; .push() mete el nuevo elemento al final de la lista
carrito.push(item);
//Volvemos a pintar la cesta para que se vea 
document.getElementById("pantalla-cesta").textContent = carrito.join("-");
//Limpiamos el input
document.getElementById("nuevo-item").value = "";

}