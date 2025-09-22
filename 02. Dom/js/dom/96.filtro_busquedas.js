const d = document;

export default function searchFilter(input,selector) {
    const $search=d.querySelector(input),
    $cards=d.querySelectorAll(selector);

    d.addEventListener("keyup", e=>{
        if (e.value ==="") card.classList.remove("filter");

        if(e.target===$search){
            $cards.forEach(card=>{
                card.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ?card.classList.remove("filter")
                :card.classList.add("filter");
            })
        }
    })
    
}