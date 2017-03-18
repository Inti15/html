function convertirCelsius(){
var valor = parseInt(document.getElementById("fahrenheit").value);
var celsius = ((valor * 9)/5) + 32;
console.log(celsius);
document.getElementById("celsius").value=celsius;
}
