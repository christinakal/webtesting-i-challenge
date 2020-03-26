const enhancer = require("./enhancer.js");

// test away!
describe("enhancer", () => {
  describe("repair", () => {
    const testItem = {
      durability: 50,
      enhancement: 1,
      name: "Test Item"
    };

    it("should throw if item is not the proper format", () => {
      [{}, true, 1, "string", []].forEach(item => {
        expect(() => repair(item)).toThrow();
      });
    });

    it("should restore durability to 100", () => {
      expect(enhancer.repair(testItem).durability).toEqual(100);
    });
  });

  describe("succeed", () => {
    const enhanceableItem = {
      durability: 100,
      enhancement: 5,
      name: "Enhanceable Item"
    };

    it("should throw on improper input", () => {
      [{}, true, 1, "string", []].forEach(item => {
        expect(() => succeed(item)).toThrow();
      });
    });
  });
});
