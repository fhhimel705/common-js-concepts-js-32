/*
Truthy:
1. true
2. any number (+ve , -ve) will be truthy
3. any string else empty string
4. '0' , 'false'
5. {}
6. []

Falsy:
1. false
2. 0
3. '' (empty string)
4. undifined
5. null

*/

const x = false;
if (x) {
  console.log("value of x is truthy");
} else {
  console.log("value of x is falsy");
}

// check this
const y = ' ';
if(!y){
    console.log('value is falsy');
}
else{
    console.log('truthy');
}

const z = ' ';
if(!!z){
    console.log('value is falsy');
}
else{
    console.log('truthy');
}