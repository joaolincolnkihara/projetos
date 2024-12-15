// decrease
// reset
// increase
var number = 0
var textNumber = document.getElementById('number')

function color(){
    if(number > 0){
        textNumber.style.color = 'green'
    }if (number == 0){
        textNumber.style.color = 'black'
    }if(number < 0){
        textNumber.style.color = 'red'
    }
}

function decrease(){
    number--
    textNumber.innerHTML = number
    color()
}

function reset(){
    number = 0
    textNumber.innerHTML = number
    textNumber.style.color = 'black'
}

function increase(){
    number ++
    textNumber.innerHTML = number
    color()
}