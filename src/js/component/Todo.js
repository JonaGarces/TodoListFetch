import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    const deletedTodos = (todos.filter((el) => el.id !== todo.id));
    fetch(
      "https://assets.breatheco.de/apis/fake/todos/user/pruebanumero117",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(deletedTodos),
      }
    )
      .then((resp) => {
        console.log(resp.ok); 
        console.log(resp.status);
        return resp.json(); 
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
      setTodos(deletedTodos)
      console.log(deletedTodos)
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <>
      <div className="todo">
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
          {text}
        </li>
        <button onClick={completeHandler} className="complete-btn">
          <i className="fas fa-check"></i>
        </button>
        <button onClick={deleteHandler} className="trash-btn">
          <i className="fas fa-trash"></i>
        </button>
      </div>
      
    </>
  );
};

export default Todo;
