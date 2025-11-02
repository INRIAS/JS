import { ajax } from "../helpers/ajax.js";
import API from "../helpers/wp_api.js";
import { PostCard } from "./PostCard.js";

const d = document;
export function Router() {
  const d = document,
    w = window;
  let { hash } = location;
  console.log(hash);

  ajax({
    url: API.POSTS,
    cbSuccess: (posts) => {
    //   console.log(posts);
      let html = "";
      posts.forEach((post) => (html += PostCard(post)));
      d.querySelector(".loader").style.display = "none";
      d.getElementById("posts").innerHTML = html;
    },
  });
}
