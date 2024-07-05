import { useEffect, useState } from 'react'
import './App.css'
import { Todoprovider } from './context'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {


  // set Item and get Item Local storage.
  // we should convert it to the json()

  

  const [todos,setTodos] = useState([])
  // Functionalities
  
// Action oriented functions donot need a return statement.
  
  const addTodo = (todo) => {
     // creating the new array
     setTodos((prev) => [{id :Date.now(), ...todo},...prev])
  
  }
   
  
  // Editing the text
  const updateTodo = (id,todo) =>{
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo) ))
    
  } 
  
  // the concept of deleting is the id given should be taken away in the new array that we are creating
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }
    
  const ToggleComplete = (id) => {
    setTodos((prev) => 
      prev.map((prevTodo) => 
        prevTodo.id === id ? {...prevTodo,
          completed: !prevTodo.completed}: prevTodo) )
  }
    

  useEffect(()=>{  
    
   const todos = JSON.parse(localStorage.getItem("todos")) 
   if(todos && todos.length > 0) {
        setTodos(todos)
   }
  },[]) 

  useEffect(() =>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  

  return (
    <Todoprovider value={{todos, addTodo, updateTodo,deleteTodo,
      ToggleComplete
    }}>
    <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl px-4 py-3 mx-auto text-white rounded-lg shadow-md">
              <h1 className="mt-2 mb-8 text-2xl font-bold text-center">Manage Your Todos</h1>
              <div className="mb-4">
                  {/* Todo form goes here */} 
                  <TodoForm/>
              </div>
              <div className="flex flex-wrap gap-y-3">
                  {/*Loop and Add TodoItem here */}
                  {todos.map((todo) => (
                    <div key={todo.id}
                    className='w-full'
                    >
                      <TodoItem todo={todo}/>
                    </div>
                  ))}
              </div>
          </div>
      </div>
    </Todoprovider>
  )
}

export default App
