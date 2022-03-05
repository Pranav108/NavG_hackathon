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

//reduce this to 3 line of code
// const sum = (number) => {
//   const items = [...(number + '')]
//   console.log(items)
//   const result = items.reduce((total, item) => {
//     return total + Number(item)
//   }, 0)
//   console.log(result)
//   return result % 2 === 0 ? 'EVEN' : 'ODD'
// }


// const sum=(num)=>{var list=num.toString().split("")
// let total=list.reduce((accumlator,value)=>{
//     return Number(accumlator)+Number(value)
//     })
//      console.log(total)

//    return ((total%2==0)?"EVEN":"ODD")}

const sum=(num)=>{var list=num.toString().split("")
total=0
for (i of list){
    total=total+Number(i)
}
console.log(total)
   return ((total%2==0)?"EVEN":"ODD")}


console.log(sum(745))
console.log(sum(56))

