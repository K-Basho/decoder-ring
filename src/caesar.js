// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift = 0, encode = true) {
    // your solution code here
    if (shift == 0 || shift > 25 || shift < -25 ){ return false}
    //return false if shift is not present
      let encryptedMessage = ""
      let lowerMessage = input.toLowerCase()
      for (letter of lowerMessage) {
        encryptedMessage += shiftLetter(letter, shift)
      }
    
      function shiftLetter(letter, shift) {
      let newLetter = ""
    
      let letterCode = letter.charCodeAt(0)
      let newLetterCode
      if ((letterCode >= 32 && letterCode <= 47) || (letterCode >= 58 && letterCode <= 64) || (letterCode >= 123 && letterCode <=126)){
      //exclude range of letter codes: 32–47 / 58–64 / 91–96 / 123–126
      //keep special char as is
        newLetterCode = letterCode
      } else {
        if (encode){
          //wrap around end of alphabet
          newLetterCode = letterCode + (shift % 26)
          if (newLetterCode < 97) {
            newLetterCode += 26
          } else if (newLetterCode > 122) {
            newLetterCode -= 26
          }
        } else {
          
        
        newLetterCode = letterCode - (shift % 26)
        if (newLetterCode < 97) {
          newLetterCode += 26
        } else if (newLetterCode > 122) {
          newLetterCode -= 26
        }
      }
      }

      newLetter = String.fromCharCode(newLetterCode)
      
      return newLetter
    }
  return encryptedMessage

  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };