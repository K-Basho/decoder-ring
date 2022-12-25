// Write your tests here!
const {substitution} = require("../src/substitution")
const expect = require("chai").expect

describe("substitution", () => {
    it("should return false if  substitution alphabet is missing", () => {
        const message = "test";
        const actual = substitution(message);
        expect(actual).to.be.false;
      });
      it("should return false if the substitution alphabet is not exactly 26 characters", () => {
        const message = "message";
        const alphabet = "abcdef";
        const actual = substitution(message, alphabet);
        expect(actual).to.be.false;
      });

      it("should return false if the substitution alphabet does not contain unique characters", () => {
        const message = "message";
        const alphabet = "abcdefabcdef";
        const actual = substitution(message, alphabet);
        expect(actual).to.be.false;
      });

      it("should encode a message by using the given substitution alphabet", () => {
        const message = "message";
        const alphabet = "ylmoqnjibuhvpgctfxdrzeswak";
        const actual = substitution(message, alphabet);
        const expected = "pqddyjq";
  
        expect(actual).to.equal(expected);
      });
      it("should work with any kind of key with unique characters", () => {
        const message = "message";
        const alphabet = ".lmoqnjibuhvpgctfxdrzeswak";
        const actual = substitution(message, alphabet);
        const expected = "pqdd.jq";
  
        expect(actual).to.equal(expected);
      });
      it("should preserve spaces", () => {
        const message = "my message";
        const alphabet = "ylmoqnjibuhvpgctfxdrzeswak";
        const actual = substitution(message, alphabet);
        const expected = "pa pqddyjq";
        expect(actual).to.equal(expected);
      });

      it("should decode a message by using the given substitution alphabet", () => {
      const message = "pqddyjq";
      const alphabet = "ylmoqnjibuhvpgctfxdrzeswak";
      const actual = substitution(message, alphabet, false);
      const expected = "message";

      expect(actual).to.equal(expected);
    });

    it("should work with any kind of key with unique characters", () => {
      const message = "pqdd.jq";
      const alphabet = ".lmoqnjibuhvpgctfxdrzeswak";
      const actual = substitution(message, alphabet, false);
      const expected = "message";

      expect(actual).to.equal(expected);
    });

    it("should preserve spaces", () => {
      const message = "pa pqddyjq";
      const alphabet = "ylmoqnjibuhvpgctfxdrzeswak";
      const actual = substitution(message, alphabet, false);
      const expected = "my message";

      expect(actual).to.equal(expected);
    });

  });
  