console.log("Lets Write some java script");

let NewTask = document.querySelector("#addbtn");
let count = document.querySelectorAll(".count");
console.log(count);

let bg = document.querySelector(".bg");
let task = document.querySelector(".task");
let taskHeading = document.querySelector(".abt-task");
let discp = document.querySelector(".dicp");

let inp = document.querySelector("input");
let textarea = document.querySelector("#textarea");
let addbtn = document.querySelector("#add");
let cancelbtn = document.querySelector("#cancel");

// Creating Elements
let div = document.createElement("div");
div.classList.add("task");
div.setAttribute("draggable", "true");
let AboutTask = document.createElement("div");
AboutTask.classList.add("abt-task");
let h2 = document.createElement("h2");

let p = document.createElement("p");
p.setAttribute("class", "dicp");

let btndiv = document.createElement("div");
let DeleteTask = document.createElement("button");
DeleteTask.setAttribute("id", "delete-task");
let colom = document.querySelector(".colom");

NewTask.addEventListener("click", () => {
  bg.classList.toggle("active");
});

function CreateNewTask() {
  h2.textContent = inp.value;
  p.textContent = textarea.value;
  DeleteTask.textContent = "Delete";

  colom.append(div);
  div.append(AboutTask);
  AboutTask.append(h2);
  AboutTask.append(p);
  div.append(btndiv);
  btndiv.append(DeleteTask);

  counter++;
  console.log(counter);
  count.textContent = counter;
  attachDragEvents(div);

  DeleteTask.addEventListener("click", () => {
    div.remove();
    AboutTask.remove();
    h2.remove();
    p.remove();
    btndiv.remove();
    DeleteTask.remove();
  });
}
inp.addEventListener("input", () => {
  taskHeading.innerHTML = inp.value;
});
textarea.addEventListener("input", () => {
  discp.innerHTML = textarea.value;
});
addbtn.addEventListener("click", (e) => {
  if (inp.value == "" && textarea.value == "") {
    alert("To add task You must conplete Task Name and Task Description");
  } else {
    CreateNewTask();
  }

  bg.classList.toggle("active");
  inp.value = "";
  textarea.value = "";
});
cancelbtn.addEventListener("click", () => {
  bg.classList.toggle("active");
});

//cloud

let draggedItem = null;
let counter = 0;

function attachDragEvents(div) {
  div.addEventListener("dragstart", () => {
    draggedItem = div;
    div.classList.add("dragging");
  });

  div.addEventListener("dragend", () => {
    div.classList.remove("dragging");
    draggedItem = null;
  });
}

function attachContainerDropEvents(colom) {
  colom.addEventListener("dragover", (e) => {
    colom.classList.add("hover");
    e.preventDefault(); // required to allow dropping
    console.log("fired");
  });

  colom.addEventListener("dragenter", (e) => {
    e.preventDefault();
  });
  colom.addEventListener("dragleave", () => {
    colom.classList.remove("hover");
  });

  colom.addEventListener("drop", (e) => {
    colom.classList.remove("hover");
    e.preventDefault();
    if (draggedItem) {
      colom.appendChild(draggedItem);
      draggedItem = null;
    }
  });
}

// Setup — apply to every task card and every column
document.querySelectorAll(".task").forEach(attachDragEvents);
document.querySelectorAll(".colom").forEach(attachContainerDropEvents);
