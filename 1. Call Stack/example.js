
// Call stack is datastructure which records where in program we are.
// The call stack is usded by javascript to keep track of multiple functions calls.

// it is like a real stack in data structre where data can be pshed and popped and follows the last in first out(LIFO) principle.
//we use call stack for memorizing function is running right now.

// How much memory is in the stack?
//it depends on your operating system on windows the typical maximum size for a stack is 1mb,
// where as it is 8mb on a typical modern linux 
//maximum call stack size is 16000 frames.

function baz(){
    bar();
}
function bar(){
    foo();
}
function foo(){
    throw new Error("Opps");
}
baz();

// Stack trace
// Error: Opps
//     at foo (D:\Notes And Practice\JavaScript\2. Call Stack\example.js:8:11)
//     at bar (D:\Notes And Practice\JavaScript\2. Call Stack\example.js:5:5) 
//     at baz (D:\Notes And Practice\JavaScript\2. Call Stack\example.js:2:5)
//     at Object.<anonymous> (D:\Notes And Practice\JavaScript\2. Call Stack\example.js