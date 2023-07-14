let nombre = ""
let ElPeso
let LaAltura

let peso = 0
let altura = 0
let imc = 0
let Calcular = 0

do {
    nombre = prompt("¿Cual es tu nombre?")
} while (!isNaN(nombre) || "") 

function clickBtnCalcular() {
    ElPeso = document.getElementById('ElPeso')
    peso = ElPeso.value
    
    LaAltura = document.getElementById('LaAltura')
    altura = LaAltura.value
    
    

    imc = peso / (altura * altura)
    alert(nombre + " tú IMC es: " + Math.round(imc))
}


function iniciar() {
    btnCalcular = document.getElementById("Calcular")
    btnCalcular.addEventListener("click", clickBtnCalcular)
}

window.onload = iniciar
