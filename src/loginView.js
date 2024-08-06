import { customerData } from './calls/fetchCustomers.js';
import { seperateName, seperateNumber, hasUser } from './sharedFunctions.js'


export var user = {};
var loginButon = document.querySelector(".enterUserButton");
var loginPage = document.querySelector(".loginPage");
var loginInput = document.querySelector(".userNInput")
var dashBoard = document.querySelector(".dashBoard")
var homePage = document.querySelector(".homePage")
var userPInput = document.querySelector(".userPInput")

loginButon.addEventListener('click', showMainPage);

function showMainPage() {
  checkHasUser(loginInput.value, userPInput.value);
}

function checkHasUser(name, password) {
  if (name === "" || password === "") {
    alert("username or password is incorrect ");
    return false;
  }
  // get numbers from username string
  const idNumber = seperateNumber(name)
  // remove numbers from username
  const username = seperateName(name, idNumber)
  // check for password match
  if (password !== "overlook2021" ) {
    alert("username or password is incorrect ");
    return false;
  }
  //check if user exists in DB
  Promise.all([
    customerData(),
  ])
    .then(data => {

      const doesHaveUser = hasUser(data, username)
      if (doesHaveUser !== false) {
        user = doesHaveUser[0]
        loginPage.classList.add('hidden');
        dashBoard.classList.remove('hidden');
        homePage.classList.remove('hidden');
      }
    })
    .catch(err => console.log(err));
}

// Enable this for testing flow without entering user each time
checkHasUser('Ruth Ebert44', "overlook2021")