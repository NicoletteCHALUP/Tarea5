import Kbot from "./kbot";

const nombre = document.querySelector("#nombre");
const form = document.querySelector("#kbot-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const kbot = new Kbot();

  div.innerHTML = "<p>" + kbot.saludar(nombre.value) + "</p>";
});
