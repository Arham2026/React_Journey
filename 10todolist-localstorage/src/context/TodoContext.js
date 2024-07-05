import {createContext,useContext} from 'react'

// creating the context
export const TodoContext = createContext({
    todos: [
        {
            id : 1,
            todo:"todo message",
            completed:false
        }
    ],
   // todo is a message here that gets passed and it does some functionality based on that.
        addTodo : (todo) => {},
        // edit
        updateTodo : (id,todo) =>{},

        deleteTodo : (id) => {},
        // the cross mark when click the box
        ToggleComplete : (id) => {}

})

export const useTodo = () =>{
    return useContext(TodoContext)
}

export const Todoprovider = TodoContext.Provider
