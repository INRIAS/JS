const d = document;

// DATOS.... Estado: Gestiona los datos ingresados yu a manipular
const state = {
  todoList: [],
};

//  QUE...... Template: Gestionara los datos como desea que sean pdistribuidos
const template = () => {
  if (state.todoList.length < 1) {
    return `<p><em>Lista sin tareas por hacer</em></p>`;
  }

  let todos = state.todoList.map((item) => `<li>${item}</li>`).join("");

  return todos;
};

//DONDE...... Render de UI = Funcion que va a pintar en base a los cambios del estado en base al template
const render = () => {
  console.log(state);
  const $list = d.getElementById("todo-list");
  if (!$list) return;

  $list.innerHTML = template();
};

d.addEventListener("DOMContentLoaded", render);

// -----------------------------------------------------------------------------

d.addEventListener("submit", (e) => {
  if (!e.target.matches("#todo-form")) return false;

  e.preventDefault();

  const $item = d.getElementById("todo-item");
  if(!$item) return;

  //Actualizar el State y la UI
  state.todoList.push($item.value);
  render();

  //Limpiar el input
  $item.value = "";
  $item.focus();
});
