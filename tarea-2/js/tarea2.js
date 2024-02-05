const $botonAccion = document.querySelector('#ingresar');
const $botonReinciar = document.querySelector('#reiniciar');

$botonAccion.onclick = function (){
  const $nombreUsuario = document.querySelector('#nombre-usuario').value;
  const $segundoNombreUsuario = document.querySelector('#segundo-nombre-usuario').value;
  const $apellidoUsuario = document.querySelector('#apellido-usuario').value;
  const $edadUsuario = Number(document.querySelector('#edad-usuario').value);

  mostrarDatosUsuario($nombreUsuario, $segundoNombreUsuario, $apellidoUsuario, $edadUsuario);
  darBienvenidaUsuario($nombreUsuario, $edadUsuario);
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
