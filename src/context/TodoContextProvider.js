
import React, { createContext, useState } from 'react'
export const TodoContext = createContext()

// const reducer=(state,action)=>{
//     switch(action.type){
//         case 'ADD_TODOS':
//            return {
//             ...state,todos:action.payload
//            }
//            case 'DELETE_TODOS':
//             return {
//              ...state,todos:action.payload
//             }
//             case 'EDIT_TODOS':
//                 return {
//                  ...state,todos:action.payload
//                 }
//                 case 'LOAD_ALL_TODOS':
//                     return {
//                      ...state,todos:action.payload
//                     }
//     }


// }

const TodoContextProvider = ({ children }) => {
    const [input, setInput] = useState('')
    const [todos, setTodos] = useState([])
    const [editTask, setEditTask] = useState(false)
    return (
        <div>
            <TodoContext.Provider value={{ input, setInput, todos, setTodos, editTask, setEditTask }}>
                {children}
            </TodoContext.Provider>

        </div>
    )
}

export default TodoContextProvider
