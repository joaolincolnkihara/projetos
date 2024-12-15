//Lista de pessoas
var listaPessoas = [
    {
        id: 1,
        name: "Cauã Silva",
        job: "Godinho safado",
        image:"imagens/caua.jpeg" ,
        info:"",
    },
    {
        id: 2,
        name: "João Leo",
        job: "memoria",
        image: "imagens/joaoleo.jpeg",
        info:"Eu tenho 3 metros de cabeça"
    },
    {
        id: 3,  
        name: "Guilherme",
        job: "mamador",
        image: "imagens/guilherme.jpeg",
        info: "Roblox",
    }
];
//Informações da pessoa
var imageEl = document.getElementById('image');
var nameEL = document.getElementById('name');
var jobEL = document.getElementById('job');
var infoEL = document.getElementById('info');

//Botões
var prevBtn = document.querySelector('.prevBtn');
var nextBtn = document.querySelector('.nextBtn');
var suprise = document.querySelector('.suprise');

//  item de start
let currentItem =0 //de alguma forma ira se lifgar com o id do LISTADEPESSOAS

//carregar item inicial
// window.addEventListener("DOMContentLoaded", function() {
//     var item = listaPessoas[currentItem]; //a variavel item recebe a listaPessoas[currentItem] ou seja listaPessoa[0] ou seja la o numero de currentItem
//     imageEl.src = item.image
//     nameEL.textContent = item.name
//     jobEL.textContent = item.job
//     infoEL.textContent = item.info
// });

//teste
window.addEventListener("DOMContentLoaded", function() {
    carregarItem();
});

function carregarItem(){
    var item = listaPessoas[currentItem]
    imageEl.src = item.image
    nameEL.innerHTML = item.name
    jobEL.innerHTML = item.job
    infoEL.innerHTML = item.info
}
carregarItem()

function go(){
    if(currentItem > listaPessoas.length - 2){
        currentItem = 0
        carregarItem()
    }else{
        currentItem++
        carregarItem()
    }
}
function back(){
    currentItem--;
    if(currentItem < 0){
        currentItem = listaPessoas.length - 1;
    }
    carregarItem()
}

function random(){
    currentItem = parseInt(Math.random() * listaPessoas.length)
    carregarItem()
}
