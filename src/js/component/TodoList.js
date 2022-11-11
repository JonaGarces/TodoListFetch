import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  const deleteAllHandler = () => {
    setTodos("");
    fetch('https://assets.breatheco.de/apis/fake/todos/user/pruebanumero117', {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    
  })
  .then(resp => {
      console.log(resp.ok); 
      console.log(resp.status); 
      return resp.json(); 
  })
  .then(data => {
      //Aquí es donde debe comenzar tu código después de que finalice la búsqueda
      console.log(data); 
  })
  .catch(error => {
      //manejo de errores
      console.error(error);
  });;
  };
  return (
    <>
      <div className="todo-container">
        <ul className="todo-list">
          {todos.map((todo,index) => (
            <Todo
              key={index}
              text={todo.label}
              todos={todos}
              todo={todo}
              setTodos={setTodos}
            />
          ))}
        </ul>
      </div>
      <div>
        <header>
          <button onClick={deleteAllHandler} className="trash-btn">
            <i className="fa-solid fa-ban"></i>
          </button>
        </header>
      </div>
    </>
  );
};

export default TodoList;
