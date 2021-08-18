function getPin() {
    const pin = Math.round(Math.random()*100000 )
    const pinString =pin + '';
    if(pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
};
document.getElementById('key-pad').addEventListener('click',function(){   
const number = event.target.innerText;
const calcInput = document.getElementById('keyped-numbers');
if(isNaN(number)){
if(number == 'C'){
    calcInput.value = '';
}

}
else {
const previousNumber =calcInput.value;
const newCale =previousNumber + number;
calcInput.value = newCale;
}

});

function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typed =document.getElementById('keyped-numbers').value;
    if(pin == typed) {
        document.getElementById('pin-matched').style.display='block';
        document.getElementById('pin-failed').style.display='none';
    }
else {
    document.getElementById('pin-failed').style.display='block';
    document.getElementById('pin-matched').style.display='none';
}
}