const peliculasCartelera = [
    {
        nombre: 'El gato con botas',
        id: 'el-gato-con-botas',
        descripcion: 'el último deseo',
        img: 'http://www.bolivar.gob.ar/imagenes/20230109130404-el-gato-con-botas.jpg',
        fondo: 'https://s1.dmcdn.net/v/U0I7S1YgXzjrcdkRm/x1080',
        especificaciones: {
            genero: 'aventura / comedia',
            duracion: '2.28',
            clasificacion: 'atp'
        }
    },
    {
       nombre: 'Avatar 2',
       id: 'avatar-2',
       descripcion: 'el camino del agua',
       img: 'https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2022/11/avatar-2.jpg?fit=1921%2C1123&ssl=1',
       fondo: 'https://img2.rtve.es/imagenes/james-cameron-hemos-rodado-vez-tres-secuelas-avatar/1671117282894.jpg',
       especificaciones: {
           genero: 'ciencia ficción / acción',
           duracion: '3.12',
           clasificacion: '+13'
       }
   }
]
const contenedorPeliculas = document.querySelector('.contenedor-peliculas');

peliculasCartelera.forEach(pelicula => {
    const div = document.createElement('div');
    div.classList.add('box-pelicula');
    div.setAttribute('id', `box-${pelicula.id}`);
    div.innerHTML = `
        <img src="${pelicula.img}" alt="${pelicula.nombre}">
        <div class="detalle">
            <p class="genero">${pelicula.especificaciones.genero}</p>
            <h1>${pelicula.nombre}</h1>
            <p class="duracion">${pelicula.especificaciones.duracion} <span>hs</span></p>
            <p class="descripcion"> ${pelicula.descripcion} </p>
        </div>
    `;
    contenedorPeliculas.appendChild(div);
})
window.addEventListener('load', () => {
    let boxPeliculaInicial = document.querySelectorAll('.box-pelicula')[0];
    boxPeliculaInicial.classList.add('selected');
})
///////////////////////////////////////
const navegador = document.getElementById('navegador');
const btnMenu = document.querySelector('#btn-menu');
const btnCerrar = document.querySelector('#btn-cerrar');
const liNav = document.querySelectorAll('.li-item');

////////////////////////Navegador
btnMenu.addEventListener('click', () => {
    mostrar(btnCerrar);
    ocultar(btnMenu);
    navegador.style.transform = 'translateY(0)';
})
btnCerrar.addEventListener('click', () => {
    navegador.style.transform = 'translateY(-100%)';
    mostrar(btnMenu);
})
liNav.forEach(li => {
    li.addEventListener('click', (e) => {
        liNav.forEach(l => {l.classList.remove('select')});
        e.currentTarget.classList.add('select');
    })
})
////////////////////////Inicio
const boxPeliculas = document.querySelectorAll('.box-pelicula');
const detalles = document.querySelectorAll('.box');
const btnMas = document.querySelector('.mas');
let removerSelected = () => {
    boxPeliculas.forEach(item => {
        item.classList.remove('selected');
        item.firstElementChild.style.opacity = 0;
    });
}
boxPeliculas.forEach(box => {
    box.addEventListener('click', (e) => {
        removerSelected();
        e.currentTarget.classList.add('selected');
        e.currentTarget.firstElementChild.style.opacity = 1;
        
    })
})
//Temporizador para cambiar de película en cartelera
let i = 0;
setInterval(() => {
    if(i < boxPeliculas.length){ i++ } else { i = 1 }
    if(i === boxPeliculas.length){ i = 0 }
    removerSelected();
    boxPeliculas[i].firstElementChild.style.opacity = 1;
    boxPeliculas[i].classList.add('selected');
}, 10000);
//Botón más
btnMas.addEventListener('click', () => {
    const seleccionada = Array.from(boxPeliculas).find(pelicula => pelicula.classList.contains('selected'));
    const pelicula = peliculasCartelera.find(pelicula => `box-${pelicula.id}` === seleccionada.id);
    //LocalStorage
    localStorage.setItem('pelicula', JSON.stringify(pelicula));
})

