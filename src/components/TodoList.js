import React,{useContext}from 'react'
import { TodoContext } from '../context/TodoContextProvider';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = () => {
   
    const {input,todos,setInput,setEditTask,setTodos}=useContext(TodoContext)
    const handleEdit = (idToRemove) => {
        
        setEditTask(true)
        const updatedTasks=todos.filter((item)=>item.id!==idToRemove)
        setTodos(updatedTasks)
    }
    return (
        <div className='todo-list-container'>
             
            {todos?.map((item,index)=>{return <>
                <div  className="list" key={index}>
                <p>{item.todo}</p>
            <span className='icon-list'>
                <EditIcon onClick={()=>handleEdit(item.id)} color='success' />
                <DeleteIcon color='error' />
            </span>
            </div>
            </>})}          
           
         
        </div>


    )
}

export default TodoList
