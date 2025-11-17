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

const setState = (obj) => {
  for (const key in obj) {
    if (state.hasOwnProperty(key)) {
      state[key] = obj[key];
    }
  }
};

// AL inicio de la aplicacion, considerar todas las variables que son posibles en ese estado para no afectar el estado mas adelante

//Estableciendo valores por defecto.
setState({
  todoList: ["Tarea 1", "Tarea 2", "Tarea 3"],
  nombre: "Stiven",
});

// Estado Muytable, porque permite modificar el estado directamente creando una copia del objeto y agregando otro elemento.

let item = state.todoList;
item.push("Tarea 4");
console.log("Estado mutable", state);


d.addEventListener("DOMContentLoaded", render);

// -----------------------------------------------------------

d.addEventListener("submit", (e) => {
  if (!e.target.matches("#todo-form")) return false;

  e.preventDefault();

  const $item = d.getElementById("todo-item");
  if (!$item) return;

  //Actualizar el State y la UI
  state.todoList.push($item.value);
  render();

  //Limpiar el input
  $item.value = "";
  $item.focus();
});
