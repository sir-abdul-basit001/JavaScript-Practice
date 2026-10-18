console.log("Let's Write JAVA-SCRIPT");
let inp = document.querySelector("#inp");
let addbtn = document.querySelector("#add-btn");
let list = document.querySelector(".list");
let span = document.createElement("span");
let li = document.createElement("li");

addbtn.addEventListener("click", function addtsk() {
  if (inp.value === "") {
    alert("You must enter Something to add");
  } else {
    span.textContent = "X";
    li.textContent = inp.value;
    li.appendChild(span);
    let color = Math.random() * 10;
    if (color > 5) {
      li.style.backgroundColor = "#16c6ab";
    } else if ((color = 5)) {
      li.style.backgroundColor = "wheat";
    } else {
      li.style.backgroundColor = "#b4e4fb";
    }

    list.append(li);
  }
});
span.addEventListener("click", () => {
  list.removeChild(li);
});
// list.addEventListener("click", () => {
//   console.log("List is clicked");
//   list.style.textDecoration = "line-throgh";
// });
