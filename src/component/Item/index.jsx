import React, { Fragment, useState } from 'react'

import "./index.css";

export default function Item(props) {

    const [mouse, setMouse] = useState(false)

    const {updateTodo, deleteTodo} = props

    // 鼠标移入移出的回调
    const handleMouse = (flag) => {
        setMouse(flag)
    }

    // 勾选，取消勾选某一个todo的回调
    const handleClick = (id) => {
        return (e) => {
            updateTodo(id, e.target.checked)
        }
    }

    // 删除一个todo的回调
    const handleDelete = (id) => {
        deleteTodo(id)
    }

    const {id, name, done, isShow} = props

    return (
        <Fragment>
            {isShow && <li style={{background: mouse ? '#ddd' : '#fff'}} onMouseEnter={() => handleMouse(true)} onMouseLeave={() => handleMouse(false)} >
                <label>
                    <input type="checkbox" checked={done} onChange={handleClick(id)} />
                    <span>{name}</span>
                    </label>
                    <button onClick={() => handleDelete(id)} style={{display: mouse ? 'block' : 'none'}}  className="btn btn-danger">删除</button>
                    </li>}
        </Fragment>
    )
}
