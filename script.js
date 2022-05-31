// 1. Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// function boolToWord(bool) {
//make conditional to return strings
//     if (bool === true) {
//         return 'Yes';
//     } else {
//         return 'No';
//     }
// }

// function boolToWord(bool) {
//     if (bool) {
//         return 'Yes';
//     } else {
//         return 'No';
//     }
// }

// function boolToWord(bool) {
//     return bool ? 'Yes' : 'No';
// }

// console.log(boolToWord(true));
// console.log(boolToWord(false));

// 2. In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative? The number can be negative already, in which case no change is required. Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

// function makeNegative(num) {
//conditional returning a number or a negative number
//     if (num < 0) {
//         return num;
//     } else {
//         return -num;
//     }
// }

// function makeNegative(num) {
//     return num < 0 ? num : -num;
// }

// console.log(makeNegative(42)); //42
// console.log(makeNegative(-42)); //-42

// 3. Very simple, given a number, find its opposite.

// function opposite(number) {
//     if (number === number) {
//         return -number;
//     } else {
//         return number;
//     }
// }

// function opposite(number) {
//     return -number;
// }

// const opposite = (number) => -number;

// console.log(opposite(1));
// console.log(opposite(14));
// console.log(opposite(-34));

// 4. Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
// If the input array is empty or null, return an empty array.

// function countPositivesSumNegatives(input) {
//empty array for results
//     const result = [];
//starting points for sums
//     let positiveSum = 0;
//     let negativeSum = 0;

//     if (input && input.length) {
//         for (let i = 0; i < input.length; i++) {
//             if (input[i] > 0) {
//                 positiveSum += 1;
//             } else {
//                 negativeSum += input[i];
//             }
//         }
//         result.push(positiveSum);
//         result.push(negativeSum);
//     }
//     return result;
// }

// function countPositivesSumNegatives(input) {
//     return input && input.length
//         ? [
//               input.filter((num) => num > 0).length,
//               input.filter((num) => num < 0).reduce((acc, cur) => acc + cur, 0),
//           ]
//         : [];
// }

// function countPositivesSumNegatives(input) {
//     return input && input.length
//         ? input.reduce(
//               ([pSum, nSum], curr) => [
//                   (pSum += curr >= 1 && 1),
//                   nSum + Math.min(0, curr),
//               ],
//               [0, 0]
//           )
//         : [];
// }

// function countPositivesSumNegatives(input) {
//     if (input && input.length) {
//         let positiveSum = 0;
//         let negativeSum = 0;
//         input.forEach((num) =>
//             num > 0 ? positiveSum++ : (negativeSum += num)
//         );
//         return [positiveSum, negativeSum];
//     } else {
//         return [];
//     }
// }

// console.log(
//     countPositivesSumNegatives([
//         1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
//     ])
// ); // [10, -65]

// 5. Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

// function booleanToString(b) {
//     if (b === true) {
//         return 'true';
//     } else {
//         return 'false';
//     }
// }

// function booleanToString(b) {
//     return b.toString();
// }

// function booleanToString(b) {
//     return b ? 'true' : 'false';
// }

// function booleanToString(b) {
//     if (b) {
//         return 'true';
//     }
//     return 'false';
// }

// console.log(booleanToString(true));
// console.log(booleanToString(false));

// Sort Array by string length

// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

//  function sortByLength(array) {
//   return array.sort(function(a, b) {
//     return a.length - b.length
//   })
// };
// console.log(sortByLength(['Telescopes', 'Glasses', 'Eyes', 'Monocles']))

// Remove anchor from Url

// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// function removeUrlAnchor(url) {
//     return url.split('#')[0];
// }
// console.log(removeUrlAnchor('www.codewars.com#about'));

// No Oddities here

// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

// function noOdds(values) {
//     return values.filter((number) => number % 2 == 0);
// }
// console.log(noOdds([0, 1, 2, 3]), [0, 2]);

// Disemvowel Trolls

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

// function disemvowel(str) {
//     return str.replace(/[aeiou]/gi, '');
// }

// console.log('This website is for losers LOL!');

// Simple Fun #176: Reverse Letter

// Given a string str, reverse it omitting all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

// function reverseLetter(str) {
//     return str
//         .split('')
//         .reverse()
//         .join()
//         .replace(/[^a-z]/gi, '');
// }
// console.log(reverseLetter('ultr53o?n'));

