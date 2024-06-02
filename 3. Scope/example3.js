// JavaScript Visualizer - https://ui.dev/javascript-visualizer/

var name="Tom";
var title="Crusier";

function logName(){
    console.log(name);
}

function logTitle(){
    var title="Walker";
    console.log(window.title);
    console.log(this.title);
    console.log(title);
}

function foo(){
    a=2;// if var is not declared then it will create a global scope variable
    // we can avoid  this using "use.strict"; mode
}

logName();
logTitle();
foo();

console.log(a);