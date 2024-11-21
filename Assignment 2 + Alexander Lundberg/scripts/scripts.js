//Assignment 2a:
box1 = document.getElementById("XOXO")
{
  for (let i = 0; i < 10; i++) {
    if (i === 4) box1.innerHTML += "Q";
    else if (i % 2 === 0) box1.innerHTML += "O";
    else box1.innerHTML += "X";
  }
}

document.writeln("<br></br>");

//Assignment 2b:
box2 = document.getElementById("randomO")
{
  for (let i = 0; i < 20; i++) {
    let randomSpace = Math.floor(Math.random() * 5) + 1;
    let spaces = "&nbsp;".repeat(randomSpace);
    box2.innerHTML += ("O" + spaces);
  }
}

//Assignment 2c:

let cityNames = ["kiruna", "uppsala", "malmo", "gothenburg", "stockholm"];
cityNames.forEach((word) => {
  let capital = word.charAt(0).toUpperCase() + word.slice(1);
  let letters = capital.split("");
  letters.forEach((letter) => {
    console.log(letter);
  });
});
