import { Component } from "./164.Component.js";

const d = document,
  app = new Component({
    el: "#todo-list",
    data: {
      todoList: [],
    },
    template: function (props) {
      if (props.todoList.length < 1) {
        return `<p><em>Lista sin tareas por hacer</em></p>`;
      }

      let todos = props.todoList.map((item) => `<li>${item}</li>`).join("");

      return todos;
    },
  });

d.addEventListener("DOMContentLoaded", app.render);

// AL inicio de la aplicacion, considerar todas las variables que son posibles en ese estado para no afectar el estado mas adelante

//Estableciendo valores por defecto.
app.setState({
  todoList: ["Tarea 1", "Tarea 2", "Tarea 3"],
});

// Estado Mutable, porque permite modificar el estado directamente creando una copia del objeto y agregando otro elemento.

// -----------------------------------------------------------

d.addEventListener("submit", (e) => {
  if (!e.target.matches("#todo-form")) return false;

  e.preventDefault();

  const $item = d.getElementById("todo-item");
  if (!$item) return;

  //Actualizar el state de forma Reactiva
  const lastState = app.getState();
  lastState.todoList.push($item.value);
  app.setState({ todoList: lastState.todoList });

  //Limpiar el input
  $item.value = "";
  $item.focus();
});
