const d = document;

export default function contactFormValidations() {
  const $form = d.querySelector(".contact-form"),
    $inputs = d.querySelectorAll(".contact-form [required]");

  $inputs.forEach((input) => {
    const $span = d.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("contact-form-error", "none");
    input.insertAdjacentElement("afterend", $span);
  });

  d.addEventListener("keyup", (e) => {
    if (e.target.matches(".contact-form [required]")) {
      let $input = e.target,
        pattern = $input.pattern || $input.dataset.pattern;
      if (pattern && $input.value !== "") {
        let regexp = new RegExp(pattern);
        return !regexp.exec($input.value)
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }
      if (!pattern) {
        return $input.value === ""
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }
    }
  });

  d.addEventListener("submit", async (e) => {
    e.preventDefault();
    alert("Enviando Formulario");

    const $loader = d.querySelector(".contact-form-loader"),
      $response = d.querySelector(".contact-form-response");


      $loader.classList.remove("none");

      try {
        let res = await fetch("https://formsubmit.co/inrias898@gmail.com",{
            method:"POST",
            body: new FormData(e.target)
        }),

        json = await res.json();
        console.log(json);
        
        if (!res.ok) throw {status:res.status, statusText:res.statusText};
        
        $loader.classList.add("none");
        $response.classList.remove("none");
        $response.innerHTML=`<p>${json.message}}</p>`
        $form.reset();
        console.log(json);
      } catch (err) {
        console.log(err);
        
        let message = err.statusText || "Ha ocurrido un error al enviar";
      $response.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
      }finally{
        setTimeout(() => {
            $response.innerHTML="";
            $response.classList.add("none");
        }, 3000);
      }
  });
}
