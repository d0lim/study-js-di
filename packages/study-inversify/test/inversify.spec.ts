import { expect } from "chai";
import { myContainer } from "../src/config/inversify.config";
import { Warrior } from "../src/interfaces/warrior.interface";
import { TYPES } from "../src/types";

describe("Test inversify", () => {
  it("should be able to load container", () => {
    const ninja = myContainer.get<Warrior>(TYPES.Warrior);

    expect(ninja.fight()).eql("cut!"); // true
    expect(ninja.sneak()).eql("hit!"); // true
  });
});
