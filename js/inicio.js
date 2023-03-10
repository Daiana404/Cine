const peliculasCartelera = [
    /* {
        titulo: 'El aro 4',
        id: 'el-aro-4',
        intertitulo: 'el despertar',
        img: './scss/img/el-aro-4.jpg',
        fondo: '../scss/img/el-aro-4-fondo.jpg',
        descripcion: 'Ichijo es retado por un famoso médium conocido como Kenshin para que resuelva el misterio del “video de la maldición” que no te mata en 7 días, sino que ahora mata en 24 horas. Así, en su investigación el estudiante se unirá al autoproclamado adivino Oji Maeda para ahondar en la historia de la escalofriante Sadako.',
        especificaciones: {
            genero: 'terror',
            duracion: '1.40',
            clasificacion: '+13'
        },
        dato: {
            premiere: '23 de febrero de 2023',
            director: 'Hisashi Kimura',
            musica: 'Kôji Endô',
            reparto: ['Fuka Koshiba', 'Kazuma Kawamura', 'Mario Kuroba'],
            repartoGoogle: 'https://www.google.com/search?q=el+aro+4&rlz=1C1CHZN_esAR993AR993&oq=el+aro+4&aqs=chrome.0.0i271j46i131i433i512j46i433i512j46i512l2j0i512j46i512j0i512l2j46i512.1085j0j7&sourceid=chrome&ie=UTF-8#wptab=si:AEcPFx5m7Nylg00wpE-iI3fN8-AfSDNfZqA7NKPDMKmG1MgjOhCtz3XVxKdMdK29gG4M7YUY_DEa6SC_J5rw8VAW37XIX7qrI1NgmJA5T6g7qKbqqAB1KPWPhkFDLpAuC5Rw8vnzun2Og4ppv7aoroiXPd6OScSKYw%3D%3D'
        },
        trailer: '<iframe src="https://www.youtube.com/embed/O9NmvWyJb4g" title="El Aro 4 | Tráiler oficial subtitulado | Estreno en cines mayo 2023" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    }, */
    {
        titulo: 'El gato con botas',
        id: 'el-gato-con-botas',
        intertitulo: 'el último deseo',
        img: './scss/img/el-gato-con-botas-2.jpg',
        fondo: '../scss/img/el-gato-con-botas-2-fondo.jpg',
        descripcion: 'El Gato con Botas descubre que, debido a su pasión por la aventura, ha gastado ya 8 de sus 9 vidas. Por tanto, emprende un peligroso viaje en busca del legendario Último Deseo para solicitar que le restauren las vidas que ya perdió.',
        especificaciones: {
            genero: 'aventura / comedia',
            duracion: '2.28',
            clasificacion: 'atp'
        },
        dato: {
            premiere: '5 de enero de 2023',
            director: 'joel Crawford',
            musica: 'Heitor Pereira',
            reparto: ['Antonio Banderas', 'Salma Hayek', 'Florence Push'],
            repartoGoogle: 'https://www.google.com/search?q=el+gato+con+botas+2+reparto&rlz=1C1CHZN_esAR993AR993&sxsrf=AJOqlzVr0yp0-mTmPxMqoTzeP7s82614Gw%3A1677788177064&ei=EQQBZJLAA-3U1sQPgpibQA&oq=el+gato++2+reparto&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgAMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIGCAAQCBAeOggIABAIEAcQHkoECEEYAFAAWOIJYMkPaABwAXgAgAGhAYgBqAiSAQMwLjiYAQCgAQHAAQE&sclient=gws-wiz-serp'
        },
        trailer: '<iframe src="https://www.youtube.com/embed/18v5EPO5ySs" title="El Gato Con Botas 2: El Último Deseo | Tráiler Oficial (Universal Pictures) HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    },
    {
        titulo: 'Avatar 2',
        id: 'avatar-2',
        intertitulo: 'el camino del agua',
        img: './scss/img/avatar-2.webp',
        fondo: '../scss/img/avatar-2-fondo.jpg',
        descripcion: 'Jake Sully y Ney\' tiri han formado una familia y hacen todo lo posible por permanecer juntos. Sin embargo, deben abandonar su hogar y explorar las regiones de Pandora cuando una antigua amenaza reaparece.',
        especificaciones: {
            genero: 'ciencia ficción / acción',
            duracion: '3.12',
            clasificacion: '+13'
        },
        dato: {
            premiere: '15 de diciembre de 2022',
            director: 'James Cameron',
            musica: 'Simon Franglen',
            reparto: ['Sam Worthington', 'Zoe Saldaña', 'Sigourney Weaver'],
            repartoGoogle: 'https://www.google.com/search?q=avatar+2+reparto&rlz=1C1CHZN_esAR993AR993&oq=avatar+2+re&aqs=chrome.1.69i57j0i20i263i433i512j0i512j0i433i512j0i512l3j69i60.9767j0j7&sourceid=chrome&ie=UTF-8'
        },
        trailer: '<iframe src="https://www.youtube.com/embed/bDFKIs4v0B4" title="Avatar: El Camino del Agua | Tráiler Oficial | Subtitulado" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    }
]
const contenedorPeliculas = document.querySelector('.contenedor-peliculas');

peliculasCartelera.forEach(pelicula => {
    const div = document.createElement('div');
    div.classList.add('box-pelicula');
    div.setAttribute('id', `box-${pelicula.id}`);
    div.innerHTML = `
        <img src="${pelicula.img}" alt="${pelicula.titulo}">
        <div class="detalle">
            <p class="genero">${pelicula.especificaciones.genero}</p>
            <h1>${pelicula.titulo}</h1>
            <p class="duracion">${pelicula.especificaciones.duracion} <span>hs</span></p>
            <p class="intertitulo"> ${pelicula.intertitulo} </p>
        </div>
    `;
    contenedorPeliculas.appendChild(div);
})
window.addEventListener('load', () => {
    let boxPeliculaInicial = document.querySelectorAll('.box-pelicula')[0];
    boxPeliculaInicial.classList.add('selected');
})
///////////////////////////////////////
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

