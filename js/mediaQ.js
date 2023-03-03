const navegador = document.getElementById('navegador');
const encabezado = document.getElementById('encabezado');
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
let mediaQ = (x) => {
    if (x.matches) {
        navegador.classList.add('show');
        mostrar(btnMenu);
        mostrar(btnCerrar)
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

////////////////////////Navegador
btnMenu.addEventListener('click', () => {
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
        //Si algún item es clickeado
        navegador.style.transform = 'translateY(-100%)';
        mostrar(btnMenu);
    })
})

/////////////////////////Scroll
const blurElement = document.querySelectorAll('.blur');
blurElement.forEach(element => {
    window.addEventListener('scroll', () => {
        if(window.scrollY > 50) {
            element.style.backdropFilter = 'blur(10px)';
        } else {
            element.style.backdropFilter = 'blur(0)';
        }
    })
})