document.querySelector('#entrar-al-bar').onclick = function(e) {
  const $nombreUsuario = document.querySelector('#nombre-usuario');
  const $segundoNombreUsuario = document.querySelector('#segundo-nombre-usuario');
  const $apellidoUsuario = document.querySelector('#apellido-usuario');
  const $edadUsuario = document.querySelector('#edad-usuario');
  const nombreUsuario = $nombreUsuario.value;
  const segundoNombreUsuario = $segundoNombreUsuario.value;
  const apellidoUsuario = $apellidoUsuario.value;
  const edadUsuario = Number($edadUsuario.value);

  borrarResultadoAnterior();
  mostrarResultado(nombreUsuario, segundoNombreUsuario, apellidoUsuario, verificarEntradaBar(edadUsuario));

  e.preventDefault();
}

document.querySelector('#reiniciar').onclick = function(e) {

  borrarResultadoAnterior();
  borrarNombreUsuario();

  e.preventDefault()
}

function verificarEntradaBar(edad){
  if (edad >= 18) {
    return 'si';
  } else {
    return 'no';
  }
}

function mostrarResultado(nombre, segundoNombre, apellido, edad){
  document.querySelector('#saludo-nombre-usuario').textContent = nombre;

  const $textoResultado = document.createElement('p');
  $textoResultado.id = 'resultado';
  $textoResultado.textContent = `Hola ${nombre} ${segundoNombre} ${apellido}, ${edad} podés pasar al bar`;

  const $contenedorResultado = document.querySelector('#contenedor-resultado');
  $contenedorResultado.appendChild($textoResultado);
}

function borrarResultadoAnterior(){
  const $resultado = document.querySelector('#resultado');

  if ($resultado !== null) {
    $resultado.remove();
  }
}

function borrarNombreUsuario(){
  document.querySelector('#saludo-nombre-usuario').textContent = '';
}
