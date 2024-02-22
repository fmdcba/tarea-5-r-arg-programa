function probarValidarSalario(){
  console.assert(validarSalario('') === 'Debes ingresar un salario',
  'Validar salario no validó que se ingresara un salario para calcular');

  console.assert(validarSalario(-1) === 'El salario debe ser mayor a 0',
  'Validar salario no validó que el salario ingresado sea mayor a 0');
}

probarValidarSalario();
