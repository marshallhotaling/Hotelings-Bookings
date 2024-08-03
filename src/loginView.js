import { customerData } from './customers.js';

var loginButon = document.querySelector(".enterUserButton");
var loginPage = document.querySelector(".loginPage");
var loginInput = document.querySelector(".userInput")

loginButon.addEventListener('click', showMainPage);



function showMainPage() {
  checkForUsar(loginInput.value);
  // loginPage.classList.add('hidden');
}

function checkForUsar(name) {
  console.log("loginInput", name)
  Promise.all([
    customerData(),
  ])
    .then(data => {
      console.log(data)
      
    })
    .catch(err => console.log(err));
}

