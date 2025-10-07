const d = document,
    $table = d.querySelector(".crud-table"),
    $form = d.querySelector(".crud-form"),
    $title = d.querySelector(".crud-title"),
    $template = d.getElementById("crud-template").content,
    $fragment = d.createDocumentFragment();

const getAll = async () => {
    try {
        let res = await axios.get("http://localhost:3000/santos_oro"),
            json = await res.data;
        console.log(res);

        json.forEach((el) => {
            $template.querySelector(".name").textContent = el.nombre;
            $template.querySelector(".constellation").textContent = el.constelacion;
            $template.querySelector(".edit").dataset.id = el.id;
            $template.querySelector(".edit").dataset.name = el.nombre;
            $template.querySelector(".edit").dataset.constellation = el.constelacion;
            $template.querySelector(".delete").dataset.name = el.nombre;
            $template.querySelector(".delete").dataset.id = el.id;

            let $clone = d.importNode($template, true);
            $fragment.appendChild($clone);
        });
        $table.querySelector("tbody").appendChild($fragment);
    } catch (err) {
        let message = err.statusText || "Ha ocurrido un error";
        $table.insertAdjacentHTML(
            "afterend",
            `<p><b>Error ${err.status}: ${message}</b></p>`
        );
    }
};

d.addEventListener("DOMContentLoaded", getAll());
d.addEventListener("submit", async e => {
    if (e.target === $form) {
        e.preventDefault();

        if (!e.target.id.value) {
            try {
                let options = {
                    method: "POST",
                    headers: {
                        "Content-type": "Application/json, charset=UTF-8"
                    },
                    data:JSON.stringify({
                        nombre: e.target.nombre.value,
                        constelacion: e.target.constelacion.value
                    })
                },
                    res = await axios(`http://localhost:3000/santos_oro`, options),
                    json = await res.data;

                alert(`The Golden Knight ${e.target.nombre.value} ha sido agregado correctamente`);
                location.reload();

            } catch (err) {
                let message = err.statusText || "Ha ocurrido un error";
                $form.insertAdjacentHTML(
                    "afterend",
                    `<p><b>Error ${err.status}: ${message}</b></p>`
                );
            }
        } else {
            try {
                let options = {
                    method: "PUT",
                    headers: {
                        "Content-type": "Application/json, charset=UTF-8"
                    },
                    data: {
                        nombre: e.target.nombre.value,
                        constelacion: e.target.constelacion.value
                    }
                },
                    res = await axios(`http://localhost:3000/santos_oro/${e.target.id.value}`, options),
                    json = await res.data;
                alert(`The gold Knight ${e.target.nombre.value} ha sido editado correctamente`);
                location.reload();
            } catch (err) {
                let message = err.statusText || "Ha ocurrido un error";
                $form.insertAdjacentHTML(
                    "afterend",
                    `<p><b>Error ${err.status}: ${message}</b></p>`
                );
            }
        }
    }
});
d.addEventListener("click", async e => {
    if (e.target.matches(".edit")) {
        $title.textContent = "Editar Santo";
        $form.nombre.value = e.target.dataset.name;
        $form.constelacion.value = e.target.dataset.constellation;
        $form.id.value = e.target.dataset.id;
    }

    if (e.target.matches(".delete")) {
        let isDelete = confirm(`Desea eliminar ha The Gold Knight ${e.target.dataset.name}`);

        if (isDelete) {
            try {
                let options = {
                    method: "DELETE"
                };
                alert(`The Gold Knight ${e.target.dataset.name} ha sido eliminado`);
                let res = await axios(`http://localhost:3000/santos_oro/${e.target.dataset.id}`, options),
                    json = await res.data;
                location.reload();
            } catch (error) {
                let message = err.statusText || "Ha ocurrido un error";
                $form.insertAdjacentHTML(
                    "afterend",
                    `<p><b>Error ${err.status}: ${message}</b></p>`
                );
            }
        }
    }
})