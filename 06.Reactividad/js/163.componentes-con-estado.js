const d = document;

// DATOS.... Estado: Gestiona los datos ingresados y/u a manipular
const state = {
  todoList: [],
  nombre: "",
};

//  QUE...... Template: Gestionara los datos como desea que sean distribuidos
const template = () => {
  if (template.data.todoList.length < 1) {
    return `<p><em>Lista sin tareas por hacer</em></p>`;
  }

  let todos = template.data.todoList.map((item) => `<li>${item}</li>`).join("");

  return todos;
};

// Agregar el State al Template que genera el componente de UI (State Local)
template.data = {
  todoList: [],
};

//DONDE...... Render de UI = Funcion que va a pintar en base a los cambios del estado en base al template
const render = () => {
  console.log(state);
  console.log(template.data);
  const $list = d.getElementById("todo-list");
  if (!$list) return;
  $list.innerHTML = template();
};

// ---------------------------------------------------------
// Comparo keys la cual me permite actualizar solo las propiedades que existen en el original;
const setState = (obj) => {
  for (const key in obj) {
    if (template.data.hasOwnProperty(key)) {
      template.data[key] = obj[key];
    }
  }

  render();
};
// Lo vuelvo inmutable creando una copia profunda del estado;
const getState = () => JSON.parse(JSON.stringify(template.data));

d.addEventListener("DOMContentLoaded", render);

// AL inicio de la aplicacion, considerar todas las variables que son posibles en ese estado para no afectar el estado mas adelante

//Estableciendo valores por defecto.
setState({
  todoList: ["Tarea 1", "Tarea 2", "Tarea 3"],
  nombre: "Stiven",
});

// Estado Mutable, porque permite modificar el estado directamente creando una copia del objeto y agregando otro elemento.

// // let item = state.todoList;
// let item = getState();
// // item.push("Tarea 4");
// item.todoList.push("Tarea 4");
// console.log("Estado mutable", state);

// -----------------------------------------------------------

d.addEventListener("submit", (e) => {
  if (!e.target.matches("#todo-form")) return false;

  e.preventDefault();

  const $item = d.getElementById("todo-item");
  if (!$item) return;

  //Actualizar el state de forma Reactiva
  const lastState = getState();
  lastState.todoList.push($item.value);
  setState({ todoList: lastState.todoList });

  //Limpiar el input
  $item.value = "";
  $item.focus();
});
