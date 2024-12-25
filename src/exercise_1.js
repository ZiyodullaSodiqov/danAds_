/**
 * Write a function to check if a string is empty 
 * @param {String} text
 * @returns {Boolean}
 * @example
 * isStringEmpty('abc'); => false
 * isStringEmpty(''); => true
 * isStringEmpty('   '); => true
 * isStringEmpty(); => throws error "text must be defined"
 */
const readline = require('readline');

function isStringEmpty(text) {
  if (text === undefined || text === null) {
    throw new Error("text must be defined");
  }
  return text.trim().length === 0;
}

const readLine1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readLine1.question("Write text =  ", (userText) => {
  try {
    const result = isStringEmpty(userText);
    console.log(result ? "The text is empty." : "The text is not empty.");
  } catch (error) {
    console.error(error.message);
  } finally {
    readLine1.close();
  }
});


/**
 * Write a function to truncate text
 * @param {String} text 
 * @param {Number} numberOfCharacters
 * @returns {String} 
 * @example
 * truncateString('Hello World', 2); => 'He'
 * truncateString('Hello world'); => throws error "Please specify number of characters to extract"
 * truncateString(''); => throws error "text must have at least one character"
 */
const readline = require("readline");

function truncateString(text, numberOfCharacters) {
  if (typeof text !== "string" || text.trim().length === 0) {
    throw new Error("Text must have at least one character");
  }

  if (numberOfCharacters === undefined || numberOfCharacters === null || isNaN(numberOfCharacters)) {
    throw new Error("Please specify number of characters to extract");
  }

  numberOfCharacters = parseInt(numberOfCharacters, 10);

  if (numberOfCharacters < 0) {
    throw new Error("Number of characters must be a non-negative integer");
  }

  return text.substring(0, numberOfCharacters);
}

const readLine2 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readLine2.question("Please write only text = ", (userText) => {
  readLine2.question("Please specify the number of characters to extract = ", (charCount) => {
    try {
      const truncated = truncateString(userText, charCount);
      console.log(`Truncated text: ${truncated}`);
    } catch (error) {
      console.error(error.message);
    } finally {
      readLine2.close();
    }
  });
});


/**
 * Write a function to create social media post hash tag
 * @param {String} text 
 * @returns {String}
 * @example
 * createHashTag('Hello World'); => '#helloWorld'
 * createHashTag('i love javascript'); => '#iLoveJavascript'
 * createHashTag(''); => throws error "Text should have at least three characters"
 * createHashTag(); => throws error "Text should have at least three characters"
 * createHashTag('   '); => throws error "Text should have at least three characters"
 */
const readline = require("readline");

function createHashTag(text) {
  if (!text || text.trim().length < 3) {
    throw new Error("Text should have at least three characters");
  }

  return (
    '#' +
    text
      .trim()
      .toLowerCase()
      .split(' ')
      .map((word, index) =>
        index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join('')
  );
}

const readLine3 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readLine3.question("Create #hashTag =  ", (userText) => {
  try {
    const hashTag = createHashTag(userText);
    console.log("Generated HashTag = ", hashTag);
  } catch (error) {
    console.error(error.message);
  } finally {
    readLine3.close();
  }
});


/**
 * Write a function to format phone number as '+998 99 777 66 55'
 * @param {Number} phoneNumber 
 * @returns {String}
 * @throws {Error} 'Phone number must be either 9 or 12 characters long'
 * @example
 * formatPhoneNumber(998997776655); => '+998 99 777 66 55'
 * formatPhoneNumber(997776655); => '+998 99 777 66 55'
 * formatPhoneNumber(7776655); => throws error "Phone number must be either 9 or 12 characters long"
 * formatPhoneNumber(777665544332211); => throws error "Phone number must be either 9 or 12 characters long"
 * formatPhoneNumber(); => throws error "Phone number must be either 9 or 12 characters long"
 */
const readline = require('readline');

function formatPhoneNumber(phoneNumber) {
  if (!phoneNumber || typeof phoneNumber !== 'string' || !/^\d+$/.test(phoneNumber)) {
    throw new Error("Phone number must be a valid number");
  }

  if (phoneNumber.length === 12) {
    
    return `+${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3, 5)} ${phoneNumber.slice(5, 8)} ${phoneNumber.slice(8, 10)} ${phoneNumber.slice(10)}`;
  } else if (phoneNumber.length === 9) {
    
    return `+998 ${phoneNumber.slice(0, 2)} ${phoneNumber.slice(2, 5)} ${phoneNumber.slice(5, 7)} ${phoneNumber.slice(7)}`;
  } else {
    throw new Error("Phone number must be either 9 or 12 characters long");
  }
}

const readLine4 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readLine4.question("Enter phone number =  ", (phoneNumber) => {
  try {
    const formatted = formatPhoneNumber(phoneNumber);
    console.log("Formatted phone number = ", formatted);
  } catch (error) {
    console.error(error.message);
  } finally {
    readLine4.close();
  }
});


/**
 * Write a function that transforms text to different cases
 * @param {String} text 
 * @param {'camel'|'kebab'|'snake'} caseName - 'camel', 'kebab', 'snake'
 * @returns {String}
 * @example
 * changeTextCase('Hello World', 'camel'); => 'helloWorld'
 * changeTextCase('Hello World', 'kebab'); => 'hello-world'
 * changeTextCase('Hello World', 'snake'); => 'hello_world'
 * 
 */
const readline = require('readline');

function changeTextCase(text, caseName) {
  if (!text || typeof text !== 'string') {
    throw new Error("Text must be a non-empty string");
  }

  if (!['camel', 'kebab', 'snake'].includes(caseName)) {
    throw new Error("Invalid case name. Cases 'camel', 'kebab', 'snake'");
  }

  const words = text.trim().toLowerCase().split(/\s+/);

  switch (caseName) {
    case 'camel':
      return words
        .map((word, index) => (index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)))
        .join('');

    case 'kebab':
      return words.join('-');

    case 'snake':
      return words.join('_');

    default:
      throw new Error("Invalid case name");
  }
}

