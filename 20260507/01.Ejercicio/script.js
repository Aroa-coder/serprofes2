function calcularIMC() {
     /*Obtener los datos*/
let peso = Number(document.getElementById('input-peso').value);
let altura = Number(document.getElementById('input-altura').value);
let etiqueta = document.getElementById('mensaje-salida');

//FORMULA DEL IMC: peso/altura (al cuadrado) //
//let imc = peso / (altura ** 2);
let imc = peso / (altura * altura); 

//RETO DE HOY
//MULTIPLES DECISIONES
// imc < 18.5 = Estas bajo de peso
//imc >= 18.5 && imc <= 24.9 Peso saludable
// imc >= 25 sobrepeso

if (imc < 18.5) {
  etiqueta.textContent = "Tu IMC es " + imc.toFixed(1) + ".Eres un esqueleto 🩻🦴";
  etiqueta.style.color = "blue";
} else if (imc >= 18.5 && imc <= 24.9) {
etiqueta.textContent = "Tu IMC es " + imc.toFixed(1) + ". Estas en la línea 😍👏";
} else {
    etiqueta.textContent = "Tu imc es " + imc.toFixed(1) + ". Tienes que adelgazar 😥👀";

} 
}