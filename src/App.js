import React, { useState } from "react";

function App() {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEdit,setIsEdit]=useState(false);
 
  const editTodo = (id) => {

    console.log(id);
    setIsEdit(true);
    const searchedTodo = todos.find(item=>item.id===id)
    setTodoText(searchedTodo.text);
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
    const newTodo = {
      id: new Date().getTime(),
      isDone: false,
      text: todoText,
      date: new Date(),
    };
    console.log("newTodo", newTodo);
    setTodos([...todos, newTodo]);
    setTodoText("");
  };
  return (
    <div className="container">
      <h1 className="text-center my-5">Todo App</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            value={todoText}
            onChange={(event) => setTodoText(event.target.value)}
            type="text"
            className="form-control"
            placeholder="Type Your Todo"
          />
          <button className="btn btn-primary" type="submit">
            ADD
          </button>
        </div>
      </form>
      {todos.length <= 0 ? (
        <p className="text-center my-5">You don't any todos yet </p>
      ) : (
        <React.Fragment>
          {todos.map((item) => (
            <div
              className={`alert alert-${
                item.isDone === true ? "success" : "danger"
              } d-flex justify-content-between aling-items-center`}
              role="alert"
            >
              <p>{item.text}</p>
              <div>
                <button
                  onClick={() => changeIsDone(item.id)}
                  className={`btn btn-sm btn-${
                    item.isDone === false ? "success" : "danger"
                  }`}
                >
                  {item.isDone === false ? "Done" : "Undone"}
                </button>
                <button
                  onClick={() => editTodo(item.id)}
                  className="btn btn-sm btn-success  ms-1"
                >
                  Edit

                </button>
              </div>
            </div>
          ))}
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
