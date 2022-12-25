// Write your tests here!
const {caesar} = require("../src/caesar")
const expect = require("chai").expect

describe("caesar", () => {
    it("should return false if the shift value is equal to 0", () => {
          const actual = caesar("message", 0);
          expect(actual).to.be.false;
    });
    it("should return false if the shift value is less than -25", () => {
          const actual = caesar("message", -27);
          expect(actual).to.be.false;
    });
    it("should return false if the shift value is greater than 25", () => {
          const actual = caesar("message", 30);
          expect(actual).to.be.false;
    });
    it("should return false if the shift value is not present", () => {
          const actual = caesar("message");
          expect(actual).to.be.false;
    });
    it("should ignore capital letters", () => {
          const expected = caesar("A Message", 3);
          const actual = caesar("a message", 3);
          expect(actual).to.equal(expected);
    });
    it("when encoding, handles shifts that go past the end of the alphabet", () => {
        const expected = caesar("zoo", 3);
        const actual = "crr";
        expect(actual).to.equal(expected);
  });
    it("maintains spaces and other nonalphabetic symbols in the message, when encoding", () => {
        const expected = caesar("$ dollars", 3);
        const actual = "$ grooduv";
        expect(actual).to.equal(expected);
    });
    it("maintains spaces and other nonalphabetic symbols in the message, when decoding", () => {
        const expected = caesar("$ grooduv", 3, false);
        const actual = "$ dollars";
        expect(actual).to.equal(expected);
    });
  });