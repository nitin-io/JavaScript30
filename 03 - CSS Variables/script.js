const inputs = document.querySelectorAll(".controls input");
const elements = document.querySelector(":root");

function handleChange() {
  const suffix = this.dataset.sizing || "";
  elements.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach((input) => input.addEventListener("change", handleChange));
inputs.forEach((input) => input.addEventListener("mousemove", handleChange));

console.log(inputs);
