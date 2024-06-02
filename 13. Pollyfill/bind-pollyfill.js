// use let and ES5 function

let name={
    firstName:"Namrata",
    lastName:"Patel",
}

let printName= function(city, state, country){
    console.log(
        this.firstName+","+this.lastName+","+city+","+state+","+country
    );
}

// 1 Bind
let printMyName=printName.bind(name,"Bhilai","Chattisgarh");
printMyName("India");

//2. Bind pollyfill
Function.prototype.myBind=function(...args){
    let obj= this;
    let params=args.slice(1);
    return function(...args2){
        // this will be global here , as this function is called  in global execution  context
        // obj can be accessed  her because of clouser
        obj.apply(args[0],[...params, ...args2]);
    };
};

let printMyName2= printName.myBind(name, "Bhilai","Chattisgarh");
printMyName2("India");