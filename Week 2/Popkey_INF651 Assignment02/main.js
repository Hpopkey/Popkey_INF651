let _name = "David";
let age = 25;              // Declaring our variables for step one
let currentStudent = true;

console.log(typeof _name + " " + _name);
console.log(typeof age + " " + age);          // Logging our variables and their datatype for step one
console.log(typeof currentStudent + " " + currentStudent);

let x = 4;
let y = 12;   //Declaring variables for Step 2

console.log("Addition: " + (x+y));
console.log("Subtraction: " + (x-y));   // Performing arithmetic with our variables
console.log("Multiplication: " +(x*y));
console.log("Division: "  + (x/y));

let sentence1 = "The quick brown fox jumped over the lazy dog";  // Creating our sentence for step 3

console.log("Length: " + sentence1.length + " characters");
console.log("First Character: " + sentence1.charAt(0));    // Logging the length of our string, the first chracter, and the last chracter
console.log("Last character: " + sentence1.charAt(sentence1.length-1));

let negativeNumber = -243;  // Declaring our negative number for step 4

console.log("The square of the number is: " + Math.pow(negativeNumber, 2));
console.log("The square roof ot the number is: " + Math.sqrt(negativeNumber));  // Logging the square, square root, and absolute value of our negative number
console.log("The absolute value of the number is: " + Math.abs(negativeNumber));

let number1 = 14;  //Declaring our values for step 5
let number2 = 27;

console.log("Is 14 greater than 27?: " + (number1 > number2));   // Using boolean logic to determine if 14 is less than, greater than, or equal to 27
console.log("Is 14 less than 27?: " + (number1 < number2));
console.log("Is 14 equal to 27?: " + (number1 === number2));

let firstBool = true;
let secondBool = false; // Declaring our boolean values for step 6

console.log("And operator: " + (firstBool && secondBool));
console.log("OR operator: " + (firstBool || secondBool));  // Running logical operators on our boolean variables
console.log("NOT operator: " + (!firstBool));
console.log("Second NOT operator: " + (!secondBool));

let firstName = "Hunter";
let lastName = "Popkey";

console.log(`Hello ${firstName + " " + lastName } how are you?`);