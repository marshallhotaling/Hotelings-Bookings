import { customerData } from './calls/fetchCustomers.js';

export var user = {};
var loginButon = document.querySelector(".enterUserButton");
var loginPage = document.querySelector(".loginPage");
var loginInput = document.querySelector(".userNInput")
var dashBoard = document.querySelector(".dashBoard")
var homePage = document.querySelector(".homePage")
var userPInput = document.querySelector(".userPInput")

loginButon.addEventListener('click', showMainPage);

function showMainPage() {
  console.log(loginInput.value, userPInput.value)
  checkHasUser(loginInput.value, userPInput.value);
}

function seperateName(name, numb) {
  return name.replace(numb, '');
}

function seperateNumber(name) {
  var numb = name.match(/\d/g);
  return numb.join("");
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
      const found = data[0].customers.filter((item) => {
        return item.name === username
      })
      if (found.length > 0) {
        user = found[0]
        loginPage.classList.add('hidden');
        dashBoard.classList.remove('hidden');
        homePage.classList.remove('hidden');
        return true;
      }
      return false
    })
    .catch(err => console.log(err));
}

// Enable this for testing flow without entering user each time
checkHasUser('Ruth Ebert44', "overlook2021")