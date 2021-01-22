import React, { useState } from "react";
import Header from "./component/Header";
import List from "./component/List";
import Footer from "./component/Footer";

import './App.css'

export default function App() {

  const [todos, setTodos] = useState([
    { id: "001", name: "吃饭", done: true, isShow: true },
    { id: "002", name: "睡觉", done: true, isShow: true },
    { id: "003", name: "打代码", done: false, isShow: true },
    { id: "004", name: "逛街", done: false, isShow: true },
  ])
  
  // addTodo用于添加一个todo，接收的参数是todo对象
  const addTodo = (todoObj) => {
    const newTodos = [todoObj, ...todos]
    setTodos( newTodos )
  }

  // updateTodo用于更新一个todo对象
  const updateTodo = (id, done) => {
    const newTodos = todos.map(todo => {
      if(todo.id === id) return {...todo, done}
      else return todo
    })
    setTodos( newTodos )
  }

  // deleteTodo用于删除一个todo对象
  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => {
      return todo.id !== id // ***
    })
    setTodos( newTodos )
  }

  // checkAllTodo用于全选
  const checkAllTodo = (done) => {
    const newTodos = todos.map(todo => {
      // todo.done = done
      // return todo
      return {...todo, done}
    })
    setTodos( newTodos )
  }

  // clearAllDone用于清除所有已完成的todo对象
  const clearAllDone = () => {
    const newTodos = todos.filter(todo => {
      return !todo.done
    })
    setTodos( newTodos )
  }

  // showAllTodo用于筛选显示所有的todo对象
  const showAllTodo = () => {
    const newTodos = todos.map(todo => {
      todo.isShow = true
      return todo
    })
    setTodos( newTodos )
  }

  // showDoneTodo用于筛选显示已完成的todo对象
  const showDoneTodo = () => {
    const newTodos = todos.map(todo => {
      todo.isShow = true
      if(!todo.done) {
        todo.isShow = false
      }
      return todo
    })
    setTodos( newTodos )
  }

  // showNoneTodo用于筛选显示未完成的todo对象
  const showNoneTodo = () => {
    const newTodos = todos.map(todo => {
      todo.isShow = true
      if(todo.done) {
        todo.isShow = false
      }
      return todo
    })
    setTodos( newTodos )
  }

    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={addTodo} />
          <List todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
          <Footer todos={todos} checkAllTodo={checkAllTodo} clearAllDone={clearAllDone} showAllTodo={showAllTodo} showDoneTodo={showDoneTodo} showNoneTodo={showNoneTodo} />
        </div>
      </div>
    );
}
