export function ContactForm() {
  const d = document,
    $form = d.createElement("form"),
    $styles = d.getElementById("dynamic-styles");

  $form.classList.add("contact-form");

  $styles.innerHTML = `
  :root {
    --main-font: sans-serif;
    --font-size: 16px;
    --main-color: #f7df1e;
    --second-color: #222;
    --main-modal-color: rgba(222, 247, 30, 0.85);
    --second-modal-color: rgba(34, 34, 34, 0.85);
    --container-width: 1200px;
    --light-color: #f0f0f0;
    --dark-color: #222;
}

/* ----------Reset CSS */
html {
  box-sizing: border-box;
  font-family: var(--main-font);
  font-size: var(--font_size);
  scroll-behavior: smooth;
  /* Navegar entre secciones */
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  margin: 0;
  overflow-x: hidden;
  /*ocultar barra de desplazamiento en horizontal cuando se desborde*/
}

img {
  max-width: 100%;
  height: auto;
}

/*--------------VALIDACIÓN FORMULARIO----------*/

main h2{
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.contact-form {
  --form-ok-color: #4caf50;
  --form-error-color: #f44336;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
}

/*  >Todos los hijos directos de
  * Todos los selectores */
.contact-form>* {
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 100%;
}

.contact-form textarea {
  resize: none;
}

.contact-form legend,
.contact-form-response {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;

}

.contact-form input,
.contact-form textarea {
  font-size: 1rem;
  font-family: sans-serif;
}

.contact-form input[type="submit"] {
  width: 50%;
  font-weight: bold;
  cursor: pointer;
}

.contact-form *::placeholder {
  color: #535353;
}

.contact-form [required]:valid {
  border: thin solid var(--form-ok-color);
}

.contact-form [required]:invalid {
  border: thin solid var(--form-error-color);
}

.contact-form-error {
  margin-top: -1rem;
  font-size: 80%;
  background-color: var(--form-error-color);
  color: #fff;
  transition: all 800ms ease;
}

.contact-form-error.is-active {
  display: block;
  animation: show-message 1s 1 normal 0s ease-out both;
}

.contact-form-loader{
    display: flex;
  justify-content: center;
  align-items: center;
}

.none {
  display: none;
}

@keyframes show-message {
  0% {
      visibility: hidden;
      opacity: 0;
  }

  100% {
      visibility: visible;
      opacity: 1;
  }
}
  `;

  $form.innerHTML = `
    <legend>Envianos tus comentarios</legend>
          <input
            type="text"
            name="name"
            placeholder="Escribe tu nombre"
            title="El nombre solo acepta letras y espacios en blanco"
            required
            pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$"
          /><!-- mensajes en los navegadores -->
          <input
            type="email"
            required
            name="email"
            placeholder="Escribe tu email"
            title="Email incorrecto"
            pattern="^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$"
          />
          <input
            type="text"
            name=" subject"
            placeholder="Asunto a tratar"
            title="El asunto es requerido"
            required
          />
          <textarea
            name="comments"
            cols="50"
            rows="5"
            placeholder="Escribe tus comentarios"
            title="Tu comentario no debe exceder los 255 caracteres"
            data-pattern="^.{1,255}$"
            required
          ></textarea>
          <input type="submit" value="Enviar" />
          <div class="contact-form-loader none">
            <img src="./app/assets/loader.svg" alt="loader" />
          </div>
          <div class="contact-form-response none">
            <p>Los datos han sido enviados</p>
          </div>
    `;

  function validationsForm() {
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
        let res = await fetch("https://formsubmit.co/inrias898@gmail.com", {
            method: "POST",
            body: new FormData(e.target),
          }),
          json = await res.json();
        console.log(json);

        if (!res.ok) throw { status: res.status, statusText: res.statusText };

        $loader.classList.add("none");
        $response.classList.remove("none");
        $response.innerHTML = `<p>${json.message}}</p>`;
        $form.reset();
        console.log(json);
      } catch (err) {
        console.log(err);

        let message = err.statusText || "Ha ocurrido un error al enviar";
        $response.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
      } finally {
        setTimeout(() => {
          $response.innerHTML = "";
          $response.classList.add("none");
        }, 3000);
      }
    });
  }

  setTimeout(() => {
    validationsForm();
  }, 100);
  return $form;
}
