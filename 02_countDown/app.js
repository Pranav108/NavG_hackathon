const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

//Have to use loop to set values in html
// items.forEach(function (item, index) {
//   item.innerHTML = format(values[index]);
// });
var showTime=setInterval(() => {
  var date1 = new Date().getTime(); 
  console.log(typeof(date1))
  var date2 = new Date("March 7,2022 ").getTime(); 
  console.log(date2)
  
  var distance= date2- date1;
  console.log(distance)
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`)
  
  
  }, 1000)
  
  console.log(showTime)