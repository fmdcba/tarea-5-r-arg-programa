function probarValidarHoras(){
  console.assert(validarHoras(-1) === 'El campo hora no puede ser menor o igual a 0',
    'Validar horas no validó que la hora sea mayor a 0'
  );

  console.assert(validarHoras(24) === 'El campo hora no puede ser mayor a 23',
    'Validar horas no validó que la hora sea menor a 24'
  );
}

function probarValidarMinutos() {
  console.assert(validarMinutos(0) === 'El campo minutos no puede ser menor o igual a 0',
    'Validar minutos no validó que la hora sea mayor a 0'
  );

  console.assert(validarMinutos(60) === 'El campo minutos no puede ser mayor a 59',
    'Validar minutos no validó que la hora sea menor a 60'
  );
}

function probarValidarSegundos(){
  console.assert(validarSegundos(-2) === 'El campo segundos no puede ser menor o igual a 0',
    'Validar segundos no validó que la hora sea mayor a 0'
  );

  console.assert(validarSegundos(63) === 'El campo segundos no puede ser mayor a 59',
    'Validar segundos no validó que la hora sea menor a 60'
  );
}


probarValidarHoras();
probarValidarMinutos();
probarValidarSegundos();
