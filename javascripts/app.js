const tarjetaRegistrado = document.getElementById("tarjeta-registrado");
const tarjetaNoRegistrado = document.getElementById("tarjeta-noregistrado");
const formRegistrado = document.getElementById("form-registrado");
const formNoRegistrado = document.getElementById("form-noregistrado");


tarjetaRegistrado.addEventListener('click', () => {
    formRegistrado.classList.add('mostrar');
    formNoRegistrado.classList.remove('mostrar');
    tarjetaRegistrado.classList.add('activa');
    tarjetaNoRegistrado.classList.remove('activa');
});


tarjetaNoRegistrado.addEventListener('click', () => {
    formNoRegistrado.classList.add('mostrar');
    formRegistrado.classList.remove('mostrar');
    tarjetaNoRegistrado.classList.add('activa');
    tarjetaRegistrado.classList.remove('activa');
});


document.querySelectorAll('.cancelar').forEach(boton => {
    boton.addEventListener('click', () => {
        formRegistrado.classList.remove('mostrar');
        formNoRegistrado.classList.remove('mostrar');
        tarjetaRegistrado.classList.remove('activa');
        tarjetaNoRegistrado.classList.remove('activa');
    });
});