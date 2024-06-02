// Data types in js => premitive and Objects

//Number, String, Boolean, null, undefined and Objects

// 1. Vale/ premitive types -
    // -> Number , string , Boolean, null , undefined ,Symbol
    // -> NaN(Not an premetive type exactly but we can considered it). Number(undefined)=NaN
    //    Everything else is an Object.
    // ->immutable -> Original value is not changed  - cause pass by value 
    //   -> compared by value
//   -> copied by value
//   -> Stored in stack memory as we don't need much space (simple data). Takes less space


// 2. Reference types (mutable)
//   -> Object, Arrays, Functions, Regular expression (Arrays and functions are also objects)
//   -> mutable - cause pass by reference
//   -> compared by reference
//   -> copied by reference
//   -> stored in heap memory as we need much space (complex data). Takes more space
//   -> E.g. The element is created in the heap which creates an object.
//      But we have a pointer in the stack which stores reference. The variable stores reference.

// 6+"hello"=> NaN
// typeof NaN => Number (typeof operator)

var name="max";
console.log(name);//max

var secondName=name;
console.log(secondName);//max

name="Tylor";
console.log(secondName);//max

//null is an assigned value, it means nothing
// undefined means a variable has been declared yet but not defined yet
// null is an object . undefined is a type of object
// null !==undefiend but null == undefined

console.log(typeof null);// object ->it's a bug  -> it should be null

// stack vs heap
// stack - less memory space. access is faster.
// Heap- More memory space , access is slower than task.

//Whenever we store any premitive type of data in variable -> it gets stored on top of the stack