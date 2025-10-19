const d = document,
  $main = d.querySelector("main");

fetch("./assets/133.MarkDown.md")
  .then((res) => {
    return res.ok ? res.text() : Promise.reject(res);
  })
  .then((text) => {
    console.log(text);
    $main.innerHTML = new showdown.Converter().makeHtml(text);
    //new showdown linea para convertir el texto md en html
  })
  .catch((err) => {
    let message = err.statusText || "HA ocurrido un error";
    $main.innerHTML = `<p><b>Error ${err.status}: ${message}</b></p>`;
  });
