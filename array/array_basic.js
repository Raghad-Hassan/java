// 1-Write a function to find the largest element in an array.

// function largers (array){
//     var larger = array [0];
//     for(let i = 1; i < array.length; i++){
//         if(larger.length < array[i].length){
//           larger=array[i];
//         }
//     }
//     return larger;
// }
// console.log(largers (["air","schoo","car","by","github"]))

// 2-Write a function to find the smallest element in an array.

// function smallest (array){
//     var small = array [0];
//     for(let i = 1; i < array.length; i++){
//         if(small.length > array[i].length){
//           small=array[i];
//         }
//     }
//     return small;
// }
// console.log(smallest(["air","schoo","car","by","github"]))


// 3-Write a function to find the sum of all elements in an array.

// function summation(array){
// var sum =0 ;
// for(let i = 0 ; i < array.length ; i++){
//     sum = sum + array[i];
// }
// return sum;
// }
// console.log(summation([1 ,2 , 3, 4, 5, 6, 7, 8, 9, 10]))

// 4-Write a function to find the average of all elements in an array.

// function average (array){
//     var sum =0 ;
//     for(let i = 0 ; i < array.length ; i++){
//         sum = sum + array[i];
//     }
//     var avg = sum / array.length;
//     return avg;
//     }
//     console.log(average([1 ,2 , 3, 4, 5, 6, 7, 8, 9, 10]))


// 5-Write a function to find the median of all elements in an array.


// function medianArray(arr) {
//     arr.sort((a, b) => a - b);
//     const mid = Math.floor(arr.length / 2);

//     if (arr.length % 2 != 0) {
//       return arr[mid]; 
//     } else {
//       return (arr[mid - 1] + arr[mid]) / 2; 
//     }
//   }




// 6-Write a function to remove all duplicates from an array.

// function removeDuplicates(arr) {
//     return [...new Set(arr)]; 
//   }



// 7-Write a function to sort an array in ascending order.

// function sorting(array){
//     var sort1 = array.sort((a,b) => a-b);
//     return sort1;
// }
// console.log(sorting([200,100,50,60]))


// 8-Write a function to sort an array in descending order.

// function descending(array){
//     var sort2 = array.sort((a,b) => b-a);
//     return sort2;
// }

// console.log(descending([30,50,70,100]))


// 9-Write a function to shuffle the elements of an array randomly.

// function shuffleArray(arr) {
//     for (let i = arr.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//     return arr;
//   }
