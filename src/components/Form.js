import React from "react";

const Form = ({ setInputText, inputText, todos, setTodos }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Date.now(),
      },
    ]);
    setInputText("");
  };
  return (
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" required="required" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus"></i>
      </button>
    </form>
  );
};

export default Form;
