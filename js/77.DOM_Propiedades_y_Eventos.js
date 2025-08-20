


window.addEventListener("resize", e => {
    console.log("------ Evento Resize ------");
    console.clear();
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(window.outerWidth);
    console.log(window.outerHeight);
    console.log(e);
    console.log("---------------------------");

});

window.addEventListener("scroll", e => {
    console.log("------ Evento Scroll ------");
    console.clear();
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
    console.log("---------------------------");
})

window.addEventListener("load", e => {
    console.log("------ Evento Load ------");
    console.clear();
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);

    console.log("----------------------------");
})


document.addEventListener("DOMContentLoaded", e => {
    console.log("------ Evento Load ------");
    console.clear();
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
    console.log("----------------------------");

})