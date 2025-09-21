const height = document.getElementById("height");
const weight = document.getElementById("weight");
const button = document.querySelector("form");
const display = document.getElementById("results");

button.addEventListener("submit", function (e) {
  e.preventDefault();
  const hi = parseFloat(height.value);
  const we = parseFloat(weight.value);

  if (height.value.trim() === "" || hi < 0 || isNaN(hi)) {
    display.innerHTML = "Please Enter Valid Height.";
    return;
  }
  if (weight.value.trim() === "" || we < 0 || isNaN(we)) {
    display.innerHTML = "Please Enter Valid Weight.";
    return;
  }
  const hi2 = hi / 100;
  const ans = (we / (hi2 * hi2)).toFixed(2);
  let declaration = "";
  if (ans < 18.6) declaration = "Under Weight";
  else if (ans >= 18.6 && ans <= 24.9) declaration = "Normal Range";
  else declaration = "Over Weight";
  display.innerHTML = `Your BMI Index is: ${ans} means ${declaration}`;
});
