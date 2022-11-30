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
  localStorage.setItem(userObj.name, serializedUserObj);
  
     
}
