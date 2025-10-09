document.addEventListener("DOMContentLoaded", (e) => {
  const getIncludeHtml = (el, url) => {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", (e) => {
      if (xhr.readyState !== 4) return;

      if (xhr.status >= 200 && xhr.status < 300) {
        // console.log(xhr);
        //InnerHtml inserta dentro de la etiqueta seleccionada
        //OuterHTML reemplaza y e inserta codigo en la etiqueta seleccionada
        el.outerHTML = xhr.response;
        console.log(el.outerHTML);
      } else {
        let message =
          xhr.statusText || "Error al cargar el archivo, verificar la peticion";
        el.outerHTML = `<div><p>Error ${xhr.status} : ${message}</p></div>`;
      }
    });
    xhr.open("GET", url);
    xhr.setRequestHeader("Content-type", "text/html; charset=utf-8");
    xhr.send();
  };

  document
    .querySelectorAll("[data-include]")
    .forEach((el) => getIncludeHtml(el, el.getAttribute("data-include")));
});
