var person = {
    name: "John",                //String
    lastname: "Doe",
    age: 35,                     //Number
    gender: "male",
    lucky_numbers: [ 7, 11, 13, 17], //Array
    significant_other: person2   //Object, yes the same variable/object defined after
};

var person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [ 2, 4, 6, 8],
    significant_other: person
};

var person3 = {
    
};

var family = {
    lastname: "Doe",
    members: [person, person2, person3]       //Array of objects
};



function addAllFamilyLuckyNumbers(anArray){
  var sumOfAllLuckyNumbers = 0; //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.

  //To-Do: loop and add; consider nested loops
  //Hint: use the anArray variable to get all of the lucky numbers
  
  for (let key in anArray){
    for (let i = 0; i <= anArray.length; i++)
    {
         sumOfAllLuckyNumbers += anArray[key].lucky_numbers[i];
    }
  }

  return sumOfAllLuckyNumbers;
}

//Enter all your code here:
person.lucky_numbers[3] = 33;
person3.name = "jimmy";
person3.lastname = "doe";
person3.age = 13;
person3.gender = "male";
person3.lucky_numbers = [1 , 2 , 3, 4];
person3.significant_other = null;



//Do not make changes below:
console.log(addAllFamilyLuckyNumbers(family.members)); 