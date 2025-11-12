import { PostCard } from "../components/PostCard.js";
import { SearchCard } from "../components/SearchCard.js";
import { ajax } from "./ajax.js";
import API from "./wp_api.js";

export async function InfiniteScroll() {
  const d = document,
    w = window;

  let query = localStorage.getItem("wpSearch"),
    apiURL,
    Component; //HOC

  w.addEventListener("scroll", async (e) => {
    let { scrollTop, clientHeight, scrollHeight } = d.documentElement,
      { hash } = w.location;

    if (scrollTop + clientHeight >= scrollHeight) {
      API.page++;
    }

    if (!hash || hash === `#/`) {
      apiURL = `${API.POSTS}&page=${API.page}`;
      Component = PostCard;
    } else if (hash.includes("#/search")) {
      apiURL = `${API.SEARCH}${query}&page=${API.page}`;
      Component = SearchCard;
    } else {
      return false;
    }

    d.querySelector(".loader").style.display = "block";

    await ajax({
      url: apiURL,
      cbSuccess: (posts) => {
        console.log(posts);
        let html;
        posts.forEach((post) => {
          html += Component(post);
        });
        d.getElementById("main").insertAdjacentHTML("beforeend", html);
        d.querySelector(".loader").style.display = "none";
      },
    });
  });
}
