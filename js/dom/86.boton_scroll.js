const d=document,
w=window;

export default function scrollTop(btn) {
    const $scrollBtn = d.querySelector(btn);

    w.addEventListener("scroll", e =>{
        let scrollTop = d.documentElement.scrollTop || d.body.scrollTop;
        if (scrollTop > 600) {
            $scrollBtn.classList.remove("hidden");
        } else {
            $scrollBtn.classList.add("hidden")
        }
    })

    d.addEventListener("click", e =>{
        if(e.target.matches(btn) || e.target.matches(`${btn} *`)){
            d.documentElement.scrollTop=0;
            d.body.scrollTop=0;
        }
    })
}