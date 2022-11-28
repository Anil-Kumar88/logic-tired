// !area of a circle

// let area = 0;
// let r = prompt("enter radius");
// area += 3.14 * r * r;
// document.write(area);

//! area of a triangle

// let area = 0;
// let base = prompt("enter the base ");
// let height = prompt("enter the height");
// area += 0.5 * base * height;
// document.write("area of triangle is", area);

// ! Armstrong number

// let num = prompt("enter a number");
// let sum = 0;
// for (i = 0; i < num.length; i++) {
//   sum += num[i] ** num.length;
// }
// console.log(sum);
// if (sum == num) {
//   console.log("it is a armstrong number");
// } else {
//   console.log("it is not a armstrong number");
// }

//! empty an array
// let arr = [1, 2, 3, 4];
// arr == null ? console.log(arr) : console.log("");

// ! array into object

// var arr = [1, 2, 3, 4];
// let obj = {};
// for (let i = 0; i < arr.length; i++) {
//   obj[i] = arr[i];
// }
// console.log(obj);

// ! ascending array

// let arr = [20, 10, 30, 5];
// for (let i = 1; i < arr.length; i++) {
//   for (j = 0; j < i; j++) {
//     if (arr[i] < arr[j]) {
//       x = arr[i];
//       arr[i] = arr[j];
//       arr[j] = x;
//     }
//   }
// }
// console.log(arr);

// !average of n numbers

// let start = parseInt(prompt("enter starting number"));
// let end = parseInt(prompt("enter end number"));
// let count = (end - start) + 1;
// let total = 0;
// let avg = 0;
// for (i = start; i <= end; i++) {
//   total += i;
//   avg = total / count;
// }

// console.log(avg);

//! calculator

// const n1 = prompt("enter n1");
// const n2 = prompt("enter n2");
// const operator = "*";
// switch (operator) {
//   case "+": {
//     console.log(n1 + n2);
//     break;
//   }
//   case "-": {
//     console.log(n1 - n2);
//     break;
//   }
//   case "*": {
//     parseInt(console.log(n1 * n2));
//     break;
//   }
//   case "/": {
//     console.log(n1 / n2);
//     break;
//   }
//   default: {
//     console.log("enter valid number");
//   }
// }

// !celsius to fahrenheit

// let tempInCelsius = prompt("enter temperature in celcius");
// let tempInFahrenheit = tempInCelsius * (9 / 5) + 32;
// console.log(tempInFahrenheit);

// ! fibonacci series

// var n1 = 0;
// var n2 = 1;
// var result = 0;
// var number = 10;
// result = n1 + n2;

// while (result <= number) {
//   n1 = n2;
//   n2 = result;
//   result = n1 + n2;
// }
// console.log(result);

// ! character count

// let str =prompt("enter the character")
// let count = 0;

// for (let i = 0; i < str.length; i++) {
//   count++;
// }

// console.log(count);

//! combine array.
// let array1 = ["h", "e", "l", "l", "o"];
// let array2 = ["w", "o", "r", "l", "d"];
// let array3 = array1.concat(array2);
// console.log(array3);

//! program to convert decimal to binary

// take input
// const number = parseInt(prompt("Enter a decimal number: "));

// // convert to binary
// const result = number.toString(2);

// console.log("Binary:" + " " + result);

//! descending array.
// let array = [10, 98, 54, 23, 78, 45];
// for (let i = 1; i < array.length; i++) {
//   for (let j = 0; j < i; j++) {
//     if (array[i] > array[j]) {
//       let temp = array[i];
//       array[i] = array[j];
//       array[j] = temp;
//     }
//   }
// }
// console.log(array);

//! 46. Find Average of given array

// var arr = [10, 20, 30];
// var sum = 0;
// var avg;
// for (var i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// avg = sum / arr.length;
// console.log(avg);

// //! 16. Program for Calculator

// const operator = prompt("Enter operator ( either +, -, * or / ): ");
// const number1 = parseFloat(prompt("Enter first number: "));
// const number2 = parseFloat(prompt("Enter second number: "));

// let result;
// if (operator == "+") {
//   result = number1 + number2;
// } else if (operator == "-") {
//   result = number1 - number2;
// } else if (operator == "*") {
//   result = number1 * number2;
// } else {
//   result = number1 / number2;
// }
// console.log(`${number1} ${operator} ${number2} = ${result}`);

// ! 35. program to find the ASCII value of a character

// const string = prompt("Enter a character: ");
// const result = string.charCodeAt(0);

// console.log(`The ASCII value is: ${result}`);

//! program to find the ASCII value of a character

// take input from the user
// const string = prompt('Enter a character: ');

// convert into ASCII value
// const result = string.codePointAt(0);

// console.log(`The ASCII value is: ${result}`);

// //! 13. Program to sort array in Ascending Order

// var array = [10, 98, 54, 23, 78, 45];
// for (let i = 1; i < array.length; i++) {
//   for (let j = 0; j < i; j++) {
//     if (array[i] < array[j]) {
//       let temp = array[i];
//       array[i] = array[j];
//       array[j] = temp;
//     }
//   }
// }
// console.log(array);

//! 1.Find Average of given array

// var arr = [40, 50, 60];
// var sum = 0;
// var avg;
// for (var i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// avg = sum / arr.length;
// console.log(avg);

// ! 3. program to find the ASCII value of a character

// const string = prompt("Enter a character: ");
// const result = string.charCodeAt(0);

// console.log(`The ASCII value is: ${result}`);

//! 4. Program to sort array in Ascending Order

// var array = [10, 98, 54, 23, 78, 45];
// for (let i = 1; i < array.length; i++) {
//   for (let j = 0; j < i; j++) {
//     if (array[i] < array[j]) {
//       let temp = array[i];
//       array[i] = array[j];
//       array[j] = temp;
//     }
//   }
// }
// console.log(array);
