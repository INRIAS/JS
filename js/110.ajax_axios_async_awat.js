
(() => {
    const $axios = document.getElementById("axios"),
        $fragment = document.createDocumentFragment();

    async function axiosAsync(params) {

        try {
            let res = await axios.get("https://jsonplaceholder.typicode.com/user")

            let json = await res.data;
            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `Nombre: ${el.name} -- Correo: ${el.email} -- Tel: ${el.phone}`;
                $fragment.appendChild($li);
            });
            $axios.appendChild($fragment);

        } catch (err) {
            console.log(err);
            let message = err.response.statusText || "Ocurrio un error";
            $axios.innerHTML = `Error ${err.response.status}: ${message}`;

        } finally {
            console.log("Prueba Finally");
        }
    }

    axiosAsync();
})();