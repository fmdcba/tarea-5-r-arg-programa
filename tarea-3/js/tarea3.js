document.querySelector('#calcular').onclick = function(e){
  const $horasIngresadas = obtenerTiempo('horas');
  const $minutosIngresados = obtenerTiempo('minutos');
  const $segundosIngresados = obtenerTiempo('segundos');

  const segundosTotales = convertirASegundos($horasIngresadas, $minutosIngresados, $segundosIngresados);
  const tiempoTotal = formatearSegundosAISO(segundosTotales);
  mostrarResultadoISO(tiempoTotal);

  e.preventDefault();
}

function obtenerTiempo(tiempo) {
  return document.querySelectorAll(`.${tiempo}`);
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

function validarHoras(horas) {
  if (horas <= 0) {
    return 'El campo hora no puede ser menor o igual a 0';
  }

  if (horas > 23) {
    return 'El campo hora no puede ser mayor a 23';
  }
}

function validarMinutos(minutos) {
  if (minutos <= 0) {
    return 'El campo minutos no puede ser menor o igual a 0';
  }

  if (minutos > 59) {
    return 'El campo minutos no puede ser mayor a 59';
  }
}

function validarSegundos(segundos) {
  if (segundos <= 0) {
    return 'El campo segundos no puede ser menor o igual a 0';
  }

  if (segundos > 59) {
    return 'El campo segundos no puede ser mayor a 59';
  }
}
