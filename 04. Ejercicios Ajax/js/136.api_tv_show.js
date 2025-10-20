const d = document,
  $shows = d.getElementById("shows"),
  $template = d.getElementById("show-template").content,
  $fragment = d.createDocumentFragment();

d.addEventListener("keypress", async (e) => {
  if (e.target.matches("#search")) {
    if (e.key === "Enter") {
      try {
        $shows.innerHTML = `<img class="loader" src="./assets/loader.svg" alt="loader">`;
        let query = e.target.value.toLowerCase(),
          api = `https://api.tvmaze.com/singlesearch/shows?q=${query}`,
          res = await fetch(api),
          json = await res.json();

        console.log(api, res, json);

        if (!res.ok) throw { status: res.status, statusText: res.statusText };

        if (json.length === 0) {
          $shows.innerHTML = `<h3>la busqueda solicitada <mark>${query}</mark> no se encuentra en sistema</h3>`;
        } else {
          json.forEach((el) => {
            $template.querySelector("h3").textContent = el.show.name;
            $template.querySelector("div").innerHTML = el.summary ? el.summary : "<b>Sin descripción</b>";
            $template.querySelector("img").src = el.show.image.medium ? el.show.image.medium : "http://static.tvmaze.com/images/no-img/no-img-portrait-text.png";
            $template.querySelector("img").alt = el.name;
            $template.querySelector("img").style.maxWidth = "100%";
            $template.querySelector("a").href = el.url ? el.url : "#";
            $template.querySelector("a").target = el.url ? "_blank" : "_self";
            $template.querySelector("a").target = el.url ? el.url : "Ver mas...";
                        

            let $clone = d.importNode($template, true);
            $fragment.appendChild($clone);
          });
          $shows.innerHTML = "";
          $shows.appendChild($fragment);
        }
      } catch (err) {
        let message = err.statusText || "Se ha causado un error";
        $shows.innerHTML = `<p><b>Error ${err.status} : ${message}</b></>`;
      }
    }
  }
});
