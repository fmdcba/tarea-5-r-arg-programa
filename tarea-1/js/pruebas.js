function probarValidarSalario(){
  console.assert(validarSalario(-2) === 'El campo salario debe ser mayor a 0',
  'Validar salario no validó que se ingresara un salario mayor a 0');

  console.assert(validarSalario(1000000000001) === 'El campo salario debe ser menor a 1000000000000',
  'Validar salario no validó que el salario ingresado sea menor a 1000000000000');
}

probarValidarSalario();

