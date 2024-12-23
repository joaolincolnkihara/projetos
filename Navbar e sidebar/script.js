var itens = document.getElementById('itens')

// MOBILE
function clickMenu(){
    if(itens.style.display == 'none'){
        itens.style.display = 'block'
    }else{
        itens.style.display = 'none'
    }
}

// PC
function closeBtn(){
        itens.style.display = 'none'
}