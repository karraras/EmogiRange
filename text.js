let color = {
  four: "#ffeb3b",
  three: "#ffc107",
  two: "#ff9800",
  one: "#ff5722",
};

let input = document.querySelector("#range");
let images = document.querySelectorAll("img");
range(0);
window.oninput = function () {
  let value = parseInt(input.value);
  images.forEach((img) => {
    img.style.display = "none";
  });
  range(value);
};
function range(value) {
  if (value < 25) {
    document.querySelector(".one").style.display = "block";
    document.querySelector("body").style.background = `${color.one}`;
  } else if (value > 25 && value < 50) {
    document.querySelector(".two").style.display = "block";
    document.querySelector("body").style.background = `${color.two}`;
  } else if (value > 50 && value < 75) {
    document.querySelector(".three").style.display = "block";
    document.querySelector("body").style.background = `${color.three}`;
  } else {
    document.querySelector(".four").style.display = "block";
    document.querySelector("body").style.background = `${color.four}`;
  }
}
