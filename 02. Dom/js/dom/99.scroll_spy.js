const d = document;

export default function scrollSpy() {
    const $section = d.querySelectorAll("section[data-scroll-spy]");

    const cb = (entries) => {
        // console.log(entries);

        entries.forEach(entry => {
            // console.log(entry);

            const id= entry.target.getAttribute("id");

            if(entry.isIntersecting){
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active");
                
            }else{
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active");

            }

        });

    }

    const observador = new IntersectionObserver(cb, {
        // rootMargin:"-250px",
        threshold:[0.5 , 0.75]

    });

    $section.forEach((el) => observador.observe(el));
}