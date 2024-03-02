document.querySelector('#calcular-salario-mensual').onclick = function (e){
  salarioAnual = Number(document.querySelector('#salario-anual').value);
  salarioMensual = calcularSalarioMensual(salarioAnual);
  document.querySelector('#salario-mensual').value = salarioMensual;

  e.preventDefault();
}

function calcularSalarioMensual(salarioAnual){
  return salarioAnual / 12;
}

function validarSalario(salario){
  const SALARIO_MAXIMO_ACEPTADO = 1000000000000;

  if (salario <= 0) {
    return 'El campo salario debe ser mayor a 0';
  }

  if (salario >= SALARIO_MAXIMO_ACEPTADO) {
    return `El campo salario debe ser menor a ${SALARIO_MAXIMO_ACEPTADO}`;
  }

  return '';
}
