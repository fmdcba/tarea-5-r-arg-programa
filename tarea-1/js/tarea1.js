document.querySelector('#calcular-salario-mensual').onclick = function (e){
  salarioAnual = Number(document.querySelector('#salario-anual').value);
  salarioMensual = calcularSalarioMensual(salarioAnual);
  document.querySelector('#salario-mensual').value = salarioMensual;

  e.preventDefault();
}

function calcularSalarioMensual(salarioAnual){
  return salarioAnual / 12;
}
