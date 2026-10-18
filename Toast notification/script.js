const success = document.querySelector("#suc-btn");
const error = document.querySelector("#error");
const invalid = document.querySelector("#invalid");
const main = document.querySelector("main");

function show(msg) {
  console.log(`${msg} is clicked`);

  const toast = document.createElement("div");
  toast.setAttribute("class", "toast");
  const div = document.createElement("div");
  div.setAttribute("class", "toast-msg");
  const p = document.createElement("p");
  p.textContent = msg;

  main.append(toast);
  toast.append(div);
  div.append(p);
}

success.addEventListener("click", () => {
  console.log("clicked");
  show("successfully added");
});
error.addEventListener("click", () => {
  console.log("clicked");
  show("error detected");
});
invalid.addEventListener("click", () => {
  console.log("clicked");
  show("invalid ");
});