import { bookingsData } from './calls/fetchBookings.js';
import { roomsData } from './calls/fetchRooms.js';
import {user} from "./loginView";



var historyBookingsPage = document.querySelector(".historyBookingsPage")
var currentBookingsPage = document.querySelector(".currentBookingsPage")
var logOutButton = document.querySelector(".logOutButton")
var currentButton = document.querySelector(".currentButton")
var historyButton = document.querySelector(".historyButton")
var loginPage = document.querySelector(".loginPage")
var dashBoard = document.querySelector(".dashBoard")
var BookingButton = document.querySelector(".BookingButton")
var bookingPage = document.querySelector(".bookingPage")
var homeButton = document.querySelector(".homeButton")
var homePage = document.querySelector(".homePage")
var loginInput = document.querySelector(".userNInput")

homeButton.addEventListener('click', homeSwitch)
logOutButton.addEventListener('click', logOut);
historyButton.addEventListener("click", PastSwitch)
currentButton.addEventListener("click", CurrentSwitch)
BookingButton.addEventListener("click", bookingSwitch)



function logOut () {
  hideViews()
  loginPage.classList.remove('hidden');
  dashBoard.classList.add('hidden');
  //make sure you add for pasword
  loginInput.value = ""
}
function PastSwitch ()  {
  hideViews()
  historyBookingsPage.classList.remove("hidden")
}
function CurrentSwitch() {
  hideViews()
  currentBookingsPage.classList.remove("hidden")
}
function bookingSwitch() {
  hideViews()
  bookingPage.classList.remove("hidden")
}
function homeSwitch() {
  hideViews()
  homePage.classList.remove("hidden")
  console.log("user", user)
}
function hideViews() {
  historyBookingsPage.classList.add("hidden")
  currentBookingsPage.classList.add("hidden")
  bookingPage.classList.add("hidden")
  homePage.classList.add("hidden")

}

function checkForBookings(name) {
  console.log("loginInput", name)
  Promise.all([
    bookingsData(),
  ])
    .then(data => {
      console.log("here is bookings", data);
      // const found = data.filter((x) => x.customers.some((y) => y.name === name));
      // if (found.length > 0) {
      //   user = name
      //   loginPage.classList.add('hidden');
      //   dashBoard.classList.remove('hidden');
      // }
    })
    .catch(err => console.log(err));
}


function checkForRooms(name) {
  console.log("loginInput", name)
  Promise.all([
    roomsData(),
  ])
    .then(data => {
      console.log("here is rooms", data)
      // const found = data.filter((x) => x.customers.some((y) => y.name === name));
      // if (found.length > 0) {
      //   user = name
      //   loginPage.classList.add('hidden');
      //   dashBoard.classList.remove('hidden');
      // }
    })
    .catch(err => console.log(err));
}



checkForBookings(user.id)
checkForRooms(user.id)
