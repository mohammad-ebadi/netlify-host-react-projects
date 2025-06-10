import React, { useState } from "react";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import style from "./TodoList.module.css";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");

  function handleInputChange(e) {
    setInputText(e.target.value);
  }

  function addTodo() {
    if (inputText.trim() === "")
      return;

    setTodos([...todos, inputText.trim()]);
    setInputText("");
  }

  function removeTodo(index) {
    const updatedTodos = todos.filter((item, i) => {
      if (i !== index) {
        return true;
      }
      return false;
    });
    setTodos(updatedTodos);
  }

  return (
    <div>
      <Header />

      <h1 className={style.container}>Todo List</h1>

      <div className={style.container}>
        <input
          value={inputText}
          onChange={handleInputChange}
          type="text"
          placeholder="Enter a Todo ..."
        />
        <button className={style.btn} onClick={addTodo}>
          Add Todo
        </button>
      </div>

      <div className={style.container}>
        {todos.map((todo, index) => (
          <div key={index} className={style.todoItem}>
            <span>{todo}</span>
            <button className={style.btn} onClick={() => removeTodo(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
