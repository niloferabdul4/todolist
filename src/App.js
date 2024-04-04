
import { useEffect,useContext } from "react";
import Todo from "./components/Todo";
import { TodoContext } from "./context/TodoContextProvider";

function App() {
  const {todos,setTodos}=useContext(TodoContext)
  useEffect(() => {const savedTodos=JSON.parse(localStorage.getItem('todos'));            // parse to js obj & getting from local storage ///
  if(savedTodos)
{
setTodos(savedTodos)
}
}, [])                             


useEffect(() => {localStorage.setItem('todos',JSON.stringify(todos))}, [todos]);             // saving to local storage each time notes chages (converted to string) ////

  return (
    <div className="App">
    <Todo/>
    </div>
  );
}

export default App;