// Sort Numbers

// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

// function solution(nums) {
//     if (nums === null) {
//         return [];
//     } else
//         return nums.sort(function (a, b) {
//             return a - b;
//         });
// }

// console.log(solution([1, 2, 10, 50, 5]));
// console.log(solution(null));
// console.log(solution([]));

// Ordered count of characters

// Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

// var orderedCount = function (text) {
//     // Implement me!
//     return [];
// };

// console.log(orderedCount('abracadabra')); // [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

// Century from Year

// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

// function century(year) {
//     if (year <= 100) {
//         return 1;
//     } else if (year % 100 == 0) {
//         return parseInt(year / 100);
//     } else return parseInt(year / 100 + 1);
// }

// console.log(century(1705));

// Find Multiples of a Number

// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

// If you can, try writing it in only one line of code.

// function findMultiples(integer, limit) {
//     //make an empty array to push results to
//     let multiples = [];
//loop through the limit's index
//     for (let i = 1; i <= limit; i++) {
//create a conditional to catch numbers between the starting point and the limit number that are multiples of the index
//         if (integer * i <= limit) {
//push the result of the conditional into the empty array
//             multiples.push(integer * i);
//         }
//     }
//     return multiples;
// }
//console.log(findMultiples(2, 6)) // [2, 4, 6]

// Removing Elements

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

// function removeEveryOther(arr) {
//     let res = [];
//     for (let i in arr) {
//         if (i % 2 == 0) {
//             res.push(arr[i]);
//         }
//     }
//     return res;
// }

// console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']));

// Even or Odd

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// function even_or_odd(number) {
//     if (number % 2 === 0) {
//         return 'Even';
//     } else return 'Odd';
// }

// console.log(number(8))
// console.log(number(5));

// Reverse String

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// function solution(str) {
//     return [...str].reverse().join('');
// }
// console.log(solution("world"))

// Sum of positives

// let arr = [1,-4,7,12]

// function positiveSum(arr) {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] > 0) {
//             sum += arr[i]
//         }
//     }
//     return sum
// }
// console.log(positiveSum(arr))

// String Repeat

// Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

// function repeatStr(n, s) {
//     return s.repeat(n);
// }

// function repeatStr(n, s) {
//     var str = '';
//     for (var i = 0; i < n; i++) str += s;
//     return str;
// }

// console.log(repeatStr(6, 'I'));
// console.log(repeatStr(5, 'Hello'));

// Remove First and Last Character

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// function removeChar(str) {
//     str = str.slice(1);
//     str = str.slice(0, str.length - 1);
//     return str;
// }

// function removeChar(str) {
//     return str.slice(1, -1);
// }

// console.log(removeChar('eloquent'));

// Remove String Spaces

// Simple, remove the spaces from the string, then return the resultant string.

// function noSpace(x) {
//     var result = '';
//     for (var index = 0; index < x.length; index++) {
//         if (x[index] !== ' ') {
//             result += x[index];
//         }
//     }
//     return result;
// }

// function noSpace(x) {
//     return x.split(' ').join('');
// }

// function noSpace(x) {
//     return x.replace(/\s/g, '');
// }
//  console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));

// Basic Mathematical Operations

// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

// function basicOp(operation, value1, value2) {
//     if (operation === '+') {
//         return value1 + value2;
//     }
//     if (operation === '-') {
//         return value1 - value2;
//     }
//     if (operation === '*') {
//         return value1 * value2;
//     } else operation === '/';
//     return value1 / value2;
// }
// console.log(basicOp('+', 6, 2));

// Returning Strings

// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]

// function greet(name) {
//     return `Hello, ${name} how are you doing today?`;
// }

// console.log(greet("George"));

// Beginner - Lost Without a Map

// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

// function maps(x) {
//     let doubled = [];
//     for (let i = 0; i < x.length; i++) {
//         doubled.push(x[i] * 2);
//     }
//     return doubled;
// }
// console.log(maps[(1, 2, 3)]);

// Is n divisible by x and y?

// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

// Examples:
// 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
// 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
// 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5

// function isDivisible(n, x, y) {
//     if (n % x === 0 && n % y === 0) {
//         return true;
//     } else return false;
// }

// console.log(isDivisible(2, 4, 8));

