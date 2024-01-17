let num1 = 5;
let num2 = 9;

function multiply(a , b){
    a = 20;
    const results = a * b;
    return results;
}
// console.log(num1);
const output = multiply(num1 , num2);
// console.log(output);

// object and array pass by reference
let student01 = {name: 'rohim' , parter:'borsha'};
let student02 = {name: 'korim' , parter:'anika'};

function makeMovie(couple1 , couple2){
    couple1.name = 'ononto';
    couple2.parter = 'mim';

}
// console.log(student01);
makeMovie(student01 , student02);
console.log(student01 , student02);
