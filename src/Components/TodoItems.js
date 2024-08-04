import React from 'react'
import tick from '../Assets/tick.png'
import not_tick from '../Assets/not_tick.png'
import cross from '../Assets/cross.png'
import './TodoItem.css'

const TodoItems = ({no, display, text,setTodos}) => {
    const toggle=(no)=>{
        let data = JSON.parse(localStorage.getItem('todos'))
    for (let i = 0; i < data.length; i++) 
       {
        if(data[i].no === no)
            if(data[i].display === ''){
                data[i].display = 'line-through'
            }else{
                data[i].display = ''
            }
            break
       }
       setTodos(data)
    }
    
        
    
  return (
    <div className='todo-item'>
        <div className={`todo-container ${display}`} onClick={()=>{toggle(no)}}>
            {display === '' ? <img src={not_tick} alt=''/> :  <img src={tick} alt=''/>}
            
           
            <div className='todo-text'>{text}</div>
        </div>
        <img  className='todo-cross-icon' src={cross} alt=''/>
      
    </div>
  )
}

export default TodoItems
