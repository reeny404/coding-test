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
  it("getLength", () => {
    expect(fixedArray.getLength()).to.equal(array.length);
  });
  it("stringify", () => {
    expect(fixedArray.stringify()).to.equal(JSON.stringify(array));
  });
  it("indexOf", () => {
    expect(fixedArray.indexOf(3)).to.equal(array.indexOf(3));
  });
  it("find", () => {
    const p1 = (element) => element === 3;
    expect(fixedArray.find(p1)).to.equal(array.find(p1));

    const p2 = (element, index) => element !== index;
    expect(fixedArray.find(p2)).to.equal(null);
    expect(array.find(p2)).to.equal(undefined);
  });
  it("findIndex", () => {
    const p1 = (element) => element === 3;
    expect(fixedArray.findIndex(p1)).to.equal(array.findIndex(p1));

    const p2 = (element, index) => element !== index;
    expect(fixedArray.findIndex(p2)).to.equal(array.findIndex(p2));
  });
  it("includes", () => {
    expect(fixedArray.includes(0)).to.equal(array.includes(0));
    expect(fixedArray.includes(1)).to.equal(array.includes(1));
    expect(fixedArray.includes(2)).to.equal(array.includes(2));
    expect(fixedArray.includes(3)).to.equal(array.includes(3));
    expect(fixedArray.includes(4)).to.equal(array.includes(4));
    expect(fixedArray.includes(-1)).to.equal(array.includes(-1));
  });
  it("forEach", () => {
    const func = (v, i) => console.log(`foreach ${i}번째 ${v}`);
    fixedArray.forEach(func);
    console.log("--------");
    array.forEach(func);
  });
  it("filter", () => {
    const func = (v, i) => v + i > 3;
    expect(fixedArray.filter(func).stringify()).to.equal(
      JSON.stringify(array.filter(func))
    );
  });
  it("map", () => {
    const func = (v, i) => v + i;
    expect(fixedArray.map(func).stringify()).to.equal(
      JSON.stringify(array.map(func))
    );
  });
  it("reduce", () => {
    const func = (a, b) => a + b;
    expect(fixedArray.reduce(func)).to.equal(array.reduce(func));
  });
  it("pop", () => {
    expect(fixedArray.pop()).to.equal(array.pop());
    expect(fixedArray.pop()).to.equal(array.pop());
    expect(fixedArray.pop()).to.equal(array.pop());
    expect(fixedArray.pop()).to.equal(array.pop());
    expect(fixedArray.pop()).to.equal(array.pop());
    expect(fixedArray.pop()).to.equal(array.pop());
  });
});
