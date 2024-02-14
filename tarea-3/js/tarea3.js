const $botonCalcular = document.querySelector('#calcular');

$botonCalcular.onclick = function(){
  const $horasIngresadas = document.querySelectorAll('.horas');
  const $minutosIngresados = document.querySelectorAll('.minutos');
  const $segundosIngresados = document.querySelectorAll('.segundos');

  console.log($horasIngresadas)


  const segundosTotales = convertirASegundos($horasIngresadas, $minutosIngresados, $segundosIngresados);

  const tiempoTotal = formatearSegundosAISO(segundosTotales);

  mostrarResultadoISO(tiempoTotal);
}

function convertirASegundos(horas, minutos, segundos) {
  let segundosTotales = 0;
  const CLASES_TOTALES = 5;

  for (let i = 0; i < CLASES_TOTALES; i++) {
    segundosTotales += Number(horas[i].value) * 3600;
    segundosTotales += Number(minutos[i].value) * 60;
    segundosTotales += Number(segundos[i].value)
  }

  return segundosTotales;
}


function formatearSegundosAISO(segundos){
  const segundosTotales = segundos % 60;
  const minutosTotales = ((segundos - segundosTotales) / 60) % 60;
  const horasTotales = (((segundos - segundosTotales) / 60) - minutosTotales) / 60;

  const tiempoFormateado = `horas: ${horasTotales} minutos: ${minutosTotales} segundos: ${segundosTotales}`;

  return tiempoFormateado
}

function mostrarResultadoISO(resultado) {
  const $contenedorResultado = document.querySelector('#resultado');

  $contenedorResultado.innerText = resultado;
}
