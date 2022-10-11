import React, { useState } from "react";

import Todo from "./components/Todo";

import TodoForm from "./components/TodoForm";

function App() {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [willUpdateTodo, setWillUpdateTodo] = useState();
  const deleteTodo = (id) => {
    console.log(id);
    const filteredTodos = todos.filter((item) => item.id !== id);
    console.log(filteredTodos);
    setTodos(filteredTodos);
  };

  const changeIsDone = (id) => {
    console.log(id);
    const searchedTodo = todos.find((item) => item.id === id);
    const updatedTodo = {
      ...searchedTodo,
      isDone: !searchedTodo.isDone,
    };
    const filteredTodos = todos.filter((item) => item.id !== id);

    setTodos([updatedTodo, ...filteredTodos]);
    console.log(filteredTodos);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todoText === "") {
      alert("Todo Text can't be empty");
      return;
    }
    const hasTodos = todos.find((item) => item.text === todoText);
    console.log(hasTodos);
    if (hasTodos !== undefined) {
      alert("You have the Todo already");
      return;
    }
    if (isEdit === true) {
      console.log(willUpdateTodo, "todo'yu güncelleyecegiz");
      const searchedTodo = todos.find((item) => item.id === willUpdateTodo);
      const updatedTodo = {
        ...searchedTodo,
        text: todoText,
      };
      const filteredTodos = todos.filter((item) => item.id !== willUpdateTodo);
      setTodos([...filteredTodos, updatedTodo]);
      setTodoText("");
      setIsEdit(false);
      setWillUpdateTodo("");
    } else {
      const newTodo = {
        id: new Date().getTime(),
        isDone: false,
        text: todoText,
        date: new Date(),
      };
      console.log("newTodo", newTodo);
      setTodos([...todos, newTodo]);
      setTodoText("");
    }
  };
  return (
    <div className="container">
      <h1 className="text-center my-5">Todo App</h1>
      <TodoForm 
      handleSubmit={handleSubmit} 
      todoText={todoText} 
      setTodoText={setTodoText} 
      isEdit={isEdit} />
      {todos.length <= 0 ? (
        <p className="text-center my-5">You don't any todos yet </p>
      ) : (
        <React.Fragment>
          {todos.map((item) => (
            <Todo
              item={item}
              deleteTodo={deleteTodo}
              setIsEdit={setIsEdit}
              setWillUpdateTodo={setWillUpdateTodo}
              setTodoText={setTodoText}
              changeIsDone={changeIsDone}
            />
          ))}
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
