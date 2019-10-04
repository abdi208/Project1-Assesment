
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var display = document.getElementById('display');
var number = document.getElementById('number');
plus.addEventListener("click", addOne);
minus.addEventListener("click", minusOne);

function addOne(){
        
        var addedNumber = parseInt(number.value);
        var displayNumber = parseInt(display.innerHTML)
        var total = addedNumber + displayNumber
        display.innerHTML = total
        if(total > 0){
            display.style.color = "black";
        }
    
}

function minusOne(){
        var addedNumber = parseInt(number.value);
        var displayNumber = parseInt(display.innerHTML)
        var total = displayNumber - addedNumber
        display.innerHTML = total
        if(total < 0){
            display.style.color = "red";
        }
}
