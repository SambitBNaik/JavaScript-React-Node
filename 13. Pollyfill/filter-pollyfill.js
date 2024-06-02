let number=[1,2,3,4,5,6];


// filter
let result= number.filter(num=> num>3);
console.log(result);

// custom filter
Array.prototype.customFilter=function(callback){
    let newArray=[];
    for(let elem in this){
        if(callback(this[elem])){
            newArray.push(this[elem]);
        }
    }
    return newArray;
}

let result2=number.customFilter(
    function(num){
        return num>3;
    }
);

console.log(result2);