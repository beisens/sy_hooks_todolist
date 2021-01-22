import React from "react";
import { nanoid } from "nanoid";
import "./index.css";
const Header = (props) => {
  const {addTodo} = props

  // const handleAdd = (e) => {
  //   const { keyCode, target } = e;
  //   if (keyCode !== 13) return;
  //   if (target.value.trim() === "") {
  //     alert("输入不能为空！");
  //     return;
  //   }
  //   const todoObj = {
  //     id: nanoid(),
  //     name: target.value,
  //     done: false,
  //     isShow: true,
  //   };
  //   addTodo(todoObj);
  //   target.value = "";
  // };

  const handleAdd = (e) => {
    const {key, target} = e
    if(key !== 'Enter') return
    if(target.value.trim() === '') {
      alert('输入不能为空！')
      return
    }
    const todoObj = {
      id: nanoid(),
      name: target.value,
      done: false,
      isShow: true
    }
    addTodo(todoObj)
    target.value = ''
  }

  return (
    <div className="todo-header">
      <h1 className="title">TodoList</h1>
      <input
        type="text"
        onKeyUp={handleAdd}
        placeholder="请输入您的待办名称，按回车确认"
      />
    </div>
  );
};

export default Header;
