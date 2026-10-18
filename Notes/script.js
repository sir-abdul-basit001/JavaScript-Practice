console.log("Lets Write Java script");

let cbtn = document.querySelector("#btn");
let container = document.querySelector(".container");

function notes() {
  let div = document.createElement("div");
  div.setAttribute = ("id", "inp");
  let textarea = document.createElement("textarea");
  textarea.className = "input-box";
  let dbtn = document.createElement("button");
  dbtn.innerHTML = "Delete";
  dbtn.style.color = "black";

  container.appendChild(div);
  div.appendChild(textarea);
  div.appendChild(dbtn);
  console.log("FNC is executing...");
  dbtn.addEventListener("click", () => {
    dbtn.parentElement.remove();
    console.log("Delete btn is clicked");
  });
}

cbtn.addEventListener("click", notes);
