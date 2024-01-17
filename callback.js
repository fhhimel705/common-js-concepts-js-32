function greeting(handler, name){
    console.log(handler(name));
}

// const name = 'halim';
// const numbers = [11, 22, 33];
// const laptop = {price: 50000, brand:'acer', memory: '16gb'};

function greetingHandler(name){
    console.log('good morning', name);
}
function greetNight(name){
    console.log('good night', name);
}

greeting(greetingHandler, 'shanks');
greeting(greetingHandler, 'garp');
greeting(greetingHandler, 'coby');

greeting(greetNight, 'nami');
greeting(greetNight, 'robin');


function btnHandler(){
    console.log('btn clicked');
}
document.getElementById('btn').addEventListener('click', btnHandler);