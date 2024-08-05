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
  checkForUsar(loginInput.value, userPInput.value);
}

function checkForUsar(name, password) {
  // get numbers from username string
  var numb = name.match(/\d/g);
  numb = numb.join("");
  // remove numbers from username
  const username = name.replace(numb, '');
  // check for password match
  if (password !== "overlook2021" ) {
    alert("username or password is incorrect ");
    return;
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
      }
    })
    .catch(err => console.log(err));
}

// Enable this for testing flow without entering user each time
// checkForUsar('Ruth Ebert44', "overlook2021")