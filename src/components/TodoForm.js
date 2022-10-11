import React from "react";

const TodoForm=(props)=>{
    const{handleSubmit,todoText,setTodoText,isEdit}=props;

    return(
        <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            value={todoText}
            onChange={(event) => setTodoText(event.target.value)}
            type="text"
            className="form-control"
            placeholder="Type Your Todo"
          />
          <button
            className={`btn btn-${isEdit === true ? "success" : "primary"}`}
            type="submit"
          >
            {isEdit === false ? "Add" : "Save"}
          </button>
        </div>
      </form>
    )

}

export default TodoForm;