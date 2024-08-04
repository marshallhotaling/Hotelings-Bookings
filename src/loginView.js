import { customerData } from './calls/fetchCustomers.js';

export var user = {};
var loginButon = document.querySelector(".enterUserButton");
var loginPage = document.querySelector(".loginPage");
var loginInput = document.querySelector(".userNInput")
var dashBoard = document.querySelector(".dashBoard")
var homePage = document.querySelector(".homePage")


loginButon.addEventListener('click', showMainPage);

function showMainPage() {
  checkForUsar(loginInput.value);
}

function checkForUsar(name) {
  console.log("loginInput", name)
  Promise.all([
    customerData(),
  ])
    .then(data => {
      const found = data[0].customers.filter((item) => {
        return item.name === name
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

checkForUsar('aa')