// JavaScript Visualizer - https://ui.dev/javascript-visualizer/

// scope -> The current contextof execution

// Scopes => Global , Function, Blocklevel scope decalerd in window objects
// Whenever a certain piece of code  is running, Scope means what variable do i have access to.

// 1. Global Scope => Can be accessed any where
// 2. Function Scope => Once  the function is executed the varible inside  them will be  destroyed or removed from memory.
// 3. Block level scope => using const and let
// Once the if  block or for  loop execution is over  the varible  inside them will be destroyed or removed from memory

function foo(){
    var name= "namrata";
}
foo();
console.log(name);