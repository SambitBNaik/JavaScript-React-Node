// https://www.javascripttutorial.net/object/3-ways-to-copy-objects-in-javascript/#:~:text=Shallow%20copy%20vs.,can%20be%20primitive%20or%20references.&text=A%20deep%20copying%20means%20that,connected%20to%20the%20original%20variable.

// SHALLOW COPY - Changes to the reference objects in source object are also reflected in the Destination Object.

const person={
    firstName:"John",
    lastName:"Doe",
};

//1.using spread ...
let p1={
    ...person,
};

console.log(p1);

//2.using Object.assign() method
let p2=Object.assign({},person);
console.log(p2);

// Copy array
// copied reference of array
let arr1=["a","b"];
let arr1copy=arr1;
arr1.push("c");
console.log(arr1copy);

//Deep copy

//1. using JSON
let p4=JSON.parse(JSON.stringify(person));
console.log(p4);
// Why use JSON “parse” and “stringify” methods a bad practice to clone objects in JavaScript (2023 update) ??
// https://medium.com/@pmzubar/why-json-parse-json-stringify-is-a-bad-practice-to-clone-an-object-in-javascript-b28ac5e36521

// 2. Use loadash cloneDeep method -> import { cloneDeep } from 'lodash';