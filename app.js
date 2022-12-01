let inputForm = document.getElementById("input-form");

inputForm.addEventListener("submit", submitFn);

function submitFn(e)
{
 e.preventDefault();
  let uName = document.getElementById("user-name").value;
  let uEmail = document.getElementById("user-email").value;
  let uPh = document.getElementById("user-phone").value;
  let uDate = document.getElementById("date-call").value;
  let uTime = document.getElementById("time-call").value;
 let userObj = {
   name: uName,
   phone: uPh,
   emailId: uEmail,
      date: uDate,
     time: uTime,
 };
  
  let serializedUserObj = JSON.stringify(userObj);
  localStorage.setItem(userObj.uEmail, serializedUserObj);
}

window.addEventListener("DOMContentLoaded", showUser)

function showUser(e)
{
  e.preventDefault();
  
  
 
  Object.keys(localStorage).forEach((key) => 
                                    {
    let strngDetails = localStorage.getItem(key);
    let detailsOfUser = JSON.parse(strngDetails);
    
    let userOnScreen = document.createElement("p");
    userOnScreen.appendChild(document.createTextNode(`${key.name}  ${key.phone} ${key.emailId}`));
                            
  document.querySelector("div").appendChild(userOnScreen);   
    });
}

