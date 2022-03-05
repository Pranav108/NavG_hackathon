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
items.forEach(function (item, index) {
  item.innerHTML = format(values[index]);
});


// I used loop for html 
for (var i = 0; i < giveaway.length; i++) {

}



// for finding countdown
const startingminutes=10
let time=startingminutes*60;

const countdownEl=document.getElementById("countdown")

setInterval(updatecountdown,1000)

function updatecountdown(){
    const minutes=Math.floor(time/60)
    const second=time%60
    countdownEl.innerHTML='${minutes}:${second}'
    time--;

}
