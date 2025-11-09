import { ajax } from "../helpers/ajax.js";
import API from "../helpers/wp_api.js";
import { Post } from "./Post.js";
import { PostCard } from "./PostCard.js";

const d = document;
export async function Router() {
  const d = document,
    w = window;
  let $main = d.getElementById("main");

  let { hash } = location;
  console.log(hash);

  $main.innerHTML = null;

  if (!hash || hash === "#/") {
    await ajax({
      url: API.POSTS,
      cbSuccess: (main) => {
        //   console.log(main);b
        let html = "";
        main.forEach((post) => (html += PostCard(post)));
        d.getElementById("main").innerHTML = html;
      },
    });
  } else if (hash.includes("search")) {
    d.getElementById("main").innerHTML = `<h2>Seccion search</h2>`;
  } else if (hash.includes("#/contacto")) {
    d.getElementById("main").innerHTML = `<h2>Seccion contacto</h2>`;
  } else {
    await ajax({
      url: `${API.POST}/${localStorage.getItem("wpPostId")}`,
      cbSuccess: (post) => {
        //   console.log(main);b
        $main.innerHTML=Post(post)
      },
    });
  }
  d.querySelector(".loader").style.display = "none";
}
