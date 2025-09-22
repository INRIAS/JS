//console.log("********** Objeto URL(location) ************");
console.log(location);
// Ej direccion base: http://127.0.0.1:5500
console.log(location.origin);//http://127.0.0.1:5500
console.log(location.protocol);//http:
console.log(location.host);//127.0.0.1:5500
console.log(location.hostname);//127.0.0.1
console.log(location.port);//5500
console.log(location.href);//http://127.0.0.1:5500/79.DOM
console.log(location.hash);//...#contac
console.log(location.pathname);//.../79.DOM
//location.reload()

//console.log("********** Objeto historial (History) ************")
console.log(history);
//console.log(history.length);//cantidad de paginas navegadas
//console.log(history.back());//ir una u varias paginas atras(#)
//console.log(history.forward());//ir # de paginas hacia delante previstas
//console.log(history.go(1));

console.log("********** Objeto historial (History) ************")
console.log(navigator);
console.log(navigator.connection);//informacion de conexion
console.log(navigator.geolocation);//conexion y ubicacion
console.log(navigator.mediaDevices);//utencilios microfono, camara etc
console.log(navigator.mimeTypes);//formatos que soporta el navegador
console.log(navigator.onLine);//detectar conexion a internet
console.log(navigator.serviceWorker);//progresive web apps
console.log(navigator.storage);//api de almacenamiento
console.log(navigator.usb);//con u descon de usb
console.log(navigator.userAgent);//informacion de plataforma conectada
