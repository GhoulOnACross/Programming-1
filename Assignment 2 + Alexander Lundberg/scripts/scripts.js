//Assignment 2a:

{
  for (let i = 0; i < 10; i++) {
    if (i === 4) document.write("Q");
    else if (i % 2 === 0) document.write("O");
    else document.write("X");
  }
}

document.writeln("<br></br>");

//Assignment 2b:

{
  for (let i = 0; i < 20; i++) {
    let randomSpace = Math.floor(Math.random() * 5) + 1;
    let spaces = "&nbsp;".repeat(randomSpace);
    document.write("O" + spaces);
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
