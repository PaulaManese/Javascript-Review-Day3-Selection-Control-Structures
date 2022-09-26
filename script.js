
//If-Else Statement


// Assign a variable that lets the user input a height in centimeter. Ensure that the word centimeter is indicated for proper reference.
// Create an If-Else Statement using the following conditions:

// If the height is below 150cm, display "Did not pass the minimum height requirement“.
// If the height is above 150, display "Pass the minimum height requirement“.

// Put the conditional statement inside the function.
// Ensure that the proper NAMING STANDARD is followed.

let userHeight = prompt("Enter height in centimeter");

function requirementCheck(height) {
    if (height < 150) {
        console.log("Did not pass the minimum height requirement");
    } else {
        console.log("Pass the minimum height requirement");
    }
}

requirementCheck(userHeight);

// Determine the typhoon intensity with the following data:

// 	Windspeed of 30, not a typhoon
// 	61 tropical depression is detected
// 	61-88 tropical storm is detected
// 	89-117 severe tropical is detected
// 	others, typhoon detected

// Put the conditional statement inside the function.
// Ensure that the proper NAMING STANDARD is followed.

let windspeed = prompt("Enter windspeed: ");

function determineWeather(ws) {
    if (ws == 30) {
        console.log("Not a typhoon");
    } else if (ws < 61) {
        console.log("Tropical depression is detected");
    } else if (ws <= 88) {
        console.log("Tropical storm is detected");
    } else if (ws <= 117) {
        console.log("Severe tropical is detected");
    } else {
        console.log("Typhoon detected");
    }
}

determineWeather(windspeed);

console.log ("connected");
// Selection Control Structures
// If Statement
// conditional branching statement
// condition is true, a group of statement is executed
// condition is false, the statement is skipped.

//Syntax:
//if (condition)
//{
// statement1
// statement2
//}

if (20 <= 30 ) {
    //T
    console.log ("not allowed to enter");
}

// let age = prompt ("Enter your age");

// function getAge (age){
//     if (age<=30){
//         console.log ("You are not allowed");
//     }
//     return age;
// }
// getAge(age);

//If-Else Statement
// 2 way decision statement
// used to make decisions and executes commands conditionally

/**
 * Syntax:
 * if (condition){
 * //statement1
 *
 * }else {
 * //statement 2
 * }
 * 
 */

// let myAge = 30;
// if (myAge === 30) {
//     alert ("Hello from the code block");
// } else {
//     console.log ("Hi, Else from the code block");
// }

/**
 * Assign a variable that lets the user input a height in centimeter. Ensure that the word centimeter is indicated for proper reference.
Create an If-Else Statement using the following conditions:

If the height is below 150cm, display "Did not pass the minimum height requirement“.
If the height is above 150, display "Pass the minimum height requirement“.

Put the conditional statement inside the function.
Ensure that the proper NAMING STANDARD is followed.

 */

// let height = prompt ("Enter your height in cm");

// function humanHeight (height) {
//     if (height >= 150 ) {
//         console.log ("Pass the minimum height requirement.");
//     }else {
//         console.log ("Did not pass the minimum height requirement.");
//     }
// }

// humanHeight(height);

/**
 * Else-if statement
 * 2 or more possible outcomes
 */
// let price = prompt("Enter the price: ");
// if (price < 50) {
//     console.log("affordable");
// }else if (price <= 75) {
//     console.log ("pricey");
// }else if (price <= 90) {
//     console.log ("benta ko muna yung isang atay ko, para ma afford");
// }else {
//     console.log ("Out of budget. Puritang tunay");
// }

/**
 
Determine the typhoon intensity with the following data:

	Windspeed of 30, not a typhoon
	61 tropical depression is detected
	61-88 tropical storm is detected
	89-117 severe tropical is detected
	others, typhoon detected

Put the conditional statement inside the function.
Ensure that the proper NAMING STANDARD is followed.

 */

// let intensity = prompt ("Enter typhoon intensity");

// function tIntensity(intensity){
//     if (intensity <= 30) {
//         console.log ("not a typhoon");
//     }else if (intensity <= 61) {
//         console.log ("tropical depression is detected");
//     }else if ((intensity >= 61) && (intensity <= 88)){
//         console.log("tropical storm is detected");
//     }else if((intensity >= 89) && (intensity <= 117)){
//         console.log ("severe tropical is detected");
//     }else {
//         console.log ("typhoon detected");
//     }
// }

// tIntensity(intensity);

//Switch Statement
//use to perform different actions on different conditions
//compare the same expression to several different values

//RULE OF THUMB:
//YOU CAN USE THIS STATEMENT WHEN YOU ARE COMPARING A LIST OF VALUES AGAINST A SINGLE VARIABLE

/**
 switch (expression)
 {
    case condition 1:
        //statement
        break;
    case condition 2:
        //statement
        break; - breaks out the switch block
        - stops the execution inside the switch block.

    .
    .
    .
    default:
        //statement
    - specifies the code to run if there is no match
 }
 */

let day = prompt ("Enter a number between 1 to 7");

switch (day){
    case (day = "1"):
        console.log("Monday");
        break;
    
    case (day = "2"):
        console.log ("Tuesday");
        break;
    
    case (day = "3"):
        console.log ("Wednesday");
        break;
    
    case (day = "4"):
        console.log ("Thursday");
        break;

    case (day = "5"):
        console.log ("Friday");
        break;

    case (day = "6"):
        console.log ("Saturday");
        break;
    
    case (day = "7"):
        console.log ("Sunday");
        break;

    default:
        console.log ("Invalid weekday");
}

// //Arrays and Objects

// let name = "Jelly Lumactud"; 
// console.log (name.length);//14

// let numbers = [1, 54, 58, 60, 75, 90, 99];
// console.log (numbers.length);

// let grades = [
//     {first: 90},
//     {second: 92},
//     {third: 94},
//     {fourth: 96}
// ];

// console.log (grades.length);

// if (numbers.length == 7 && grades.length >= 4) {
//     console.log("from our codeblock");
// }
// else {
//     console.log ("from others");
// }

//BONUS
//Ternary Operator
//? - if
//: else
/**
 Syntax:
 condition ? <statement>: statement
 */

 let legalAge = 25; 
 
 (legalAge >= 18) ? 
 console.log ("legal") 
 : 
 console.log ("minor");
