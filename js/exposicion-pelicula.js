const peliculaSeleccionada = JSON.parse(localStorage.getItem('pelicula'));
const fondo = document.querySelector('.cuerpo-exposicion-cartelera');
const titulo = document.querySelector('.titulo-pelicula');
const intertitulo = document.querySelector('.intertitulo-pelicula');
const descripcion = document.querySelector('.descripcion-pelicula');
const premiere = document.getElementById('premiere');
const director = document.getElementById('director');
const musica = document.getElementById('musica');
const genero = document.getElementById('genero');
const trailer =  document.querySelector('.trailer');
const actores = document.querySelector('.actores');
const reparto = document.querySelector('.reparto');
const clasificacion = document.querySelector('.clasificacion');
const duracion = document.querySelector('.duracion');
const verMas = document.getElementById('ver-mas');
//Autocompletado

console.log(peliculaSeleccionada.fondo);
fondo.style.backgroundImage = `url(${peliculaSeleccionada.fondo})`;
titulo.innerHTML = `${peliculaSeleccionada.titulo}`;
intertitulo.innerHTML = `${peliculaSeleccionada.intertitulo}`;
descripcion.innerHTML = `${peliculaSeleccionada.descripcion}`;
premiere.innerHTML = `${peliculaSeleccionada.dato.premiere}`;
director.innerHTML = `${peliculaSeleccionada.dato.director}`;
musica.innerHTML = `${peliculaSeleccionada.dato.musica}`;
genero.innerHTML = `${peliculaSeleccionada.especificaciones.genero}`;
duracion.innerHTML = `${peliculaSeleccionada.especificaciones.duracion}`;
clasificacion.innerHTML = `${peliculaSeleccionada.especificaciones.clasificacion}`;
trailer.innerHTML = `${peliculaSeleccionada.trailer}`;
peliculaSeleccionada.dato.reparto.forEach(actor => {
    const li = document.createElement('li');
    li.innerHTML = `${actor}`;
    actores.appendChild(li);
});
if(peliculaSeleccionada.dato.reparto.length >= 3){
    verMas.innerHTML = `
        <a href="${peliculaSeleccionada.dato.repartoGoogle}">ver más <ion-icon name="arrow-forward-outline"></ion-icon></a>
    `;
    
}