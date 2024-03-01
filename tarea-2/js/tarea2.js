const $botonAccion = document.querySelector('#ingresar');
const $botonReinciar = document.querySelector('#reiniciar');

$botonAccion.onclick = function (){
  const $nombreUsuario = document.querySelector('#nombre-usuario');
  const $segundoNombreUsuario = document.querySelector('#segundo-nombre-usuario');
  const $apellidoUsuario = document.querySelector('#apellido-usuario');
  const $edadUsuario = document.querySelector('#edad-usuario');
  const nombreUsuario = document.querySelector('#nombre-usuario');
  const segundoNombreUsuario = document.querySelector('#segundo-nombre-usuario').value;
  const apellidoUsuario = document.querySelector('#apellido-usuario').value;
  const edadUsuario = Number(document.querySelector('#edad-usuario').value);

  if (validarDatos($nombreUsuario, $segundoNombreUsuario, $apellidoUsuario, $edadUsuario) !== '') {
    mostrarDatosUsuario(nombreUsuario, segundoNombreUsuario, apellidoUsuario, edadUsuario);
    darBienvenidaUsuario(nombreUsuario, edadUsuario);

    ocultarError($nombreUsuario);
    ocultarError($segundoNombreUsuario);
    ocultarError($apellidoUsuario);
    ocultarError($edadUsuario);
  }

}

$botonReinciar.onclick = function(){
  document.querySelector('#saludo').innerText = 'El Bar de R-Arg Programa';
  document.querySelector('#resultado').innerText = '';
  document.querySelector('#nombre-usuario').value = '';
  document.querySelector('#segundo-nombre-usuario').value = '';
  document.querySelector('#apellido-usuario').value = '';
  document.querySelector('#edad-usuario').value = '';
}

function mostrarDatosUsuario(nombre, segundoNombre, apellido, edad){
  const $resultado = document.querySelector('#resultado');

  $resultado.innerText = `Hola ${nombre} ${segundoNombre} ${apellido}, tu edad es ${edad}.`;
}

function darBienvenidaUsuario(nombre, edad){
  const $saludo = document.querySelector('#saludo');


  if (edad >= 18) {
    $saludo.innerText = `Bienvenido, ${nombre}! Podés pasar al bar 👌 y disfrutar de tu cerveza 🍻`;
  } else {
    $saludo.innerText = `Bienvenido ${nombre}! lamentablemente no podés pasar al bar porque solo tenés ${edad} años ❌`
  }
}

function validarIdentificacion(identificacion){
  if (identificacion.length === 0) {
    return 'Este campo no puede estar vacío';
  }

  if (identificacion.length > 40 ) {
    return 'Este campo no admite mas de 40 caracteres';
  }

  return '';
}

function validarDatos(nombre, segundoNombre, apellido, edad) {
  if (procesarValidacion(validarIdentificacion(nombre.value))) {
    resaltarError(nombre);
  };
  if (procesarValidacion(validarIdentificacion(segundoNombre.value))) {
    resaltarError(nombre);
  };
  if (procesarValidacion(validarIdentificacion(apellido.value))) {
    resaltarError(nombre);
  };
  if (procesarValidacion(validarIdentificacion(Number(edad.value)))) {
    resaltarError(nombre);
  };

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

function resaltarError(campo){
  campo.className = 'error';
}

function ocultarError(campo){
 campo.className = '';
}
