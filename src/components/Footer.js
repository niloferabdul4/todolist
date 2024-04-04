import React,{useContext} from 'react'
import { TodoContext } from '../context/TodoContextProvider';

const Footer = () => {
  const {setTodos}=useContext(TodoContext)
  const handleClear= () => {
    setTodos([]);
  };
  return (
   
       <div>
             <button className='clear-btn' onClick={handleClear}  >Clear All Tasks </button>
        </div>
 
  )
}

export default Footer
