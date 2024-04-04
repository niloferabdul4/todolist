import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContextProvider';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = () => {

    const { todos, setEditTask, setTodos } = useContext(TodoContext)
    const handleEdit = (id, newInput) => {
        setEditTask()
        const updatedTasks = todos?.map((todo) => todo.id === id ? { ...todo, todo: newInput } : todo)
        setTodos(updatedTasks)


    }
    const handleDelete = (id) => {
        setTodos(todos?.filter((todo) => todo.id !== id));
    };
    return (
        <div className='todo-list-container'>
            {todos?.map((item, index) => {
                return <>
                    <div className="list" key={index}>
                        <p>{item.todo}</p>
                        <span className='icon-list'>
                            <EditIcon className='edit-icon' onClick={() => handleEdit(item.id, prompt('Enter new todo'))} color='white' />
                            <DeleteIcon className='delete-icon' onClick={() => handleDelete(item.id)} color='white' />
                        </span>
                    </div>
                </>
            })}


        </div>


    )
}

export default TodoList
