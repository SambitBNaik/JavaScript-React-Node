// http://jsbin.com/?js,console

var person = {
    name: "Max",
    age: 23,
    hobbies: ["dancing", "singing"]	
  };
  console.log(person); // { name: "Max", age: 23, hobbies: ["dancing", "singing"]}
  
  var thirdPerson = {
    name: "Max",
    age: 23,
    hobbies: ["dancing", "singing"]	
  };

  var secondPerson=Object.assign({},person);
  console.log(secondPerson); //{ name: 'Max', age: 23, hobbies: [ 'dancing', 'singing' ] }

  person.name="Tylor";
  console.log(secondPerson);//{ name: 'Max', age: 23, hobbies: [ 'dancing', 'singing' ] }

  console.log(thirdPerson);//{ name: 'Max', age: 23, hobbies: [ 'dancing', 'singing' ] }