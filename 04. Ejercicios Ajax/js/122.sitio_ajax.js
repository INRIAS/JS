const d = document,
  $main = d.querySelector("main");

const getHTML = (options) => {
  let { url, success, error } = options;
  const xhr = new XMLHttpRequest();

  xhr.open("GET", url);
  xhr.setRequestHeader("Content-type", "text/html; charset=utf-8");

  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;

    if (xhr.status >= 200 && xhr.status < 300) {
      console.log(xhr);

      let html = xhr.responseText;
      console.log(html);
      success(html);
    } else {
      let message = xhr.statusText || "ha ocurrido un error";
      error(`Error ${xhr.status}: ${message}`);
    }
  });
  xhr.send();
};

d.addEventListener("DOMContentLoaded", (e) => {
  getHTML({
    url: "./assets/122.home.html",
    success: (html) => {
      $main.innerHTML = html;
    },
    error: (err) => {
      $main.innerHTML = `<h1>${err}</h1>;`;
    },
  });
});

d.addEventListener("click", (e) => {
  if (e.target.matches(".menu a")) {
    e.preventDefault();

    getHTML({
      url: e.target.href,
      success: (html) => {
        $main.innerHTML = html;
      },
      error: (err) => {
        $main.innerHTML = `<h1>${err}</h1>;`;
      },
    });
  }
});
