// multiply arguments

// reduce this to 4 line of code
// function multiply() {
//   const args = [...arguments]
//   const result = args.reduce((total, item) => {
//     return item ? item * total : item + total
//   }, 1)
//   return result
// }


// multiply(2, 3, 4, 5, 6, 7)

// console.log(multiply(2, 0, 4, 2))
// // 4 * 5 = 20
// console.log(multiply(1, 2, 3, 5))
// // 1 * 2 * 3 * 5 = 30
// console.log(multiply(2, 0, 4, 2))
// 2 + 0 * 4 * 2=16

//  NIFTY SOLUTIONS

const multiply = (...args) =>
  args.reduce((total, item) => {return (total * item )}, 1)
  console.log(multiply(1, 2, 3, 5))
  console.log(multiply(2, 0, 4, 2))
  console.log(multiply(2, 0, 4, 2))