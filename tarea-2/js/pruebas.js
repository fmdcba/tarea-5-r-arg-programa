function probarValidarNombre() {
  console.assert(validarNombre('') === 'El campo nombre debe tener al menos 1 caracter',
    'Validar nombre no validó que el nombre no sea vacío'
  );

  console.assert(validarNombre('Brhadaranyakopanishadvivekachudamanis') === 'El campo nombre debe tener menos de 36 caracteres',
    'Validar nombre no validó que el nombre sea menor a 36 caracteres'
  );
}

function probarValidarSegundoNombre() {
  console.assert(validarSegundoNombre('') === 'El campo segundo nombre debe tener al menos 1 caracter',
    'Validar segundo nombre no validó que el segundo nombre no sea vacío'
  );

  console.assert(validarSegundoNombre('Brhadaranyakopanishadvivekachudamania') === 'El campo segundo nombre debe tener menos de 36 caracteres',
    'Validar segundo nombre no validó que el segundo nombre sea menor a 36 caracteres'
  );
}

function probarValidarApellido() {
  console.assert(validarApellido('') === 'El campo apellido debe tener al menos 1 caracter',
    'Validar apellido no validó que el apellido no sea vacío'
  );

  console.assert(validarApellido('Keihanaikukauakahihuliheekahaunaelese') === 'El campo apellido debe tener menos de 36 caracteres',
    'Validar apellido no validó que el apellido sea menor a 36 caracteres'
  );
}

function probarValidarEdad() {
  console.assert(validarEdad(-2) === 'El campo edad debe ser mayor a 0',
    'Validad edad no validó que la edad sea mayor a 0'
  );

  console.assert(validarEdad(140) === 'El campo edad no puede ser mayor a 130',
    'Validad edad no validó que la edad sea menor a 130'
  );
}

probarValidarNombre();
probarValidarSegundoNombre();
probarValidarApellido();
probarValidarEdad();
