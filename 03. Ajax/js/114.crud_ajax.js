const d = document,
    $table = d.querySelector(".crud-table"),
    $form = d.querySelector(".crud-form"),
    $title = d.querySelector(".crud-title"),
    $template = document.getElementById("crud-template").content,
    $fragment = d.createDocumentFragment();

const ajax = (options) => {
    let { url, method, success, error, data } = options
    const xhr = new XMLHttpRequest;

    xhr.addEventListener("readystatechange", e => {
        // console.log(xhr);
        if (xhr.readyState !== 4) return;

        if (xhr.status >= 200 && xhr.status < 300) {
            let json = JSON.parse(xhr.responseText);
            success(json);
        } else {
            let message = xhr.statusText || "Ocurrio un error";
            error(`Error ${xhr.status}: ${message}`)
        }

    });

    // xhr.open("GET", "http://localhost:3000/santos_plata");
    xhr.open(method || "GET", url);
    xhr.setRequestHeader("Content-type", "application/json", "charset=utf-8")

    xhr.send(JSON.stringify(data));
}
const getAll = () => {
    ajax({
        method: "GET",
        url: "http://localhost:3000/santos_oro",
        success: (res) => {
            console.log(res);
            res.forEach(el => {
                $template.querySelector(".name").textContent = el.nombre;
                $template.querySelector(".constellation").textContent = el.constelacion;
                $template.querySelector(".edit").dataset.id = el.id;
                $template.querySelector(".edit").dataset.name = el.nombre;
                $template.querySelector(".edit").dataset.constellation = el.constelacion;
                $template.querySelector(".delete").dataset.id = el.id;
                $template.querySelector(".delete").dataset.name = el.nombre;

                let $clone = d.importNode($template, true);
                $fragment.appendChild($clone);
            });
            $table.querySelector("tbody").appendChild($fragment);

        },
        error: (err) => {
            console.log(err);
            $table.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`)
        },
        data: null
    })
}

d, addEventListener("DOMContentLoaded", getAll);

d.addEventListener("submit", e => {
    if (e.target === $form) {
        e.preventDefault();

        if (!e.target.id.value) {
            ajax({
                url: "http://localhost:3000/santos_oro",
                method: "POST",
                success: (res) => {
                    // console.log(res);
                    location.reload();
                    alert(`El Kinight ${e.target.nombre.value} ha sido creado con exito`);
                },
                error: (err) => {
                    $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`)
                },
                data: {
                    nombre: e.target.nombre.value,
                    constelacion: e.target.constelacion.value
                }
            })
        } else {
            ajax({
                url: `http://localhost:3000/santos_oro/${e.target.id.value}`,
                method: "PUT",
                success: (res) => {
                    location.reload();
                    alert(`El Kinight ${e.target.nombre.value} ha sido Editado con exito`);
                },
                error: (err) => {
                    $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`)
                },
                data: {
                    nombre: e.target.nombre.value,
                    constelacion: e.target.constelacion.value
                }
            });
        }
    }
})

d.addEventListener("click", e => {
    if (e.target.matches(".edit")) {
        $title.textContent = "Editando Santo";
        $form.nombre.value = e.target.dataset.name;
        $form.constelacion.value = e.target.dataset.constellation;
        $form.id.value = e.target.dataset.id;
    }
    if (e.target.matches(".delete")) {
        let isDelete = confirm(
            `Seguro que desea eliminar the Knight ${e.target.dataset.name}`
        )
        if (isDelete) {
            ajax({
                url: `http://localhost:3000/santos_oro/${e.target.dataset.id}`,
                method: "DELETE",
                success: (res) => {
                    location.reload();
                    alert(`The knight ${e.target.dataset.name} ha sido eliminado `)
                },
                error: (err) => {
                    $form.insertAdjacentElement("afterend", `<p><b>${err}</b></p>`)
                },
                data: null
            })
        }
    }
})