import React from "react";
import passSetTodo from "../utils/passSetTodo";

const Form = ({ setInputText, inputText, todos, setTodos }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputText.trim().length) {
      setTodos(passSetTodo(inputText, todos));

      setInputText("");
      localStorage.setItem("todos", JSON.stringify(passSetTodo(inputText, todos)));
    } else alert("Cannot submit empty string");
  };
  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
        required="required"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus"></i>
      </button>
    </form>
  );
};

export default Form;