// Abbreviate a Two Word Name

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// function abbrevName(name) {
//     //capitalize all letters
//     let capitalized = name.toUpperCase();
//     //separate name and surname in array
//     let splitName = capitalized.split(' ');
//     //target first letter of name
//     let pickName = splitName[0][0];
//     //target first latter of surname
//     let pickSurname = splitName[1][0];
//     //join them and add a period
//     return pickName + '.' + pickSurname;
// }

// console.log(abbrevName('Sam Harris'));
// console.log(abbrevName('patrick feeney'));

// Jenny's secret message

// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

// Can you help her?

// function greet(name) {
//     return 'Hello, ' + name + '!';
//     if (name === 'Johnny') {
//         return 'Hello, my love!';
// }
// console.log(greet("Jim"));
// console.log(greet("Jane"));
// console.log(greet("Simon"));
// console.log(greet("Johnny"));

// Solution:
// function greet(name) {
//     if (name === 'Johnny') {
//         return 'Hello, my love!';
//     } else return 'Hello, ' + name + '!';
// }
// console.log(greet("Jim"));
// console.log(greet("Jane"));
// console.log(greet("Simon"));
// console.log(greet("Johnny"));

// Reversed Words

// Complete the solution so that it reverses all of the words within the string passed in.

// Example:

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

// function reverseWords(str) {
//     let strSplit = str.split(' ');
//     let strReversed = strSplit.reverse();
//     return strReversed.join(' ');
// }

// console.log(
//     reverseWords('The greatest victory is that which requires no battle')
// ); //"battle no requires which that is victory greatest The"

// Calculate BMI

// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// function bmi(weight, height) {
//     let result = weight / (height * height);
//     if (result <= 18.5) {
//         return 'Underweight';
//     }
//     if (result <= 25.0) {
//         return 'Normal';
//     }
//     if (result <= 30.0) {
//         return 'Overweight';
//     }
//     if (result > 30) {
//         return 'Obese';
//     }
// }
// console.log(bmi(80, 1.8));

// Fake Binary

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// function fakeBin(x) {
//     let replaceFiveMinus = x.replace(/[1-4]/g, '0');
//     let replaceFivePlus = replaceFiveMinus.replace(/[5-9]/g, '1');
//     return replaceFivePlus.toString();
// }

// console.log(fakeBin('45385593107843568')); //'01011110001100111'

// Get the mean of an array

// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// function getAverage(marks) {
//     let total = 0;
//     for (let i = 0; i < marks.length; i++) {
//         total = total + marks[i];
//     }
//     return Math.floor(total / marks.length);
// }

// console.log(getAverage([2, 2, 2, 2]));
// console.log(getAverage([1, 2, 3, 4, 5]));
// console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]));

// Is he gonna survive?

// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)

// function hero(bullets, dragons){
//set logic for how many bullets are enough to kill a dragon
//   let deadDragon = dragons * 2;
//test it
//   console.log(deadDragon);
//create logic
// if(bullets >= deadDragon) {
//return desired result
//   return true
// } else return false
// }

//     console.log(hero(10, 5)); //true
//     console.log(hero(7, 4)); //false should be 8
//     console.log(hero(4, 5)); //false); should be 10
//     console.log(hero(100, 40)); //true
//     console.log(hero(1500, 751));//false should be 1502
//     console.log(hero(0, 1));//false should be 2

// Convert a string to an array

// Write a function to split a string and convert it into an array of words.

// Examples (Input -> Output):
// * "Robin Singh" ==> ["Robin", "Singh"]

// * "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

// function stringToArray(string) {
//     return string.split(' ');
// }

// console.log(stringToArray('Robin Singh'));
// console.log(stringToArray('I love arrays they are my favorite'));

// Sentence Smash

// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

// function smash(words) {
//    return words.join(' ')
// };
// console.log(smash(['hello', 'world', 'this', 'is', 'great']));

// Array plus array

// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// Simple multiplication

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// function simpleMultiplication(number) {
//     if(number % 2 == 0) {
//       return number * 8;
//     } else return number * 9;
//     }

// console.log(simpleMultiplication(2))//16,'Should return double given argument..')
// console.log(simpleMultiplication(1))//9,'Should return double given argument..')
// console.log(simpleMultiplication(8))//64,'Should return given argument times eight...')
// console.log(simpleMultiplication(4))//32,'Should return given argument times eight...')
// console.log(simpleMultiplication(5))//45,'Should return given argument times nine...')

// Find Maximum and Minimum Values of a List

// Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.

// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5

