console.log("this file is connected");

const display= document.getElementById('display');

function appendToDisplay(input){
    display.value += input;

}

function clearDisplay(){
       display.value = '0';
}

function calculate(){
    try{
        display.value = eval(display.value); 
    }
   catch(error){
    display.value = 'ERROR';
   }
}