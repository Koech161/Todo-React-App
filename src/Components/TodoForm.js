import React, { useEffect, useRef, useState } from 'react'
import './Todo.css'
import TodoItems from './TodoItems'

let count = 0
const TodoForm = () => {

  const [todos, setTodos]=useState([])
  const inputRef= useRef(null)
  const add = ()=>{
    setTodos([...todos, {no:count++,text:inputRef.current.value,display:""}])
    inputRef.current.value = "";
    localStorage.setItem('todo_count',count)
    
  }
  useEffect(()=>{
    setTodos(JSON.parse(localStorage.getItem('todos')))
    count = localStorage.getItem('todo_count')
  },[])
  useEffect(()=>{
     setTimeout(() => {
      console.log(todos);
    localStorage.setItem('todos', JSON.stringify(todos))
    },100);
  },[todos])

  return (
    <div className='todo'>
      <div className='todo-header'>To-Do List</div>
      <div className='todo-add'>
        <input ref={inputRef} type='text' placeholder='Enter your input' className='input-box'/>
        <button onClick={()=>{add()}} type='submit' className='todo-btn'>Add </button>
      </div>
      <div  className='todo-list'>
      {todos.map((item,index)=>{
        return <TodoItems key={index} no={item.no} setTodos={setTodos} display={item.display} text={item.text} />
      })}
      </div>
      
    </div>
  )
}

export default TodoForm
