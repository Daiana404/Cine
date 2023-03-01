const navegador = document.getElementById('navegador');
const btnMenu = document.querySelector('#btn-menu');
const btnCerrar = document.querySelector('#btn-cerrar');
const liNav = document.querySelectorAll('.li-item');

let ocultar = (elemento) => {
    elemento.style.opacity = '0';
    elemento.style.visibility = 'hidden';
}
let mostrar = (elemento) => {
    elemento.style.opacity = '1';
    elemento.style.visibility = 'visible';
}
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
let mediaQ = (x) => {
    if (x.matches) {
        navegador.classList.add('show');
        mostrar(btnMenu);
        mostrar(btnCerrar);
    } else {
        navegador.style.transform = 'translateY(0%)';
        navegador.classList.remove('show');
        ocultar(btnMenu);
        ocultar(btnCerrar);
    }
}
const x = window.matchMedia("(max-width: 750px)");
mediaQ(x);
x.addListener(mediaQ);
liNav.forEach(li => {
    li.addEventListener('click', (e) => {
        liNav.forEach(l => {l.classList.remove('select')});
        e.currentTarget.classList.add('select');
    })
})
////////////////////////Inicio
const boxPeliculas = document.querySelectorAll('.box-pelicula');
const detalles = document.querySelectorAll('.box');

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

