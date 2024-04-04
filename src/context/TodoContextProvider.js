
import React, { createContext, useState,useEffect } from 'react'
export const TodoContext = createContext()

const TodoContextProvider = ({ children }) => {

    const [input, setInput] = useState('')
    const [todos, setTodos] = useState([])
    const [editTask, setEditTask] = useState('')

//     useEffect(() => {
//         localStorage.setItem('todos', JSON.stringify(todos));
//     }, [todos]);

// useEffect(()=>{
//     let storedTodos=localStorage.getItem('todos')? JSON.parse(localStorage.getItem('todos')):[]   
//     if (storedTodos) {
//          setTodos(storedTodos);
//      }
// },[])
       

    
    return (
        <div>
            <TodoContext.Provider value={{ input, setInput, todos, setTodos, editTask, setEditTask }}>
                {children}
            </TodoContext.Provider>

        </div>
    )
}

export default TodoContextProvider
