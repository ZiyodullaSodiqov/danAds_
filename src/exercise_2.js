/**
 * Counts the number of matchsticks used for the houses.
 * @param {Number} step
 * @returns {Number}
 * @example
 * countMatchsticksInHouses(1) => 6
 * countMatchsticksInHouses(2) => 11
 * countMatchsticksInHouses(4) => 21
 * countMatchsticksInHouses(0) => 0
 * See image here: https://edabit-challenges.s3.amazonaws.com/matchstick_houses.png
 * */
const readline = require('readline');


const readLine1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function countMatchsticksInHouses(step) {
  if (step === 0) return 0;
  return 5 * step + 1;
}


readLine1.question('Enter the number of houses =  ', (input) => {
  const step = parseInt(input);

  
  if (isNaN(step) || step < 0) {
    console.log('Please enter a valid non-negative number.');
  } else {
  
    const result = countMatchsticksInHouses(step);
    console.log(`The number of matchsticks for ${step} houses is: ${result}`);
  }

  
  readLine1.close();
});


 /* The time has a format: hours:minutes. Both hours and minutes have two digits, like 09:00. */
 /* Make a regexp to find time in the string: Breakfast at 09:00 in the room 123:456. */
 /* In this task there’s no need to check time correctness yet, so 25:99 can also be a valid result. */
 /* The regexp should not match 123:456. */
const TIME_REGEX = /[]//* Write your regex here */

/**
 * @param {String} text
 * @returns {String}
 * @example
 * A word is on the loose and now has tried to hide amongst a crowd of tall letters!
 * Help write a function to detect what the word is, knowing the following rules:
 * The wanted word is in lowercase.
 * The crowd of letters is all in uppercase.
 * Note that the word will be spread out amongst the random letters, but their letters remain in the same order.
 * findSecretWord("UcUNFYGaFYFYGtNUH") ➞ "cat"
 * findSecretWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"
 * findSecretWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement"
 * */
const readline = require('readline');

// Create an interface to read from the command line
const readLine2 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to find the secret word
function findSecretWord(text) {
  
  let secretWord = "";
 
  for (let char of text) {
    
    if (char === char.toLowerCase()) {
      secretWord += char;
    }
  }

  return secretWord;
}


readLine2.question('Enter the text =  ', (inputText) => {
 
  const result = findSecretWord(inputText);

 
  console.log(`The secret word is =  ${result}`);

 
  readLine2.close();
});

/**
 * Create a method in the Person class which returns how another person's age compares.
 * Given the instances p1, p2 and p3, which will be initialised with the attributes name and age,
 * return a sentence in the following format:
 * {other person name} is {older than / younger than / the same age as} me.
 * */
const readline = require('readline');

const readLine3 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


class Person {
  /**
   * @param {String} name
   * @param {Number} age
   */
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  
  compareAge(otherPerson) {
    if (this.age < otherPerson.age) {
      return `${otherPerson.name} is older than me.`;
    } else if (this.age > otherPerson.age) {
      return `${otherPerson.name} is younger than me.`;
    } else {
      return `${otherPerson.name} is the same age as me.`;
    }
  }
}


function getPersonDetails(prompt, callback) {
  readLine3.question(prompt, (name) => {
    readLine3.question('Enter age: ', (age) => {
      callback(name, parseInt(age));
    });
  });
}


getPersonDetails('Enter the name of person 1: ', (name1, age1) => {
  const person1 = new Person(name1, age1);

  
  getPersonDetails('Enter the name of person 2: ', (name2, age2) => {
    const person2 = new Person(name2, age2);


    console.log(person1.compareAge(person2));
    console.log(person2.compareAge(person1));


    readLine3.close();
  });
});


const readline = require('readline');


const readLine4 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Person {
  /**
   * @param {String} name
   * @param {Number} age
   */
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  /**
  
   * @param {Object} other
   * @param {String} other.name 
   * @param {Number} other.age
   * @returns {String} 
   */
  compareAge(other) {
    if (this.age < other.age) {
      return `${other.name} is older than me.`;
    } else if (this.age > other.age) {
      return `${other.name} is younger than me.`;
    } else {
      return `${other.name} is the same age as me.`;
    }
  }
}


function getPersonDetails(prompt, callback) {
  readLine4.question(prompt, (name) => {
    readLine4.question('Enter age: ', (age) => {
      callback(name, parseInt(age)); 
    });
  });
}


getPersonDetails('Enter the name of person 1 = ', (name1, age1) => {
  const person1 = new Person(name1, age1);

  
  getPersonDetails('Enter the name of person 2 =', (name2, age2) => {
    const person2 = new Person(name2, age2);

    
    console.log(person1.compareAge(person2));

    
    console.log(person2.compareAge(person1));

    
    rl.close();
  });
});


/**
 * Write a function redundant that takes in a string `str` and returns a function that returns `str`.
 * @param {String} str
 * @returns {Function}
 * @example
 * const f1 = redundant("apple")
 * f1() ➞ "apple"
 *
 * const f2 = redundant("pear")
 * f2() ➞ "pear"
 *
 * const f3 = redundant("")
 * f3() ➞ ""
 * */
const readline = require('readline');


const readLine5 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function redundant(str) {
  return function() {
    return str;
  };
}


readLine5.question('Enter a string: ', (inputString) => {
  const f = redundant(inputString);  
  console.log(f());  

  
  readLine5.close();
});

module.exports = {
  countMatchsticksInHouses,
  TIME_REGEX,
  findSecretWord,
  Person,
  redundant
}