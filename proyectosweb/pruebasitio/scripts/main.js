/*const miTitulo =  document.querySelector('h1');
miTitulo.textContent = '¡Hola mundo!';
let suma = 2;
suma = 2;
suma = "Hola";*/

let miImagen =  document.querySelector('img');
miImagen.onclick = function(){
    let miSrc = miImagen.getAttribute('src');
    if(miSrc === 'images/tortuga.jpg'){
        miImagen.setAttribute('src', 'images/bici.jpg');
    }else{
        miImagen.setAttribute('src', 'images/tortuga.jpg');
    }
}
let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');

function estableceNombreUsuario(){
    let miNombre = prompt('Por favor ingresa tu nombre');
    if(!miNombre){
        miNombre = prompt('Por favor ingresa tu nombre')
    }else{
        localStorage.setItem('nombre', miNombre);
        miTitulo.textContent = 'Mozilla es genial, '+miNombre;
    }
}
if (!localStorage.getItem('nombre')){
    estableceNombreUsuario();
}else{
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Mozilla es genial, '+ nombreAlmacenado;
}


miBoton.onclick = function() {
    estableceNombreUsuario();
}
