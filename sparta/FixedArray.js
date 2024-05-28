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

  //////////////////////////////
  //////      LEVEL 2      /////
  //////////////////////////////
  // 배열에서 특정 요소의 첫 번째 인덱스를 반환합니다. 요소가 없으면 -1을 반환합니다.
  indexOf(searchElement) {
    return this.findIndex((element) => element === searchElement);
  }

  // 배열의 각 요소에 대해 predicate 결과가 true인 요소 중 제일 첫번째 요소 1개만 반환
  // true 가 없으면 null 반환
  find(predicate) {
    const index = this.findIndex(predicate);
    if (index === -1) {
      return null;
    }
    return this.#array[index];
  }

  // 배열의 각 요소에 대해 predicate 결과가 true인 요소 중 제일 첫번째 요소의 index반환
  // true 가 없으면 -1 반환
  findIndex(predicate) {
    for (let i = 0; i < this.#arrayLength; i++) {
      const element = this.#array[i];
      if (predicate(element, i, this.#array)) {
        return i;
      }
    }
    return -1;
  }

  // 배열에 특정 요소가 포함되어 있는지 여부를 확인합니다. (true or false)
  includes(searchElement) {
    return this.indexOf(searchElement) !== -1;
  }

  //////////////////////////////
  //////      LEVEL 3      /////
  //////////////////////////////
  // 배열의 각 요소에 대해 제공된 함수를 한 번씩 실행합니다.
  forEach(callback) {
    for (let i = 0; i < this.getLength(); i++) {
      callback(this.#array[i], i, this.#array);
    }
  }

  // 배열의 각 요소에 대해 predicate 결과가 true인 요소를 모아 새로운 배열 반환
  filter(predicate) {
    const filteredValues = {};
    for (let i = 0; i < this.getLength(); i++) {
      const element = this.#array[i];
      if (predicate(element, i, this.#array)) {
        filteredValues[i] = element;
      }
    }

    const values = Object.values(filteredValues);
    const newArray = new FixedArray(values.length);
    for (const val of values) {
      newArray.push(val);
    }
    return newArray;
  }

  // 배열의 각 요소에 대해 callback 함수를 호출한 결과를 모아 새로운 배열로 반환
  map(callback) {
    const newArray = new FixedArray(this.getLength());
    for (let i = 0; i < this.getLength(); i++) {
      const element = callback(this.#array[i], i, this.#array);
      newArray.push(element);
    }
    return newArray;
  }

  // 배열의 각 요소에 대해 제공된 함수를 호출하여 누산기에 값을 축적
  reduce(callback, initValue = 0) {
    let value = initValue;
    for (let i = 0; i < this.getLength(); i++) {
      value = callback(value, this.#array[i], i, this.#array);
    }
    return value;
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
