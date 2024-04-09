const namnbtn = document.querySelector("#namnbtn");
let text;

namnbtn.addEventListener("click", (event) => {
  event.preventDefault();

  text = document.querySelector("#inputtext").value;
  dittnamn.innerText = text;

  
  console.log("namnet");  
});

const array = ["Rock", "Scissor", "Paper"];
const datornsval = document.querySelector("#datornsvapen");
const scores = document.querySelector("#scores");

let datornspoäng = 0;
let spealrespoäng = 0;
console.log(datornspoäng, spealrespoäng);

//spelaren väljer sten
const stenbtn = document.querySelector("#stenbtn");
stenbtn.addEventListener("click", (event) => {
  const valtvapen = document.querySelector("#valtvapen");
  valtvapen.innerText = "You chose: Rock";

  let datorval = Math.floor(Math.random() * array.length);
  console.log(array[datorval]);
  datornsval.innerText = "Computer chose: " + array[datorval];

  if (datorval == 0) {
    console.log("oavgjort");
  } else if (datorval == 1) {
    console.log("spelare får poäng");
    spealrespoäng++;
    console.log(datornspoäng, spealrespoäng);
  } else {
    console.log("datorn får poäng");
    datornspoäng++;
    console.log(datornspoäng, spealrespoäng);
  }

  scores.innerText =
    "Your points: " + spealrespoäng +" Computers points: " + datornspoäng;
  checkWinner();
});

//spelaren väljer sax
const saxbtn = document.querySelector("#saxbtn");
saxbtn.addEventListener("click", (event) => {
  const valtvapen = document.querySelector("#valtvapen");
  valtvapen.innerText = "You chose: Scissor";

  let datorval = Math.floor(Math.random() * array.length);
  console.log(array[datorval]);
  datornsval.innerText = "Computer chose: " + array[datorval];

  if (datorval == 0) {
    console.log("datorn får poäng");
    datornspoäng++;
    console.log(datornspoäng, spealrespoäng);
  } else if (datorval == 1) {
    console.log("oavgjort");
  } else {
    console.log("spelare får poäng");
    spealrespoäng++;
    console.log(datornspoäng, spealrespoäng);
  }
  scores.innerText =
  "Your points: " + spealrespoäng + " Computers points: " + datornspoäng;
  checkWinner();
});

//spelaren väljer papper
const papperbtn = document.querySelector("#papperbtn");
papperbtn.addEventListener("click", (event) => {
  const valtvapen = document.querySelector("#valtvapen");
  valtvapen.innerText = "You chose: Paper";

  let datorval = Math.floor(Math.random() * array.length);
  console.log(array[datorval]);
  datornsval.innerText = "Computer chose: " + array[datorval];

  if (datorval == 0) {
    console.log("spelare får poäng");
    spealrespoäng++;
    console.log(datornspoäng, spealrespoäng);
  } else if (datorval == 1) {
    console.log("datorn får poäng");
    datornspoäng++;
    console.log(datornspoäng, spealrespoäng);
  } else {
    console.log("oavgjort");
  }
  scores.innerText =
  "Your points: " + spealrespoäng + " Computers points: " + datornspoäng;
  checkWinner();
});

//Meddela vinnaren

function checkWinner() {
  console.log(datornspoäng, spealrespoäng + " inne i function");
  const vinnareEl = document.querySelector('#vinnare')
  

  if (spealrespoäng == 3){
  vinnareEl.innerText = "Winner: " + text}


  else if (datornspoäng == 3){
     vinnareEl.innerText = "Winner: computer";}

}
