// console.log("Connected to js");

let btn = document.getElementById("btn");
let input = document.getElementById("std-name");
let ul = document.getElementById("std-list");

// function addStd() {
//   console.log("Button Clicked");
// }

const addStd = () => {
  console.log("Button Clicked");
};

// btn.addEventListener("click", addStd);
btn.addEventListener("click", () => {
  //   console.log("Button Clicked");
  let li = document.createElement("li");
  li.textContent = input.value;
  ul.appendChild(li);
});
