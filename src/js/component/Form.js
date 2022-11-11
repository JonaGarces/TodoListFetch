import React from "react";

const Form = ({ setInputText, setTodos, todos, inputText }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
    console.log(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputText == "") {
      alert("Introduce tu tarea");
    } else {
      const newTodos= [
        ...todos,
        { label: inputText, done: false, id: Math.random() * 1000 },
      ]
      setTodos(newTodos);
      fetch(
        "https://assets.breatheco.de/apis/fake/todos/user/pruebanumero117",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTodos),
        }
      )
        .then((resp) => {
          console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
          console.log(resp.status); // el código de estado = 200 o código = 400 etc.
          
          return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    setInputText("");
  };

  return (
    <>
      <form>
        <input
          placeholder="¿Qué hay que hacer?"
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
        />
        <button
          onClick={submitTodoHandler}
          className="todo-button"
          type="submit"
        >
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
    </>
  );
};

export default Form;
