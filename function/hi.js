/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/

// function tellFortune(jobtitle, geographiclocation, partnername, numberofchildren ){
//   console.log(`You will be a ${jobtitle} in ${ geographiclocation} , and married to ${partnername} with ${numberofchildren} kids.`)
// }

// tellFortune('software engineer', 'Jordan', 'Alice', 3);

// let jobtitle=prompt("please inter jobTitle");
// let geographiclocation=prompt("please inter geographic location");
// let partnername=prompt("please inter partner name");
// let numberofchildren=prompt("please inter number of children");



/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/

// function calculateDogAge(puppysage){
//   let DogAge = puppysage * 7;
//   console.log(`Your doggie is ${DogAge} years old in dog years!`);
// }
// let puppysage = prompt("please enter your current puppysage")
// calculateDogAge (puppysage);

/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/

// function calculateSupply(age,amountperday){
// const maxage= 100;
// const yearsLeft=  maxage -age;
// const totalAmount =  yearsLeft * 365 * amountPerDay;
// console.log(`You will need ${age} to last you until the ripe old age of ${amountperday}`);
// }

// let age = prompt("Please enter your current age:");
// let amountPerDay = prompt("Please enter how many cups of tea you drink per day:");
// calculateSupply(30, 3);






/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/

// function argument(name){
//   console.log("hello"  +  name);
// }

// let name = prompt("Please enter your name")
// argument(" Adam");


/*
5
what is the error:
function double(cat) {
  return 2 * x;
}

function double(7) {
  return 2 * 7;
}

function double('7') {
  return 2 * 'x';
}
*/

// function double(cat){
//   return 2 * cat ;
// }

// function double(number){
//   return 2 * number;
// }
// double(7)

// function double(number) {
//   return 2 * number;
// }

// double(8)

/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*/

// function double1(x) {
//   return 2 * x ;
// }

// function double2(x){
// return 2 * x;
// }

// function double3(x) {
//   return 2 * x;
// }



/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/


// function cube(number){
//   return number * number * number;
// }
// let number = prompt("Please enter your number");
// console.log(cube(4));


/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/

// function multiply(num1 , num2){
//   return num1 * num2 ;
// }

// console.log(multiply(5,4));
// console.log(multiply(3,4));

/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/

// function canIGetADrivingLicense(age){
//   if (age>=20){
//     return "yes you can";
//   }else{ return `please come back after ${age} years to get one`}
  
// }

// console.log(canIGetADrivingLicense(21))
// console.log(canIGetADrivingLicense(17))
// console.log(canIGetADrivingLicense(20))


/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/

// function sameLength(name1 ,name2){
// if(name1.length ===name2.length){
//   return true;
// }else{return false;}
// }

// console.log(sameLength("tree","clue"));
// console.log(sameLength("tree","car"));



/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
// function largerNubmer(num1 , num2){
// if(num1>num2){
//   return num1;
// }else{return num2;}
// }

// console.log(largerNubmer(5,6))
// console.log(largerNubmer(5,3))



/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/

// function smallerNubmer(num1 ,num2, num3){
// if (num1<num2 && num1<num3){
//   return num1;
// }else if(num2<num1 && num2<num3){
//   return num2;
// }else{return num3;}
// }
// console.log( smallerNubmer(8,6,7))
// console.log(smallerNubmer(5,99,34))
// console.log(smallerNubmer(5,99,3))




/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> tr

Ex: shorterString("air","tr","car","github","by")
=> tr

*/

// function shorterString(string){
//   var short=string[0];
//   for(let i=1;i<short.length;i++){
//     if (string[i].length < short.length){
//       short=string[i];
//     }
//   }
//   return short;
// }
// console.log(shorterString(["air","school","car","by","github"]))
// console.log(shorterString(["air","tr","car","by","github"]))
// console.log(shorterString(["by","tr","car","air","github"]))
// console.log(shorterString(["air","by","car","school","github"]))
// console.log(shorterString(["air","tr","by","car","github"]))
// console.log(shorterString(["air","tr","car","github","by"]))


/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/

// function longerString(string) {
//   var long = string[0];
//   for (let i = 1; i < string.length; i++) {  
//     if (string[i].length > long.length) { 
//       long = string[i];  
//     }
//   }
//   return long;  
// }

// console.log(longerString(["air", "school", "car", "github"])) 
// console.log(longerString(["air", "schoo", "car", "github"])) 

/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/

// function isEven(num1){
// return num1 % 2 == 0;
// }
// console.log(isEven(1))
// console.log(isEven(2))





/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
// function isOdd(num1){
// return num1 % 2 !== 0;
// }

// console.log(isOdd(4))
// console.log(isOdd(5))



/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
// function positive(number){
//   if(number < 0){
//     return -number;
//   }
//   else{
//     return number;
//   }
// }




/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/

// function fullName( firstName , lastName){
//   return firstName + " " + lastName ;
// }
// console.log(fullName( "Raghad" , "minwer"))


/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/

// function avarage( nu1 , nu2 , nu3 , nu4 , nu5){
//   let sum =  nu1 + nu2 + nu3 + nu4 + nu5;
//   let avar = sum / 5 ;
//   return avar
//   }
//   console.log(avarage( 5,7,9,3,5))


  /*





/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/

// function randomNumber(){
//   return Math.random();
//   }
//   console.log(randomNumber())


/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/

// function randomBetweenNumbers(min , max){

//   return  Math.random() * (max - min) + min ;
// }
// console.log(randomBetweenNumbers(0, 10))


/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/

// function scoreInUniversty(num){
//   if(num>=95 && num<=100){
//   return "A";
//   }
//   else if(num>=85 && num<=94){
//   return "B";
//   }
//   else if(num>=70 && num<=84){
//   return "C";
//   }
//   else if(num>=50 && num<=69){
//   return "D";
//   }
//   else if(num>=0 && num<=49){
//   return "F";
//   }
//   else{
//     return "you are haker";
//   }
//   }
//   console.log(scoreInUniversty(96))


/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/

// function counter(){
//   return raghad++;
//   }
//   console.log(counter())
//   console.log(counter())
//   console.log(counter())


/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/
// function resetCounter1(){
//   const numm = war;
//   war =0 ;
//   return ${numm} - that the counter reset
// }
// return {incounter,resetCounter1};

// }
// const mycounter = resetCounter();

// console.log(mycounter.incounter());
// console.log(mycounter.incounter());
// console.log(mycounter.incounter());
// console.log(mycounter.resetCounter1());
// console.log(mycounter.incounter());
// console.log(mycounter.incounter());
// console.log(mycounter.incounter())