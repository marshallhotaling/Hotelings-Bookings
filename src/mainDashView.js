import {bookingsData} from './calls/fetchBookings.js';
import {roomsData} from './calls/fetchRooms.js';
import {user} from "./loginView";

var rooms = []
var allTotals = 0
var historyBookingsPage = document.querySelector(".historyBookingsPage")
var currentBookingsPage = document.querySelector(".currentBookingsPage")
var logOutButton = document.querySelector(".logOutButton")
var currentButton = document.querySelector(".currentButton")
var loginPage = document.querySelector(".loginPage")
var dashBoard = document.querySelector(".dashBoard")
var BookingButton = document.querySelector(".BookingButton")
var bookingPage = document.querySelector(".bookingPage")
var homeButton = document.querySelector(".homeButton")
var homePage = document.querySelector(".homePage")
var loginInput = document.querySelector(".userNInput")
var currentData = document.querySelector(".currentData")
var currentTotal = document.querySelector(".currentTotal")
var roomTypeSelector = document.querySelector("#roomType")
var bookedDateInput = document.querySelector("#bookedDate")
var filterDataSubmit = document.querySelector(".dataSubmit")
var currentAvailData = document.querySelector(".currentAvailData")
var userPInput = document.querySelector(".userPInput")


homeButton.addEventListener('click', homeSwitch)
logOutButton.addEventListener('click', logOut);
currentButton.addEventListener("click", CurrentSwitch)
BookingButton.addEventListener("click", bookingSwitch)
filterDataSubmit.addEventListener('click', filterForRooms)

function logOut() {
  hideViews()
  loginPage.classList.remove('hidden');
  dashBoard.classList.add('hidden');
  userPInput.value = ''
  loginInput.value = ""
}

function CurrentSwitch() {
  allTotals = 0
  checkForBookings()
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
      const foundBookings = data[0].bookings.filter((item) => {
        return item.userID === user.id
      })

      currentData.innerHTML = ""

      const found = foundBookings.sort((a, b) => {
        return b.date - a.date
      })

      for (let i = 0; i < found.length; ++i) {
        const foundRoom = rooms.filter((item) => {
          return item.number === found[i].roomNumber
        })

        currentData.innerHTML += `<div tabindex=${i} class="dataSeporator"><label class="currentDate2">${found[i].date}</label> <label class="currentRoomNumber2">Room  ${found[i].roomNumber}</label> <label class="currentPrice2">$ ${foundRoom[0].costPerNight.toFixed(2)}</label></div> `
        allTotals += foundRoom[0].costPerNight


      }
      currentTotal.innerHTML = `Total: $ ${allTotals.toFixed(2)}`


    })
    .catch(err => console.log(err));
}

// this is to accuses the rooms data
function checkForRooms() {
  Promise.all([
    roomsData(),
  ])
    .then(data => {
      rooms = data[0].rooms
    })
    .catch(err => console.log(err));
}

function filterForRooms() {
  const item = new Date(bookedDateInput.value)
  if(isNaN(item.getFullYear()) || isNaN(item.getMonth() + 1) || isNaN((item.getDate() + 1))){
    alert("need a proper date");
    return ;
  }
  var foundRoomType = [];

  if (roomTypeSelector.value === "allRoom") {
    foundRoomType = rooms
  } else {
    foundRoomType = rooms.filter((item) => {
      return item.roomType === roomTypeSelector.value
    })
  }
  currentAvailData.innerHTML = ''



  // comment this back to test for no rooms available
  // foundRoomType = []
  if (foundRoomType.length === 0) {
    currentAvailData.innerHTML = '<div class="alertNoRooms">We are so sorry, there are no rooms Available on that date.</div>'
  }

  for (let i = 0; i < foundRoomType.length; ++i) {

    currentAvailData.innerHTML += `
<div tabindex=${i} class="dataSeporator" onclick="selectedRoom( ${user.id}, ${foundRoomType[i].number}, ${item.getFullYear()}, ${item.getMonth() + 1}, ${item.getDate() + 1})" onkeypress="selectedRoom( ${user.id}, ${foundRoomType[i].number}, ${item.getFullYear()}, ${item.getMonth() + 1}, ${item.getDate() + 1})">
<label class="currentDate2">Room ${foundRoomType[i].number}</label> 
<label class="currentRoomNumber2">${foundRoomType[i].bedSize}</label> 
<label class="currentPrice2">$ ${foundRoomType[i].costPerNight.toFixed(2)}</label> 
</div>
`;
  }

}


checkForBookings()

