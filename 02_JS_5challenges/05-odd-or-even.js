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
//   const result = items.reduce((total, item) => {
//     return total + Number(item)
//   }, 0)
//   console.log(result)
//   return result % 2 === 0 ? 'EVEN' : 'ODD'
// }
// console.log(sum(56))
// console.log(sum(745))



// console.log(sum(56))
// console.log(sum(745))



// let n=56;
// let n=745
// let sum=0;
// while (n>0){
//     sum+=n%10
//     n=Math.floor(n/10)
// }
// console.log(sum)



const sum=(number)=>{
    items=(number).toString().split("")
    result=0
    for (i in items){
        result+=i
    }
    return result%2==0? "even":"odd"
}
console.log(sum(56))
console.log(sum(745))













// let a=56
// let b=745
// let first=((Math.floor(a/10))+a%10)
// let n=(Math.floor(b/10))
// let s=(Math.floor(n/10))
// let d=n%10
// let m=b%10
// let total=s+d+m
// f=(first%2)?true:false
// console.log(f)
// s=(total%2)?true:false
// console.log(s)







