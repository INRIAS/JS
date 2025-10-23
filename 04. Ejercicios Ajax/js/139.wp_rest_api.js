const d = document,
  w = window,
  $site = d.getElementById("site"),
  $posts = d.getElementById("posts"),
  $loader = d.querySelector(".loader"),
  $template = d.getElementById("post-template").content,
  cors = `https://api.allorigins.win/raw?url=`,
  DOMAIN = `${cors}https://css-tricks.com`,
  // DOMAIN = "https://malvestida.com",
  SITE = `${DOMAIN}/wp-json`,
  //https://css-tricks.com/wp-json
  API_WP = `${SITE}/wp/v2`,
  POSTS = `${API_WP}/posts?_embed`,
  PAGE = `${API_WP}/page`,
  CATEGORIES = `${API_WP}/categories`;

let page = 1,
  perPage = 5;

const getSiteData = async () => {
  try {
    let siteRes = await fetch(SITE),
      siteJson = await siteRes.json();

    if (!siteRes.ok)
      throw { status: siteRes.status, statusText: siteRes.statusText };
    console.log(siteJson);

    $site.innerHTML = `
        <h3>SITIO WEB</h3>
        <h2>
            <a href="${siteJson.url}" target="_blank">${siteJson.name}</a>
        </h2>
        <p>${siteJson.description}</p>
        <p>${siteJson.timezone_string}</p>
        `;
  } catch (err) {
    let message = err.statusText || "ha ocurrido un error";
    $site.innerHTML = `<p><b>Error ${err.status}: ${message}</b></p>`;
  }
};

const getPosts = async () => {
  $loader.computedStyleMap.display = "block";
  try {
    let postsRes = await fetch(`${POSTS}&page=${page}&per_page=${perPage}`),
        postsJson = await postsRes.json();

        if(!postsRes.ok) throw {status: postsRes.status, statusText: postsRes.statusText}
        
        // console.log(postsRes);
        console.log(postsJson);
        
  } catch (err) {
    let message = err.statusText || "ha ocurrido un error";
    $posts.innerHTML = `<p><b>Error ${err.status}: ${message}</b></p>`;
    $loader.style.display = "none";
  }
};

d.addEventListener("DOMContentLoaded", (e) => {
  getSiteData();
  getPosts();
});
