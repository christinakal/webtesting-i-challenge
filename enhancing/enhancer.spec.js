const enhancer = require("./enhancer.js");

// test away!
describe("enhancer", () => {
  describe("repair", () => {
    const testItem = {
      durability: 50,
      enhancement: 1,
      name: "Test Item"
    };

    it("should restore durability to 100", () => {
      expect(enhancer.repair(testItem).durability).toEqual(100);
    });
  });

  // === succeed
  describe("succeed", () => {
    const enhanceableItem = {
      durability: 100,
      enhancement: 5,
      name: "Enhanceable Item"
    };

    it("should throw on improper input", () => {
      [{}, true, 1, "string", []].forEach(item => {
        expect(() => enhancer.succeed(item)).toThrow();
      });
    });

    it("should add 1 to enhancmenet for enhanceable items", () => {
      expect(enhancer.succeed(enhanceableItem).enhancement).toEqual(6);
    });
  });

  // === fail
  describe("fail", () => {
    const baseItem = {
      durability: 100,
      enhancement: 5,
      name: "Base Item"
    };

    it("should decrease durability by 5 if enhancement is less than 15", () => {
      expect(enhancer.fail(baseItem).durability).toEqual(95);
    });

    it("should decrease durability by 10 if enhancement is >= 15", () => {
      expect(
        enhancer.fail({ ...baseItem, enhancement: 15 }).durability
      ).toEqual(90);
      expect(
        enhancer.fail({ ...baseItem, enhancement: 20 }).durability
      ).toEqual(90);
    });

    it("should decrease enhancement by 1 if enhancement >=17", () => {
      expect(
        enhancer.fail({ ...baseItem, enhancement: 17 }).enhancement
      ).toEqual(16);
      expect(
        enhancer.fail({ ...baseItem, enhancement: 18 }).enhancement
      ).toEqual(17);
    });
  });

  // === get
  describe("get", () => {
    const baseItem = {
      name: "Base Item",
      enhancement: 10,
      durability: 90
    };

    it("should not modify name if enhancement is 0", () => {
      expect(enhancer.get({ ...baseItem, enhancement: 0 }).name).toEqual(
        baseItem.name
      );
    });

    it("should prepend enhancement level to name if enhancement > 0", () => {
      expect(enhancer.get(baseItem).name).toEqual("[+10] " + baseItem.name);
    });
  });
});
