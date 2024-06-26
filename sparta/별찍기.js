// *           // 1-1
// **          // 2-2
// ***         // 3-3
// ****
// *****
// (() => {
//   let str = "";
//   for (let i = 0; i < 5; i++) {
//     for (let j = 0; j <= i; j++) {
//       str += "*";
//     }
//     str += "\n";
//   }
//   console.log(str);
// })();

// *****   // 1 - 5
// ****    // 2 - 4
// ***     // 3 - 3
// **      // 4 - 2
// *       // 5 - 1
// (() => {
//   let str = "";
//   for (let i = 0; i < 5; i++) {
//     for (let j = 5; j > i; j--) {
//       str += "*";
//     }
//     str += "\n";
//   }
//   console.log(str);
// })();

// *****   // 1 - [0]5
//  ****   // 2 - [1]4
//   ***   // 3 - [2]3
//    **   // 4 - [3]2
//     *   // 5 - [4]1
// (() => {
//   let str = "";
//   for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5; j++) {
//       str += i <= j ? "*" : " ";
//     }
//     str += "\n";
//   }
//   console.log(str);
// })();

//     *   // 1 - [4]1
//    **   // 2 - [3]2
//   ***   // 3 - [2]3
//  ****   // 4 - [1]4
// *****   // 5 - [0]5
// (() => {
//   let str = "";
//   for (let i = 0; i < 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//       str += j + i >= 5 ? "*" : " ";
//     }
//     str += "\n";
//   }
//   console.log(str);
// })();

// ///////////////////////////////
//     *
//    ***
//   *****
//  *******
// *********
(() => {
  let str = "";
  for (let i = 1; i <= 5; i++) {
    for (let j = 0; j <= 10; j++) {
      str += 5 - i < j && j < 5 + i ? "*" : " ";
    }
    str += "\n";
  }
  console.log(str);
})();

// *********
//  *******
//   *****
//    ***
//     *
(() => {
  let str = "";
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= 10; j++) {
      str += i < j && j < 10 - i ? "*" : " ";
    }
    str += "\n";
  }
  console.log(str);
})();
