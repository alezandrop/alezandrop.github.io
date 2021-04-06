// Esto es un comentario
/*
Esto es un comentario
de varias líneas.
*/
var miImage = document.querySelector('img');

miImage.onclick = function () {
    var miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/firefox-icon.png') {
      miImage.setAttribute('src','images/chrome1.png');
    } else {
      miImage.setAttribute('src', 'images/firefox-icon.png');
    }
}
var miBoton = document.querySelector('button');
var miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
    let miNombre = prompt('Introduzca su nombre.');
if (!miNombre) {
	estableceNombreUsuario();
} else {
	localStorage.setItem('nombre', miNombre);
	miTitulo.innerHTML = 'Mozilla is genial, ' + miNombre;
  }
}
	
miBoton.onclick = function() {
    estableceNombreUsuario();
}