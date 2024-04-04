import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import './todo.css'
import Header from './Header'
import Footer from './Footer'
const Todo = () => {
    return (
        <>
            <div className="todo-container">
                <Header />
                <TodoForm />
                <TodoList />
                <Footer />
            </div>

        </>
    )
}

export default Todo