// You only need one - Beginner

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

// function check(a, x) {
//   return a.includes(x);
// }

// console.log(check([66, 101], 66));//true
// console.log(check([101, 45, 75, 105, 99, 107], 107));//true
// console.log(check(['t', 'e', 's', 't'], 'e'));//true
// console.log(check(['what', 'a', 'great', 'kata'], 'kat'));//false

// Transportation on vacation

// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

// function rentalCarCost(d) {
//     if (d < 3) {
//         return d * 40;
//     }
//     if (d >= 3 && d < 7) {
//         return d * 40 - 20;
//     }
//     if (d >= 7) {
//         return d * 40 - 50;
//     }
// }
// console.log(rentalCarCost(1));
// console.log(rentalCarCost(2));
// console.log(rentalCarCost(3));
// console.log(rentalCarCost(4));
// console.log(rentalCarCost(5));
// console.log(rentalCarCost(6));
// console.log(rentalCarCost(7));
// console.log(rentalCarCost(8));
// console.log(rentalCarCost(9));
// console.log(rentalCarCost(10));

// Are You Playing Banjo?

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo"
// name + " does not play banjo"
// Names given are always valid strings.

// function areYouPlayingBanjo(name) {
//     if (name[0] === 'R' || name[0] === 'r') {
//         return name + ' plays banjo';
//     } else return name + ' does not play banjo';
// }
// console.log(areYouPlayingBanjo('Adam'));
// console.log(areYouPlayingBanjo('Rick'));
// console.log(areYouPlayingBanjo('robert'));

// Beginner Series #1 School Paperwork

// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0
// Waiting for translations and Feedback! Thanks!

// function paperwork(n, m) {
//     if (n >= 0 && m >= 0) {
//         return n * m;
//     }
//     if (n > 0 || m < 0) {
//         return 0;
//     }
//     if (n < 0 || m > 0) {
//         return 0;
//     } else if (n < 0 || m < 0) {
//         return 0;
//     }
// }
// console.log(paperwork(5, 5)); // 25
// console.log(paperwork(5, -5)); // 0
// console.log(paperwork(62, 3)); // 186

// Will you make it?

// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   if(fuelLeft * mpg >= distanceToPump) {
//     return true;
//   } else return false;
// };
// console.log(zeroFuel(50, 25, 2));// true
// console.log(zeroFuel(100, 50, 1));// false

// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:

// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!

// const rps = (p1, p2) => {
//     if (p1 === 'rock' && p2 === 'scissors') {
//         return 'Player 1 won!';
//     }
//     if (p1 === 'scissors' && p2 === 'paper') {
//         return 'Player 1 won!';
//     }
//     if (p1 === 'paper' && p2 === 'rock') {
//         return 'Player 1 won!';
//     }
//     if (p1 === 'scissors' && p2 === 'rock') {
//         return 'Player 2 won!';
//     }
//     if (p1 === 'paper' && p2 === 'scissors') {
//         return 'Player 2 won!';
//     }
//     if (p1 === 'rock' && p2 === 'paper') {
//         return 'Player 2 won!';
//     }
//     if (p1 === 'rock' && p2 === 'rock') {
//         return 'Draw!';
//     }
//     if (p1 === 'scissors' && p2 === 'scissors') {
//         return 'Draw!';
//     }
//     if (p1 === 'paper' && p2 === 'paper') {
//         return 'Draw!';
//     }
// };

// console.log(rps('rock', 'scissors'));

// Do I get a bonus?

// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell and Lua) or "¥" (Rust).

// function bonusTime(salary, bonus) {
//     if (bonus === true) {
//         return '£' + salary * 10;
//     } else return '£' + salary;
// }

// console.log(bonusTime(10000, true));

// Count the Monkeys!

// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

// For example:

// monkeyCount(10) // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// monkeyCount(1) // --> [1]

// function monkeyCount(n) {
//     let result = [];
//     for (let i = 1; i <= n; i++) {
//         result.push(i);
//     }
//     return result;
// }
// console.log(monkeyCount(10));

// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true

// function setAlarm(employed, vacation) {
//     if (employed === true && vacation === true) {
//         return false;
//     }
//     if (employed === false && vacation === true) {
//         return false;
//     }
//     if (employed === false && vacation === false) {
//         return false;
//     }
//     if (employed === true && vacation === false) {
//         return true;
//     }
// }

