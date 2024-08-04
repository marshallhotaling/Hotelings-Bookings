import { bookingsData } from './calls/fetchBookings.js';
import { roomsData } from './calls/fetchRooms.js';
import {user} from "./loginView";


var rooms = []
var allTotals = 0
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
var currentData = document.querySelector(".currentData")
var currentTotal = document.querySelector(".currentTotal")


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

function checkForBookings() {
  checkForRooms()
  Promise.all([
    bookingsData(),
  ])
    .then(data => {
      console.log("here is bookings", data, user.id);
      const foundBookings = data[0].bookings.filter((item) => {
        return item.userID === user.id
      })

      currentData.innerHTML = ""
      console.log("here",rooms)

      const found = foundBookings.sort((a,b)=>{
        return b.date - a.date
      })
      console.log('bookings filterd', found)
      
      for (let i = 0; i < found.length; ++i) {
        const foundRoom = rooms.filter((item) => {
          return item.number === found[i].roomNumber
        })
        console.log(foundRoom[0])

        currentData.innerHTML += `<label class="currentDate2">${found[i].date}</label> <label class="currentRoomNumber2">${found[i].roomNumber}</label> <label class="currentPrice2">$ ${foundRoom[0].costPerNight.toFixed(2)}</label> `
        allTotals += foundRoom[0].costPerNight


      }
      currentTotal.innerHTML = `Total: $ ${allTotals.toFixed(2)}`







    })
    .catch(err => console.log(err));
}


function checkForRooms() {
  Promise.all([
    roomsData(),
  ])
    .then(data => {
      console.log("here is rooms", data, user.id)
      rooms = data[0].rooms
    })
    .catch(err => console.log(err));
}



checkForBookings()

