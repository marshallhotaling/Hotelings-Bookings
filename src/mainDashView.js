var historyBookingsPage = document.querySelector(".historyBookingsPage")
var currentBookingsPage = document.querySelector(".currentBookingsPage")
var logOutButton = document.querySelector(".logOutButton")
var currentButton = document.querySelector(".currentButton")
var historyButton = document.querySelector(".historyButton")
var loginPage = document.querySelector(".loginPage")
var dashBoard = document.querySelector(".dashBoard")


logOutButton.addEventListener('click', logOut);



function logOut () {
  console.log('here')
  loginPage.classList.remove('hidden');
  dashBoard.classList.add('hidden');
}



