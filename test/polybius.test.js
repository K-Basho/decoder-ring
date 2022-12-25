// Write your tests here!
const {polybius} = require("../src/polybius")
const expect = require("chai").expect

describe("polybius", () => {
    it("should translate the letter i to 42 when encoded", () => {
        const expected = "42"  
        const actual = polybius("i");
        expect(actual).to.equal(expected);
    });
    it("should translate the letter j to 42 when decoding", () => {
        const expected = "42"
        const actual = polybius("j");
        expect(actual).to.equal(expected);
    });
    it("should translate 42 to (i/j) when decoding", () => {
        const expected = "i/j"
        const actual = polybius("42", false);
        expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
        const expected = "23513434112251"  
        const actual = polybius("Message");
        expect(actual).to.equal(expected);
    });
    it("should maintain spaces in the message, before and after encoding", () => {
          const expected = polybius("a message");
          const actual = "11 23513434112251";
          expect(actual).to.equal(expected);
    });
    it("should maintain spaces in the message, before and after decoding", () => {
        const expected = polybius("11 23513434112251", false);
        const actual = "a message";
        expect(actual).to.equal(expected);
  });
  });