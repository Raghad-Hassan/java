// 1- Write a program that prints numbers from 1 to 10 using a for loop.
for(let r = 1; r > 10 ;r++){
    console.log()
}
// 2-Write a program that prints the even numbers from 1 to 10 using a for loop.
for(let i = 1 ; i <= 10; i++ ){
   if(i % 2 === 0);{
    console.log(i)
}
   }
  

// 3- Write a program that prints the odd numbers from 1 to 10 using a while loop.

 let num = 12 ;
while( num <=10){
    if( num % 2 !== 0){
        console.log(num);
    }
     num++;  
    }

// 4- Write a program that prints the multiplication table of a number entered by the user using a for loop.

let number = parseInt(prompt("Enter a number to print its multiplication table: "));
for (let i = 1; i <= 10; i++) {
    let result = number * i;
    console.log(`${number} * ${i} = ${result}`);
}

// 5- Write a program that calculates the sum of numbers from 1 to 100 using a while loop.

let t = 1;
let sum = 0;

while(t <= 100){
    sum += t;
    t++;
}

console.log("The sum of numbers from 1 to 100 is:", sum);


// 6- Write a program that calculates the factorial of a number entered by the user using a for loop.

let number3 = parseInt(prompt("Enter a number to calculate its factorial: "));
// إذا كان العدد سالبًا، نعرض رسالة خطأ
if (number3 < 0) {
    console.log("Factorial is not defined for negative numbers.");
} else {
    // المتغير الذي سيحفظ نتيجة الفاكتوريال
    let factorial = 1;

    // استخدام حلقة for لحساب الفاكتوريال
    for (let i = 1; i <= number3; i++) {
        factorial *= i;  // ضرب القيمة الحالية لـ factorial بالعدد i
    }

    // طباعة النتيجة
    console.log(`The factorial of ${number3} is: ${factorial}`);
}




// 7- Write a program that prints the Fibonacci series up to a certain number entered by the user using a while loop.
let limit = parseInt(prompt("Enter the limit number for Fibonacci series: "));
let num1 = 0; 
let num2 = 1;
console.log(num1);
while (num2 <= limit) {
    console.log(num2);
    let nextNum = num1 + num2;
    num1 = num2;
    num2 = nextNum;
}

// 8- Write a program that prints the reverse of the following numbers:
//5 , 10 , 15 , 20
// using a while loop.

 let num3 = 20;
while(num3 >= 5){
    console.log(num);
      num3 -=5;
}