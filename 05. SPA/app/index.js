import api from "./helpers/wp_api.js";
import App from "./App.js";

document.addEventListener("DOMContentLoaded", () => {
  api.page = 1;
  App();
});
window.addEventListener("hashchange", App);
