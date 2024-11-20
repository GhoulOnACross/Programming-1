numberInput = document.getElementById("numberInput");
enterBtn = document.getElementById("enterBtn");
vipBox = document.getElementById("vipBox");

enterBtn.addEventListener("click", function () {
  let age = parseInt(numberInput.value);
  let vip = vipBox.checked;
  if (vip) 
    alert("Welcome by best VIP customer :)");
   else if (age >= 18) 
    alert("Access granted");
   else 
    alert("Access denied");
  
});

let vip = false;
let age = 17;
