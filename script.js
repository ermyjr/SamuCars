const image = document.querySelector(".cars");
function trocaImagem(endereco) {
    image.src = endereco
};




let ambulance = document.querySelector("#ambulance");
let vir = document.querySelector("#vir");
let mike = document.querySelector("#mike");
let helicopter = document.querySelector("#air");
let lancha = document.querySelector("#water");
let info = document.getElementById('infos')

ambulance.addEventListener('click', () => {
    info.getElementsByTagName('span')[0].innerHTML = "ambulância";
    info.getElementsByTagName('p')[0].innerHTML = " atualizando...";
    
});

vir.addEventListener('click', () => {
    info.getElementsByTagName('span')[0].innerHTML = "carro";
    info.getElementsByTagName('p')[0].innerHTML = "atualizando...";
});

mike.addEventListener('click', () => {
    info.getElementsByTagName('span')[0].innerHTML = "moto";
    info.getElementsByTagName('p')[0].innerHTML = "atualizando...";
});

helicopter.addEventListener('click', () => {
    info.getElementsByTagName('span')[0].innerHTML = "aéreo";
    info.getElementsByTagName('p')[0].innerHTML = "atualizando...";
});

lancha.addEventListener('click', () => {
    info.getElementsByTagName('span')[0].innerHTML = "naval";
    info.getElementsByTagName('p')[0].innerHTML = "atualizando...";
});
