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
// const giveaway = document.querySelector('.giveaway');
// const deadline = document.querySelector('.deadline');
// const items = document.querySelectorAll('.deadline-format h4');

// giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

//Have to use loop to set values in html
// items.forEach(function (item, index) {
//   item.innerHTML = format(values[index]);
// });
time = Math.round(Math.abs(time))
const currentYear=new Date().getFullYear()
const newYearTime=new Date(`January 1 ${currentYear+1} 00:00:00`)
function update(){
  const currentTime=new Date()
  const diff=newYearTime-currentTime
  const d=Math.floor(diff/(1000*60*60*24))
  const h=Math.floor(diff/(1000*60*60*24))
  console.log(d)
  console.log(h)
}
update()