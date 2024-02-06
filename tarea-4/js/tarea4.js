const $contenedoresDeNumeros = document.querySelectorAll('.numero-aleatorio');

function iniciar(){

  for (let i = 0; i < $contenedoresDeNumeros.length; i++) {
    $contenedoresDeNumeros[i].innerText = Math.floor(Math.random() * 9)
  }

  const $botonComenzar = document.querySelector('#comenzar');

  $botonComenzar.onclick = function(){
    const numeros = conseguirNumeros($contenedoresDeNumeros);
    const promedioNumeros = promediarNumeros(numeros);
    const numeroMayor = encontrarMayorNumero(numeros);
    const numeroMenor = encontrarMenorNumero(numeros);
    const numeroFrecuente = encontrarNumeroFrecuente(numeros);

    mostrarNumeros(promedioNumeros, numeroMayor, numeroMenor, numeroFrecuente)
  }
}

function conseguirNumeros(numeros){
  arrayDeNumeros = [];

  for (let i = 0; i < numeros.length; i++) {
    arrayDeNumeros.push(Number(numeros[i].textContent))
  }

  return arrayDeNumeros;
}

function promediarNumeros(numeros){
  let promedio = 0;

  for (let i = 0; i < numeros.length; i++) {
    promedio += numeros[i]
  }

  return promedio / numeros.length;
}

function encontrarMayorNumero(numeros) {
  let numeroMayor = 0;

  for (let i = 0; i < numeros.length; i++) {
    if (numeroMayor < numeros[i]) {
      numeroMayor = numeros[i]
    }
  }

  return numeroMayor;
}

function encontrarMenorNumero(numeros) {
  let numeroMenor = numeros[0];

  for (let i = 0; i < numeros.length; i++) {
    if (numeroMenor > numeros[i]) {
      numeroMenor = numeros[i]
    }
  }

  return numeroMenor;
}

function encontrarNumeroFrecuente(numeros){
  let numeroFrecuente = 0;

  for (let i = 0; i < numeros.length; i++) {
    for (let j = i + 1; j < numeros.length; j++) {
      if (numeros[i] === numeros[j]) {
        numeroFrecuente = numeros[i]
      }
    }
  }

  return numeroFrecuente;
}

function mostrarNumeros(promedio, mayor, menor, frecuente) {
  const $contenedorPromedio = document.querySelector('#promedio');
  const $contenedorMayor = document.querySelector('#mayor-numero');
  const $contenedorMenor = document.querySelector('#menor-numero');
  const $contenedorFrecuente = document.querySelector('#numero-frecuente');

  $contenedorPromedio.innerText = (`El promedio de los números es: ${promedio}`)
  $contenedorMayor.innerText = (`El mayor de los números es: ${mayor}`)
  $contenedorMenor.innerText = (`El menor de los números es: ${menor}`)
  $contenedorFrecuente.innerText = (`El más frecuente de los números es: ${frecuente}`)
}

iniciar();


