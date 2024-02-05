const $botonCalcularSalario = document.querySelector('#calcular-salario-mensual');
const $botonLimpiar = document.querySelector('#reinciar');

$botonCalcularSalario.onclick = function (){
  const salarioAnual = Number(document.querySelector('#salario-anual').value);
  const salarioMensual = calcularSalarioMensual(salarioAnual);

  mostrarSalarioMensual(salarioMensual);

  return false;
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
