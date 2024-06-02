// http://jsbin.com/?js,console

let myVariable;
let myFunction = function(){
    let myVariable1='myVariable is awsome';
    console.log(myVariable1);
    let innerFunction = function(){
        console.log(myVariable1);
    }
};

console.log(myVariable);// undefined
myFunction(); // myVariable is awsome