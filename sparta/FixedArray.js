export class FixedArray {
  #arrayLength;
  #array;
  #arrayMaxLength;
  // 필요한변수 추가 가능

  // #arrayLength와 #array를 알맞게 초기화
  // 생성자 파라미터에는 FixedArray의 고정된 길이를 받아야됨.
  // #array초기화 시 각요소의 값은 undefined
  constructor(length) {
    this.#array = [];
    this.#arrayLength = 0;
    this.#arrayMaxLength = length;
  }

  //////////////////////////////
  //////      LEVEL 1      /////
  //////////////////////////////
  // 배열 맨 뒤에 요소 추가
  // 배열의 길이가 #arrayLength를 초과할 경우 요소를 추가되면 안됨.
  push(element) {
    if (this.#arrayMaxLength === this.#arrayLength) {
      return;
    }
    this.#array[this.#arrayLength] = element;
    this.#arrayLength++;
  }

  // 배열의 맨 마지막 요소를 제거하고 그 요소를 반환
  pop() {
    const lastValue = this.#array[this.#arrayLength - 1];
    this.#array[this.#arrayLength - 1] = undefined;
    this.#arrayLength--;

    return lastValue;
  }

  // 현재 배열의 사용되고 있는 크기를 반환
  getLength() {
    return this.#arrayLength;
  }

  // 현재 배열의 상태를 string으로 반환
  stringify() {
    let string = "";
    for (let i = 0; i < this.#array.length; i++) {
      const element = this.#array[i];
      if (element === undefined) {
        continue;
      }
      string += (i === 0 ? "" : ",") + element;
    }
    return `[${string}]`;
  }
}

// const a = new FixedArray(3);
// a.push(1);
// a.push(2);
// console.log(a.stringify());
// a.push(3);
// a.push(4);
// console.log(a.stringify());
// console.log(a.pop());
// console.log(a.stringify());