// function setAlarm(employed, vacation) {
//     return employed && !vacation;
// }

// Get Planet Name By ID

// The function is not returning the correct values. Can you figure out why?

// Example (Input --> Output ):

// 3 --> "Earth"

// function getPlanetName(id) {
//     var name;
//     switch (id) {
//         case 1:
//             name = 'Mercury';
//         case 2:
//             name = 'Venus';
//         case 3:
//             name = 'Earth';
//         case 4:
//             name = 'Mars';
//         case 5:
//             name = 'Jupiter';
//         case 6:
//             name = 'Saturn';
//         case 7:
//             name = 'Uranus';
//         case 8:
//             name = 'Neptune';
//     }

//     return name;
// }
// console.log(getPlanetName(1));

//Solved:

// function getPlanetName(id) {
//     var name;
//     switch (id) {
//         case 1:
//             name = 'Mercury';
//             break;
//         case 2:
//             name = 'Venus';
//             break;
//         case 3:
//             name = 'Earth';
//             break;
//         case 4:
//             name = 'Mars';
//             break;
//         case 5:
//             name = 'Jupiter';
//             break;
//         case 6:
//             name = 'Saturn';
//             break;
//         case 7:
//             name = 'Uranus';
//             break;
//         case 8:
//             name = 'Neptune';
//             break;
//     }

//     return name;
// }

// console.log(getPlanetName(1));

// Remove exclamation marks

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// function removeExclamationMarks(s) {
//     return s.replace(/!+$/, '');
// }

// console.log(removeExclamationMarks('Hello World!'));

// function removeExclamationMarks(s) {
//     return s.split('!').join('');
// }
// console.log(removeExclamationMarks('Hello World!'));

// Switch it Up!

// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// If your language supports it, try using a switch statement.

// function switchItUp(number) {
//     switch (number) {
//         case 0:
//             return 'Zero';
//             break;
//         case 1:
//             return 'One';
//             break;
//         case 2:
//             return 'Two';
//             break;
//         case 3:
//             return 'Three';
//             break;
//         case 4:
//             return 'Four';
//             break;
//         case 5:
//             return 'Five';
//             break;
//         case 6:
//             return 'Six';
//             break;
//         case 7:
//             return 'Seven';
//             break;
//         case 8:
//             return 'Eight';
//             break;
//         case 9:
//             return 'Nine';
//             break;
//     }
// }

// Basic variable assignment

// This code should store "codewa.rs" as a variable called name but it's not working. Can you figure out why?

// var a == 'code';
// var b == 'wa.rs';
// var name == a + b;

// console.log(name);

//Solution:

// var a = 'code';
// var b = 'wa.rs';
// var name = a + b;

// console.log(name);

// Return to Sanity

// This function should return an object, but it's not doing what's intended. What's wrong?

// function mystery() {
//     var results = { sanity: 'Hello' };
//     return;
//     results;
// }

// Solution:

// function mystery() {
//     var results = { sanity: 'Hello' };
//     return results;
// }

// Basic Training: Add item to an Array

// Add the value "codewars" to the websites array.
// After your code executes the websites array should == ["codewars"]

// The websites array has already been defined for you using the following code:

// var websites = [];

// const addItem = websites.push('codewars');

// console.log(websites); // ["codewars"]
// console.log(addItem); // 1

// websites.push("codewars");

// Shifty Closures

// Functional closures can get overly attached. Set them straight!

// Why doesn't greet_abe() actually greet Abe?

// var name = 'Abe';
// var greet_abe = function () {
//     return 'Hello, ' + name + '!';
// };
// name = 'Ben';
// var greet_ben = function () {
//     return 'Hello, ' + name + '!';
// };

//Solution 1:

// var name1 = 'Abe';
// var greet_abe = function () {
//     return 'Hello, ' + name1 + '!';
// };
// var name2 = 'Ben';
// var greet_ben = function () {
//     return 'Hello, ' + name2 + '!';
// };

//Solution 2:

// var name;
// function greet_abe() {
//   name = 'Abe';
//   return "Hello, " + name + '!';
// };

// function greet_ben() {
//   name = 'Ben';
//   return "Hello, " + name + '!';
// };

//Solution 3:

// var greet_abe = greet('Abe');
// var greet_ben = greet('Ben');

// function greet(name) {
//     return function () {
//         return 'Hello, ' + name + '!';
//     };
// }
