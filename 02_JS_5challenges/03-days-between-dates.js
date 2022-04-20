const date1 = new Date('May 27, 2024').getTime()
const date2 = new Date('Jan 5 , 2022').getTime()

//reduce this to a single arrow function
const getDays = (date1,date2)=>((date1-date2)/(1000 * 60 * 60 * 24))

console.log(getDays(date1, date2))
