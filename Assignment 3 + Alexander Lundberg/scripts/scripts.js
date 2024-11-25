const cat = {
  alive: Math.random() < 0.5,
  name: "Gustav",
};

let button = document.getElementById("kitty");
button.addEventListener("click", function () {
  const status = cat.alive 
    ? cat.name + " is alive!" 
    : cat.name + " is dead :(";
  alert(status);
});
