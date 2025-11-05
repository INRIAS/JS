import { ajax } from "../helpers/ajax.js";
import API from "../helpers/wp_api.js";
import { PostCard } from "./PostCard.js";

const d = document;
export function Router() {
  const d = document,
    w = window;
  let { hash } = location;
  console.log(hash);

  if (!hash || hash === "#/") {
    ajax({
      url: API.POSTS,
      cbSuccess: (posts) => {
        //   console.log(posts);b
        let html = "";
        posts.forEach((post) => (html += PostCard(post)));
        d.querySelector(".loader").style.display = "none";
        d.getElementById("posts").innerHTML = html;
      },
    });
  } else if (hash.includes("search")) {
    d.getElementById("posts").innerHTML = `<h2>Seccion search</h2>`;
  } else if (hash.includes("#/contacto")) {
    d.getElementById("posts").innerHTML = `<h2>Seccion contacto</h2>`;
  }
}
