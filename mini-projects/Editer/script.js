console.log("Lets Make Some Logic");
const filtersDiv = document.querySelector(".filters");
const inp = document.querySelector("#img-select");

let filters = {
  brightness: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%",
  },
  contrast: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%",
  },
  exposure: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%",
  },
  saturation: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%",
  },
  hueRotation: {
    value: 0,
    min: 0,
    max: 360,
    unit: "deg",
  },
  blur: {
    value: 0,
    min: 0,
    max: 20,
    unit: "px",
  },
  grayscale: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%",
  },
  sepia: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%",
  },
  opacity: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%",
  },
  invert: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%",
  },
};
const Canvas = document.querySelector("canvas");
const canvasCTx = Canvas.getContext("2d");

function CreateFilter(name, unit = "%", value, min, max) {
  const div = document.createElement("div");
  div.classList.add("filter");
  const p = document.createElement("p");
  p.textContent = name;
  const input = document.createElement("input");
  input.type = "range";
  input.min = min;
  input.max = max;
  input.value = value;
  input.id = name;

  div.append(p);
  div.append(input);

  return div;
}

Object.keys(filters).forEach((key) => {
  const filterEl = CreateFilter(
    key,
    filters[key].unit,
    filters[key].value,
    filters[key].min,
    filters[key].max,
  );
  // console.log(filterEl);
  filtersDiv.append(filterEl);
});

inp.addEventListener("change", (evt) => {
  // console.log("Fired");
  const file = evt.target.files[0];
  // console.dir(file);
  let img = new Image();
  img.src = URL.createObjectURL(file);
  img.onload = () => {
    Canvas.width = img.width;
    Canvas.height = img.height;
    canvasCTx.drawImage(img, 0, 0);
  };
});
