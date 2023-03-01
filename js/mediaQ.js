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