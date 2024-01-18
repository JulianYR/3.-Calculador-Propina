const sender = document.getElementById('send');
sender.addEventListener('click', calcularPropina);

function calcularPropina() {
    let inputText1 = parseFloat(document.getElementById('textP1').value);
    let inputBueno = document.getElementById('bueno');
    let inputDecente = document.getElementById('decente');
    let inputMalo = document.getElementById('malo');
    let inputText3 = parseFloat(document.getElementById('textP3').value);
    let propinaCalculada = document.getElementById('propinaCalculada');

    let puntuacionAtencion = 0;

    // Checkeo de la puntuacion
    if (inputBueno.checked){
        puntuacionAtencion = 5;
    }
    else if (inputDecente.checked){
        puntuacionAtencion = 3;
    }
    else if (inputMalo.checked){
        puntuacionAtencion = 1;
    }

    // Variables de .valu
    let valorCuenta = inputText1;
    let porcentajeDePropina = inputText3;

    valorCuenta = parseFloat(valorCuenta);
    porcentajeDePropina = parseFloat(porcentajeDePropina);

    // Calculacion de la propina
    let propinaCalculadaValor = (valorCuenta * porcentajeDePropina) / 100;
    propinaCalculadaValor = propinaCalculadaValor + puntuacionAtencion

    // Mostramos el resultado de la propina
    propinaCalculada.innerHTML = propinaCalculadaValor
}