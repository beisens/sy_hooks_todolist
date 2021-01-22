import React from "react";
import "./index.css";

export default function Footer(props) {

  const {todos, checkAllTodo, clearAllDone, showAllTodo, showDoneTodo, showNoneTodo} = props

  // 已完成的个数
  // const doneCount = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0),0)
  const doneCount = () => {
    let sum = 0
    todos.forEach(todo => {
      if(todo.done) sum++
    })
    return sum
  }

  // 全选checkbox的回调
  const handleCheckAll = (e) => {
    checkAllTodo(e.target.checked)
  } 

  // 清除全部已完成的回调
  const handleClearAllDone = () => {
    clearAllDone()
  }

  // 筛选显示全部的todos
  const handleShowAll = () => {
    showAllTodo()
  }

  // 筛选显示已完成的todos
  const handleShowDone = () => {
    showDoneTodo()
  }

  // 筛选显示未完成的todos
  const handleShowNone = () => {
    showNoneTodo()
  }

  return (
    <div className="todo-footer">
      <label>
        <input type="checkbox" onChange={handleCheckAll} checked={doneCount() === todos.length && todos.length !== 0} />
        </label>
        <span>
          <span> 已完成{doneCount()} </span> / 全部{todos.length}
        </span>
        <button className="btn btn-danger" onClick={handleClearAllDone} > 清除已完成任务</button>
        <button className="btn btn-alive" onClick={handleShowNone}> 未完成 </button>
        <button className="btn btn-done" onClick={handleShowDone}> 已完成 </button>
        <button className="btn btn-all" onClick={handleShowAll}> 全部 </button>
    </div>
  );
}
