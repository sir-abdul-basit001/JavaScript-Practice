console.log("Lets Write JAVA-SCRIPt");
let inp = document.querySelector("input");
let btn = document.querySelector("button");
let showPass = () => {
  if (inp.type == "password") {
    inp.type = "text";
    btn.style.backgroundColor = "green";
    btn.textContent = "Hide";
  } else {
    inp.type = "password";
    btn.style.backgroundColor = "red";
    btn.textContent = "Show";
  }
};

btn.addEventListener("click", showPass);
