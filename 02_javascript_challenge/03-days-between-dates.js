const date1 = new Date('May 27, 2024')
const date2 = new Date('Jan 5 , 2022')

// reduce this to a single arrow function   
const getDays = (date1,date2)=>{
  const oneDay = 1000 * 60 * 60 * 24;
  const time2 = date2.getTime();
  console.log(time2);
  const time1 = date1.getTime();
  console.log(time1);
  let time = time2 - time1;
  time = time / oneDay;
  time = Math.round(Math.abs(time))
return time
}


console.log(getDays(date1, date2))
