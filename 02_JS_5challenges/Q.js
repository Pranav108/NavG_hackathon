// n=123456
// sum=0
// while n>0:
//     sum=sum+n%10
//     n=n//10
// print(sum)


let n=23;
let sum=0;
while (n>0){
    sum+=n%10
    n=Math.floor(n/10)
}
console.log(sum)