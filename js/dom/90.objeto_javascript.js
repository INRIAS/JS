const d = document,
    w = window;

export default function objetoJs(id, mq, mobileContent, desktopContent) {
    let breakpoint = w.matchMedia(mq);

    const responsive = (e) => {
        if (e.matches) {
            d.querySelector(id).innerHTML = desktopContent;
        } else {
            d.querySelector(id).innerHTML = mobileContent;
        }
    }

    breakpoint.addEventListener("change", responsive);
    responsive(breakpoint);

}