const readLine5 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readLine5.question("Enter text =  ", (text) => {
  readLine5.question("Enter case [camel, kebab, snake] = ", (caseName) => {
    try {
      const result = changeTextCase(text, caseName);
      console.log("Transformed text = ", result);
    } catch (error) {
      console.error(error.message);
    } finally {
      readLine5.close();
    }
  });
});


/**
 * Write a function to replace a given word in the text with the replacement word
 * @param {String} text - Some text
 * @param {String} word - A word that needs to be replaced
 * @param {String} replacement - A new word that will replace 'word' argument in the 'text'
 * @returns {String}
 * @example
 * const bigText = 'Winnie-the-Pooh (also known as Edward Bear, Pooh Bear or simply Pooh) is a fictional anthropomorphic teddy bear created by English author A. A. Milne and English illustrator E. H. Shepard. Winnie-the-Pooh first appeared by name in a children's story commissioned by London's Evening News for Christmas Eve 1925. The character is inspired by a stuffed toy that Milne had bought for his son Christopher Robin in Harrods department store, and a bear they had viewed at London Zoo.';
 * const replacedWord = 'Pooh';
 * const replacementWord = 'Puff'
 * replaceWordInText(bigText, replacedWord, replacementWord); =>
 * 'Winnie-the-Puff (also known as Edward Bear, Puff Bear or simply Puff) is a fictional anthropomorphic teddy bear created by English author A. A. Milne and English illustrator E. H. Shepard. Winnie-the-Puff first appeared by name in a children's story commissioned by London's Evening News for Christmas Eve 1925. The character is inspired by a stuffed toy that Milne had bought for his son Christopher Robin in Harrods department store, and a bear they had viewed at London Zoo.'
 */
const readline = require("readline");

function replaceWordInText(text, word, replacement) {
  if (typeof text !== "string" || text.trim() === "") {
    throw new Error("Text must be a non-empty string.");
  }
  if (typeof word !== "string" || word.trim() === "") {
    throw new Error("Word to be replaced must be a non-empty string.");
  }
  if (typeof replacement !== "string") {
    throw new Error("Replacement must be a string.");
  }

  const regex = new RegExp(`\\b${word}\\b`, "g");
  return text.replace(regex, replacement);
}

const readLine6 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readLine6.question("Enter the text = ...  ", (text) => {
  readLine6.question("Enter the word to replace =  ", (word) => {
    readLine6.question("Enter the replacement word =  ", (replacement) => {
      try {
        const result = replaceWordInText(text, word, replacement);
        console.log("Updated Text = ", result);
      } catch (error) {
        console.error(error.message);
      } finally {
        readLine6.close();
      }
    });
  });
});

/**
 * Write a function to extract price in number format from the text
 * @param {String} text 
 * @returns {Number}
 * @example
 * extractPriceFromText('Apple price in market is $2.32 per kg now'); => 2.32
 * extractPriceFromText('Apple price in market is $5 per kg now'); => 5
 * extractPriceFromText('There were no apples left in the shop'); => 'No matching price was found'
 */
const readline = require("readline");

function extractPriceFromText(text) {
  if (typeof text !== "string" || text.trim() === "") {
    throw new Error("Text must be a non-empty string.");
  }

  const match = text.match(/\$(\d+(\.\d+)?)/);

  if (match) {
    return parseFloat(match[1]);
  } else {
    return "No matching price was found";
  }
}

const readLine7 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readLine7.question("Enter the text containing a price =  ", (text) => {
  try {
    const price = extractPriceFromText(text);
    console.log("Extracted Price:", price);
  } catch (error) {
    console.error(error.message);
  } finally {
    readLine7.close();
  }
});


module.exports = {
  changeTextCase,
  createHashTag,
  extractPriceFromText,
  isStringEmpty,
  replaceWordInText,
  truncateString,
  formatPhoneNumber
}