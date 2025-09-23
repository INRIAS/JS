(() => {
    const xhr = new XMLHttpRequest,
        $xhrOl = document.getElementById("xhr"),
        $fragment = document.createDocumentFragment();

    // console.log(xhr);

    xhr.addEventListener("readystatechange", (e) => {
        // console.log(xhr);
        if (xhr.readyState !== 4) return;
        // console.log(xhr);
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log("Conexión Exitosa");

            let json = JSON.parse(xhr.responseText);
            console.log(json);
            
            json.forEach(el =>{
                const $li = document.createElement("li");
                $li.innerHTML=`Nombre: ${el.name} -- Correo: ${el.email} -- Tel: ${el.phone}`;
                $fragment.appendChild($li);
            })

            $xhrOl.appendChild($fragment);
            
        }else{
            let message = xhr.statusText || "Ocurrio un error";

            $xhrOl.innerHTML=`Error ${xhr.status}: ${message}`;
            
        }

    });

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

    xhr.send();
})();