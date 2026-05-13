// 1. NUESTRO SÚPER ARRAY (Array lleno de objetos)
const carrito = [
    {nombre: "🥖pan de masa madre", precio:1.20 },
    {nombre: "🥛Leche entera", precio: 0.90},
    {nombre: "🥚 Huevos camperos", precio: 2.50},
    {nombre: "🥑 Aguacate ", precio:1.00},
    {nombre: "🫑 Pimiento", precio: 1.15},
    {nombre: "🍅Tomate", precio: 2.00},
    {nombre: "🥦 Brócoli", precio: 0.99},
];
//CÓDIGO DE APOYO VISUAL
let lista_HTML = document.getElementById("lista-producto"); //I -> Indice, indica la popsición del elemento (el primer elemento comienza SIEMPRE en 0)
for (let i = 0; i < carrito.length;i++){ // carrito.lenght -> te dice el n. de elementos que tienes en la lista array (en mi caso 7 en la lista

    // Usamos carrito[i].nombre para sacar el dato en cada vuelta
lista_HTML.innerHTML += `
<li><span>${carrito[i].nombre}</span>
<span>${carrito[i].precio.toFixed(2)}€</span> 
`

}
// LA FUNCIÓN COBRAR
function cobrar() {}
//1. Creamos una variable = acumulador 
let suma_TOTAL = 0; 
//2. Creamos un bucle for para recorrer el Array
for (let i = 0; i< carrito.length; i++) {
    //En cada vuelta le sumamos al "suma_TOTAL" el precio
    suma_TOTAL = suma_TOTAL + carrito[i].precio;

//3. Mostramos el resultado final en HTML
document.getElementById("resultado-total").textContent =
"total: " + suma_TOTAL.toFixed(2) + "€";


}