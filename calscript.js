const day = document.querySelector(".day");

const date = document.querySelector(".date");
const month = document.querySelector(".month");
const year = document.querySelector(".year");

const today = new Date();



const weekdays = ["Sunday" , "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
"Saturday"];

const months = ["January", "February", "March", "April" , "May", "June", "July", "August", "September", "October", "November",
"December"];

date.textContent = today.getDate();
day.textContent  = weekdays[today.getDay()];
month.textContent = months[today.getMonth()];
year.textContent = today.getFullYear();