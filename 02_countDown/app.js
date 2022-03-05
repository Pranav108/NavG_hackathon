// const months = [
  // 'January',
  // 'February',
  // 'March',
  // 'April',
  // 'May',
  // 'June',
  // 'July',
  // 'August',
  // 'September',
  // 'October',
  // 'November',
  // 'December',
// ];
// const weekdays = [
  // 'Sunday',
  // 'Monday',
  // 'Tuesday',
  // 'Wednesday',
  // 'Thursday',
  // 'Friday',
  // 'Saturday',
// ];
// const giveaway = document.querySelector('.giveaway');
// const deadline = document.querySelector('.deadline');
// const items = document.querySelectorAll('.deadline-format h4');

// giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

//Have to use loop to set values in html
// items.forEach(function (item, index) {
//   item.innerHTML = format(values[index]);
// });



//new Date take for getting current time and year ,month & day
var currentDa = new Date();
var nowTime = new Date(currentDa.getTime());
var Chour = nowTime.getHours();
var Cminute = nowTime.getMinutes();
var Csecond=nowTime.getSeconds();
var currentTime = (+Chour + ":" + Cminute+":"+Csecond);
console.log(currentTime)
var weekday=["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var month = ["January","February","March","April","May","Jun","Jully","Auguest","September","Octomber","November","December"]
var b=month[nowTime.getMonth()]
var m=nowTime.getDay()
var c=weekday[nowTime.getDay()]
var k=nowTime.getFullYear()
console.log(c,b,k)

// here we set alarm (time and date)
var k8=("March"+" "+15+" "+2022+" "+2+":"+24+":")
// here we used setInterval for the function gave output one bye one but delay
var x = setInterval(function(){
    var countDownDate = new Date(k8).getTime();
    var now = new Date().getTime();
    var timeleft = countDownDate - now;
    // we used Math.floor for removing floating number
    var day = Math.floor((timeleft / (1000 * 60 * 60 * 24)) %24)  
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    var c=(day+":"+hours+":"+minutes+":"+seconds)
    console.log(c)
    // here we used clearInterval for stop the x function
    if (timeleft <1){
        clearInterval(x);
        console.log(c)
        console.log("done")
    }
},1000)


