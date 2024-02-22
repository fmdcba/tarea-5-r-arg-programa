const $botonCalcularSalario = document.querySelector('#calcular-salario-mensual');
const $botonLimpiar = document.querySelector('#reiniciar');

$botonCalcularSalario.onclick = function (e){
  const salarioAnual = Number(document.querySelector('#salario-anual').value);

  if (procesarValidacion(validarSalario(salarioAnual)) === '') {
    const salarioMensual = calcularSalarioMensual(salarioAnual);
    mostrarSalarioMensual(salarioMensual);
  }

  e.preventDefault();
}

$botonLimpiar.onclick = function reiniciarContenedores(){
  document.querySelector('#salario-anual').value = '';
  document.querySelector('#salario-mensual').value = '';

  return false;
}

function calcularSalarioMensual(salarioAnual){
  const CANTIDAD_MESES_EN_UN_ANIO = 12;

  return salarioAnual / CANTIDAD_MESES_EN_UN_ANIO;
}

function mostrarSalarioMensual(salario){
  const $contendorSalarioMensual = document.querySelector('#salario-mensual');
  $contendorSalarioMensual.value = salario;
}

function validarSalario(salario){
  if (!salario) {
    return 'Debes ingresar un salario';
  }

  if (salario < 0) {
    return 'El salario debe ser mayor a 0';
  }

  return '';
}

function procesarValidacion(validacion){
  const $contenedorErrores = document.querySelector('#errores');
  const $erroresPrevios = $contenedorErrores.children[0];

  if ($erroresPrevios) {
    $erroresPrevios.remove()
  }

  if(validacion) {
    const $error = document.createElement('li');
    $error.textContent = validacion;
    $error.id = 'error';

    $contenedorErrores.appendChild($error);
  } else {
    return '';
  }
}
