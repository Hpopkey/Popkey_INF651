let randomInt = Math.floor(Math.random() * 10 + 1); // Variables for our guessing game
let guess = 0;


while (guess != randomInt){
guess = Number(prompt("Guess a number."));              // Our while loop for guessing the number
}

alert("Congrats, you guessed correctly!");          // Success message for the while loop

let password = prompt("Please enter a password.");  // Variables for our password matcher
let passGuess = "";

do {
passGuess = prompt("Please confirm your password."); // Do-while loop for our password matcher
} while (password !== passGuess);

alert("The passwords match.");    // success message for our password matcher

let num1 = Number(prompt("Please enter a number for the multiplication table."));

for (let counter = 1; counter <=10; counter +=1){
    console.log(counter + " x " + num1 + " = " + (counter*num1));    // For loop for our multiplication table
}

let grade = Number(prompt("Please enter your grade."));

if (grade < 0 || grade > 100){
    alert("Please enter a valid grade next time");            // If else statements for our grade finder
} else if (grade <= 100 && grade >=90){
    alert("You got an A!");
} else if (grade <=89 && grade >= 80){
    alert("You got a B!");
} else if (grade <=79 && grade >= 70){
    alert("You got a C!");
} else if (grade <=69 && grade >= 60){
    alert("You got a D!");
} else if (grade <60){
    alert( "You got an F!");
}

let day = Number(prompt("Please enter a number between 1 and 7"));

switch (day){                              // case-switch statements for our day finder
    case 1:
        console.log("The day is Sunday");
        break;
    case 2:
        console.log("The day is Monday");
        break;
    case 3:
        console.log("The day is Tuesday");
        break;
    case 4:
        console.log("The day is Wednesday");
        break;
    case 5:
        console.log("The day is Thursday");
        break;
    case 6:
        console.log("The day is Friday");
        break;
    case 7:
        console.log("The day is Saturday");
        break;
    default:
        console.log("Please enter a valid number");
}