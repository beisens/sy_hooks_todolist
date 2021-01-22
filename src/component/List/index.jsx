import React from "react";
import Item from "../Item";

import "./index.css";

export default function List (props) {

  const {todos, updateTodo, deleteTodo} = props

  return (
    <ul className="todo-main">
      {todos.map(todo => {
          return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      })}
    </ul>
  );
}
