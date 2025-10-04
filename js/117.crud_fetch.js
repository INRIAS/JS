const d = document,
    $table = d.querySelector(".crud-table"),
    $form = d.querySelector(".crud-form"),
    $title = d.querySelector(".crud-title"),
    $template = d.getElementById("crud-template").content,
    $fragment = d.createDocumentFragment();

const getData = async () => {
    try {
        let res = await fetch(`http://localhost:3000/santos_plata`);
        json = await res.json();

        if (!res.ok) throw { status: res.status, status: res.statusText };
        // console.log(json);

        json.forEach(el => {
            $template.querySelector(".name").textContent = el.nombre;
            $template.querySelector(".constellation").textContent = el.constelacion;
            $template.querySelector(".edit").dataset.name = el.nombre;
            $template.querySelector(".edit").dataset.id = el.id;
            $template.querySelector(".edit").dataset.constellation = el.constelacion;
            $template.querySelector(".delete").dataset.name = el.nombre;
            $template.querySelector(".delete").dataset.id = el.id;

            let $clone = d.importNode($template, true);
            $fragment.appendChild($clone);
        });

        $table.querySelector("tbody").appendChild($fragment);

    } catch (err) {
        let message = err.statusText || "Ocurrio un error";
        $table.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
    }
}

d.addEventListener("DOMContentLoaded", getData);

d.addEventListener("submit", async (e) => {
    if (e.target === $form) {
        e.preventDefault();

        if (!e.target.id.value) {
            try {
                let options = {
                    method: "POST",
                    headers: {
                        "Coontent-type": "application/json, charset=utf-8"
                    },
                    body: JSON.stringify({
                        nombre: e.target.nombre.value,
                        constelacion: e.target.constelacion.value
                    })
                };
                let res = await fetch(`http://localhost:3000/santos_plata`, options);
                json = await res.json();
                alert(`The Knight ${e.target.nombre.value} ha sido creado con exito`)
                if (!res.ok) throw { status: res.status, status: res.statusText };
                location.reload();
            } catch (err) {
                let message = err.statusText || "Ocurrio un error";
                $form.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
            }
        } else {
            try {
                let options = {
                    method: "PUT",
                    headers: {
                        "Coontent-type": "application/json, charset=utf-8"
                    },
                    body: JSON.stringify({
                        nombre: e.target.nombre.value,
                        constelacion: e.target.constelacion.value,
                    })
                };
                let res = await fetch(`http://localhost:3000/santos_plata/${e.target.id.value}`, options);
                json = await res.json();
                alert(`The Knight ${e.target.nombre.value} ha sido editado exitosamente`);
                if (!res.ok) throw { status: res.status, status: res.statusText };
                location.reload();

            } catch (err) {
                let message = err.statusText || "Ocurrio un error";
                $form.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
            }
        }
    }
});

d.addEventListener("click",async (e) => {
    if (e.target.matches(".edit")) {
        $title.textContent = "Editar santo";
        $form.nombre.value = e.target.dataset.name;
        $form.constelacion.value = e.target.dataset.constellation;
        $form.id.value = e.target.dataset.id;
    }

    if (e.target.matches(".delete")) {
        let isDelete = confirm(`Seguro desea elimiar The Knight ${e.target.dataset.name}.`)
        if (isDelete) {
            try {
                let options = {
                    method: "DELETE"
                };

                let res = await fetch(`http://localhost:3000/santos_plata/${e.target.dataset.id}`, options)
                json=await res.json();
                location.reload();
                alert(`The Knight ${e.target.dataset.name} ha sido eliminado exitosamente`)

            } catch (error) {
                let message = err.statusText || "Ocurrio un error";
                $table.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
            }
        }
    }
})
