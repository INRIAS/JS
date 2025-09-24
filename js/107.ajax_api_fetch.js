(() => {
    const $fetch = document.getElementById("fetch"),
        $fragment = document.createDocumentFragment();

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(
            (res) => {
                console.log(res);
                return res.ok ? res.json() : Promise.reject(res)

            }
        )
        .then(json => {
            console.log(json);
            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML=`Nombre: ${el.name} -- Correo: ${el.email} -- Tel: ${el.phone}`;
                $fragment.appendChild($li);
            });

            $fetch.appendChild($fragment);

        })
        .catch((err) => {
            let message = err.statusText || "Ocurrio un error";
            $fetch.innerHTML=`Error ${err.status}: ${message}`;

        })
        .finally(() => {
            console.log("Esto se ejecuta independientemente de la respuesta del Fetch");

        });
})();