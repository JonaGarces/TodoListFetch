import React, { useEffect, useState } from "react";
import DefaultMessage from "./component/DefaultMessage";
import Form from "./component/Form";
import TodoList from "./component/TodoList";

//create your first component
const Home = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const status = "";

  useEffect(() => {
    getUser();
  }, []);

  const createUser = () => {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/pruebanumero117", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([]),
    })
      .then((resp) => {
        console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
        console.log(resp.status); // el código de estado = 200 o código = 400 etc.
        return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
      })
      .then((data) => {
       console.log(data)
        if(data.result){
          getUser()
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getUser = () => {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/pruebanumero117", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
        console.log(resp.status); // el código de estado = 200 o código = 400 etc.
        return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
      })
      .then((data) => {
        if (data.msg) {
          createUser();
        }else{setTodos(data)}
        console.log(data); //if data msg
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="App">
        <header>
          <b>ToDo List</b>
        </header>
        <Form
          inputText={inputText}
          setInputText={setInputText}
          setTodos={setTodos}
          todos={todos}
        />
        {todos == "" ? (
          <DefaultMessage status={status} />
        ) : (
          <TodoList setTodos={setTodos} todos={todos} />
        )}
      </div>
    </>
  );
};

export default Home;
