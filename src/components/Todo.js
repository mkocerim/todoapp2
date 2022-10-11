import React from "react";

const Todo =(props)=>{
    const {item,deleteTodo,setTodoText,setIsEdit,setWillUpdateTodo,changeIsDone}=props
    return(
        <div
        className={`alert alert-${
          item.isDone === true ? "info" : "secondary"
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
            className={`btn btn-sm btn-${
              item.isDone === true ? "success" : "danger"
            } mx-1`}
            onClick={() => deleteTodo(item.id)}
          >
            Delete
          </button>
          <button
            onClick={() => {
              setIsEdit(true);
              setWillUpdateTodo(item.id);
              setTodoText(item.text);
            }}
            className="btn btn-sm btn-success"
          >
            Edit
          </button>
        </div>
      </div>
    )

}

export default Todo;