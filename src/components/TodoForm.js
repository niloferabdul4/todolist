import React, { useContext, useRef, useEffect } from 'react'
import { TodoContext } from '../context/TodoContextProvider'

const TodoForm = () => {
    const { input, setInput, setEditTask, todos, setTodos } = useContext(TodoContext)
    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus()
    }, [])
    const handleChange = (e) => {
        setEditTask(true)
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        // const updatedList=(prevList=>([...prevList,{input,id:Date.now()}]))
        e.preventDefault()
        if (input) {
            const updated = [...todos, { todo: input, id: Date.now() }]
            setTodos(updated)
        }
        setInput('')
    }
    return (
        <>
            <div className="todo-form-container">
                <form className="todo-form" onSubmit={handleSubmit}>
                    <input ref={inputRef} type="text" className="form-input" placeholder='Enter a todo' onChange={handleChange} />
                    <button className="addtask-btn" type='submit'>{setEditTask === true ? 'Update' : 'Add Task'}</button>
                </form>
            </div>
        </>

    )
}

export default TodoForm
