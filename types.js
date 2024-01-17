// int a =5;
// string b = 'hello';
// bool c = true;
// object sttudent = {name: 'hello' , id:55};
// int[] numbers = [11 , 21 , 25];
// string[] names = ['abdul' , 'jojo'];

// dynamic type language

// primitive  type
const a = 5;
const b = 'kopa samsu';
const d = true;

// nonprimitive type
const ages = [511 , 22, 56];
const student = {name:'korim' , class : 5};

console.log(typeof a, typeof b, typeof d, typeof ages, typeof student);

// primitive types create different memory
let x = 5;
let y = x;
console.log(x , y);
y = 78;
console.log(x , y);

// non-primitive types refers the same memory
let q = {name:'rohim'};
let z = q;
console.log(q , z);
z.name = 'korim';
console.log(q , z);
