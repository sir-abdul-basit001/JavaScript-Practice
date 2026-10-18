console.log("Let's Write Java-Script");
let h2 = document.querySelector("h2");

setInterval(() => {
  let Color = ["red", "green", "white", "yellow", "pink", "black"];
  let num = Math.floor(Math.random() * Color.length);
  h2.style.color = Color[num];
}, 1000);

let hr = document.querySelector("#hr");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");

setInterval(() => {
  let Now = new Date();
  hr.textContent = Now.getHours();
  min.textContent = Now.getMinutes();
  sec.textContent = Now.getSeconds();
}, 1000);
