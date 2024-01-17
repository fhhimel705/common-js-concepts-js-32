/*
8 ways to get undifined

1. variable that is not initialized will give undifined
2. function with no return
3. parameter that is not given will be undifined
4. return that has no value will return undifined
5. property that doesnt  exists on an obj will give undifined
6. accessing array elements that doesnt exists
7. deleting an element inside an array
8. set a value direnctly will give undidfined

*/

let first;
function second(a, b) {
  const total = a + b;
}
// console.log(second(5, 5));

function third(a, b, c, d) {
  const total = a + b + c + d;
  console.log(a, b, c, d);
}
// console.log(third( 5, 6));

function noNegative(a , b){
    if(a < 0 || b< 0){
        return;
    }
    return a + b;
}
const total = noNegative(2 , -5);
// console.log(total);

const fifth = {id:2, name:'kodom', age : 65};
// console.log(fifth.age , fifth.salary);

const sesta = [1, 2, 3, 4];
// console.log(sesta[1] , sesta[3], sesta[0] , sesta[200]);

// not recommended
delete sesta[1];
// console.log(sesta);

const eight = undefined;

const ninth = null;

const data = {results :[], update: null};