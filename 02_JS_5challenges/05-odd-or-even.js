// odd or even

// sum(56) - ODD
// 5 + 6 = 11
// 11 % 2 = 1

// sum(745) - EVEN
// 7 + 4 + 5= 16
// 16 % 2 = 0

// Number To String
// .toString()
// + ''

// String To Number
// parseInt - for integer
// parseFloat - for decimals
// Number - returns NaN if not a number

// reduce this to 3 line of code
// const sum = (number) => {
//   const items = [...(number + '')]
//   const result = items.reduce((total, item) => {
//     return total + Number(item)
//   }, 0)
//   console.log(result)
//   return result % 2 === 0 ? 'EVEN' : 'ODD'
// }


// const sum = ([...(number + '')])=>items.reduce((total, item)=>total + Number(item),0)
console.log(sum(56))
console.log(sum(745))

// const multiply = (...args) =>args.reduce((total, item) => total * (item), 1)
// console.log(multiply(2, 3, 4, 5, 6, 7))



