
let time = document.querySelector("#time");
let date = document.querySelector("#date");


setInterval( () => {
today();
},1000);

function today () {

    
let today = new Date();

const monthNames = ["Jan","Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Des",];

const dayNames = [ "Sat", "Sun", "Mon", "Tue", "Wed", "Thur", "Fri"];


// console.log(today);
// let currentTime = `${today.getHours()} : ${today.getMinutes()} : ${today.getSeconds()}`;


let currentTime = `${today.getHours() < 9 ? '0' +today.getHours() : today.getHours()} : ${today.getMinutes()< 9 ? '0' +today.getMinutes() : today.getMinutes()} :
 ${today.getSeconds() < 9 ? '0' +today.getSeconds() : today.getSeconds()}`;






console.log(currentTime);

time.innerHTML= currentTime;




let currentDate = ` ${dayNames[today.getDay()+1]} , ${today.getDate()} ${monthNames[today.getMonth()]} ${today.getFullYear()}`;

date.innerHTML = currentDate;
console.log(currentDate);






    
}


