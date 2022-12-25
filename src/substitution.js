// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function() {
  // Helper function to find object key 
  function findObjectKey(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) {
      return false;
    }

    // Check if alphabet has repeated characters
    const rptObj = {};
    for (let i = 0; i < alphabet.length; i++) {
      const specLetter = alphabet[i];
      if (rptObj.hasOwnProperty(specLetter)) {
        return false;
      } else {
        rptObj[specLetter] = '';
      }
    }

    const originalAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const lowerInput = input.toLowerCase();
    const obj = {};
    let newMessage = "";
    originalAlphabet.split("").forEach((letter, i) => obj[letter] = alphabet[i]);

    for (let letter of lowerInput) {
      if (letter === " ") {
        newMessage += " ";
      } else if (encode) {
        newMessage += obj[letter];
      } else {
        const key = findObjectKey(obj, letter);
        newMessage += key;
      }
    }

    return newMessage;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };


