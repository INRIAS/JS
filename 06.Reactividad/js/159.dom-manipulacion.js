const d = document,
  $item = d.getElementById("todo-item"),
  $list = d.getElementById("todo-list");

d.addEventListener("submit", (e) => {
  if (!e.target.matches("#todo-form")) return false;

  e.preventDefault();
  //Agregar un Item a la lista

  let $li = d.createElement("li");
  $li.textContent = $item.value;
  $list.appendChild($li);

  //Limpiar el input

  $item.value = "";
  $item.focus();
});
