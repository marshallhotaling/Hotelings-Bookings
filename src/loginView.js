import { customerData } from './calls/fetchCustomers.js';

var loginButon = document.querySelector(".enterUserButton");
var loginPage = document.querySelector(".loginPage");
var loginInput = document.querySelector(".userNInput")
var dashBoard = document.querySelector(".dashBoard")

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
      const found = data.filter((x) => x.customers.some((y) => y.name === name));
      if (found.length > 0) {
        loginPage.classList.add('hidden');
        dashBoard.classList.remove('hidden');
      }
    })
    .catch(err => console.log(err));
}

