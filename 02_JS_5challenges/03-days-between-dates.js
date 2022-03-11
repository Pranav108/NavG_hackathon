// const date1 = new Date('May 27, 2024')
// const date2 = new Date('Jan 5 , 2022')


// console.log(date1)
// console.log(date2)

// reduce this to a single arrow function
// const getDays = (date1,date2)=>{
//   const oneDay = 1000 * 60 * 60 * 24;
//   const time2 = date2.getTime();
//   console.log(time2);
//   const time1 = date1.getTime();
//   console.log(time1);
//   let time = time2 - time1;
//   time = time / oneDay;
//   time = Math.round(Math.abs(time))
// return time
// }
// console.log(getDays(date1, date2))


// const date1 = new Date('May 27, 2024')
// const date2 = new Date('Jan 5 , 2022')

// reduce this to a single arrow function
// const getDays = (date1,date2)=>{
//   const oneDay = 1000 * 60 * 60 * 24;
//   const time2 = date2.getTime();
//   console.log(time2);
//   const time1 = date1.getTime();
//   console.log(time1);
//   let time = time2 - time1;
//   time = time / oneDay;
//   time = Math.round(Math.abs(time))
// return time
// }
// console.log(getDays(date1, date2))

//Expected output should be: "1 year, 10 months, 1 days".
// console.log(new Date('2014-05-10'), new Date('2016-03-11'));


// var a = new Date(2010, 10, 1);
// var b = new Date(2010, 9, 1);

// var c = a - b; // c equals 2674800000,
//                // the amount of milisseconds between September 1, 2010
//                // and August 1, 2010.
// console.log(c) 


// const date1 = new Date('7/13/2010');
// const date2 = new Date('12/15/2010');

// const date1 = new Date('7/13/2010');
// const date2 = new Date('12/15/2010');
// const diffTime = Math.abs(date2 - date1);
// const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
// console.log(diffTime + " milliseconds");
// console.log(diffDays + " days");



const date1 = new Date('May 27 , 2024')
const date2 = new Date('Jan 5 , 2022')

const diffTime1 = Math.abs(date2);
const diffTime2 = Math.abs(date1);
const Total_diffTime= diffTime2- diffTime1
const diffDays =Math.ceil(Total_diffTime/(1000 * 60 * 60 * 24)); 
console.log(diffTime1 );
console.log(diffTime2 );
console.log(diffDays + " days");


