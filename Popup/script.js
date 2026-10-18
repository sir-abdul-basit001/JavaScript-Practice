console.log("Lets Write Some Logic");

let btn = document.querySelector("#submit");
let okbtn = document.querySelector("#okbtn");
console.log(btn);
console.log(okbtn);
let form = document.querySelector("form");

btn.addEventListener("click", () => {
  console.log("Btn is clicked");
  btn.remove("close");
  form.classList.remove("close");
});
okbtn.addEventListener("click", () => {
  console.log("okBtn is clicked");
  btn.add("close");
  form.classList.add("close");
});
