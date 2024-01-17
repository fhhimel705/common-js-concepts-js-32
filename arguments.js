// arguments are array link object

function sum(a, b, c){
    const results = a + b + c;
    const args = [...arguments];
    console.log(args);
    console.log(arguments);
    return results;
}
// console.log(arguments);

const total = sum(11, 22, 33, 44, 55, 66, 77);
console.log(total);
console.log(sum.length);