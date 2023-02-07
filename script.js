const image = document.querySelector(".cars");
function trocaImagem(endereco){
    image.src = endereco
};




let ambulance = document.querySelector("#ambulance");
let vir = document.querySelector("#vir");
let mike = document.querySelector ("#mike");
let helicopter = document.querySelector("#air");
let lancha = document.querySelector("#water");


vir.addEventListener('click',() => {

    image.onclick = function(){
        this.getElementsByTagName("img")[0].src = "./assets/vir.png";
      };
    console.log('cliqueii')
});