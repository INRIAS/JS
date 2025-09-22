/*Estado Online

Realizaremos un contenedor donde se eprese el estado cuando el estado se conecte u desconecte
*/

const d=document,
w=window,
na=navigator;

export default function onlineStatus(id) {
    const status=()=>{
        const $online=d.querySelector(id);
        if (na.onLine) {
            $online.classList.add("online");
            $online.textContent="Sistema Online";
            console.log(na.onLine);
            
            setTimeout(() => {
                $online.classList.remove("online");
                $online.textContent=null;
            }, 2000);
        }else{
            $online.classList.add("offline");
            $online.textContent="Sistema sin Conexión"; 
            console.log(na.onLine);
            setTimeout(() => {
                $online.classList.remove("offline");  
                $online.textContent=null;
            }, 2000);
        }
    }


    w.addEventListener("online", e=>{status()})
    w.addEventListener("offline", e=>{status()})

}




/*     w.ononline=((e)=>{
        console.log("Estas conectado");
        
    })

    w.onoffline=((e)=>{
        console.log("Estas Desconectado");
        
    }) */