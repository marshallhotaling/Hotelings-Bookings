var historyBookingsPage = document.querySelector(".historyBookingsPage")
var currentBookingsPage = document.querySelector(".currentBookingsPage")
var logOutButton = document.querySelector(".logOutButton")
var currentButton = document.querySelector(".currentButton")
var historyButton = document.querySelector(".historyButton")
var loginPage = document.querySelector(".loginPage")
var dashBoard = document.querySelector(".dashBoard")
var BookingButton = document.querySelector(".BookingButton")
var bookingPage = document.querySelector(".bookingPage")
logOutButton.addEventListener('click', logOut);
historyButton.addEventListener("click", PastSwitch)
currentButton.addEventListener("click", CurrentSwitch)
BookingButton.addEventListener("click",bookingSwitch)
function logOut () {
  console.log('here')
  loginPage.classList.remove('hidden');
  dashBoard.classList.add('hidden');
  bookingPage.classList.add("hidden")
}
function PastSwitch ()  {
  currentBookingsPage.classList.add("hidden")
  historyBookingsPage.classList.remove("hidden")
  bookingPage.classList.add("hidden")

}
function CurrentSwitch() {
  historyBookingsPage.classList.add("hidden")
  currentBookingsPage.classList.remove("hidden")
  bookingPage.classList.add("hidden")
}
function bookingSwitch() {
  historyBookingsPage.classList.add("hidden")
  currentBookingsPage.classList.add("hidden")
  bookingPage.classList.remove("hidden")
}





