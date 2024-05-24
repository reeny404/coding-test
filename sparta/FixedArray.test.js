import { expect } from "chai";
import { beforeEach, describe } from "mocha";
import { FixedArray } from "./FixedArray.js";

describe("FixedArray", () => {
  let fixedArray;
  let array;
  const TEST_LENGTH = 5;

  beforeEach(() => {
    fixedArray = new FixedArray(TEST_LENGTH);
    array = [];

    for (let i = 0; i < TEST_LENGTH; i++) {
      fixedArray.push(i);
      array.push(i);
    }
  });

  it("getLength 테스트", () => {
    expect(fixedArray.getLength()).to.equal(array.length);
  });
  it("stringify 테스트", () => {
    expect(fixedArray.stringify()).to.equal(JSON.stringify(array));
  });
  it("pop 테스트", () => {
    expect(fixedArray.pop()).to.equal(array.pop());
  });
});
