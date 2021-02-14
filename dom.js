const colors = [
  "#eb4034",
  "#705654",
  "#e6ba0b",
  "#0be6af",
  "#ebe709",
  "#7f4780",
  "#ba0956",
  "#1a169c",
  "#167b9c",
  "#e36912"
];

function printIds() {
  for (let i = 0; i < rectangles.length; i++) {
    console.log(rectangles[i].id);
  }
}

window.onload = function() {
  console.log("Here are the rectangles IDs");
  printIds();
};
const rectangles = document.querySelectorAll(".rectangle");
for (let i = 0; i < colors.length; i++) {
  //   window.onload = (function() {
  //     console.log(rectangles[i].id);
  //   })(i);
  let par = document.createElement("p");
  par.style.color = colors[i];
  par.innerHTML = colors[i];
  let body = rectangles[i].parentNode;
  body.insertBefore(par, rectangles[i].nextSibling);
  rectangles[i].style.cssText = "background-color:" + colors[i];
}

const rectangleWrapper = document.getElementById("rectangleWrapper");
rectangleWrapper.style.cssText = "padding: 50px 50px 0px 50px";
