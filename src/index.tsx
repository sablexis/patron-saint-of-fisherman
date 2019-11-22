//importts dependencies

import * as React from 'react'
import { render } from 'react-dom'
import TodoForm from './components/todo-form'
import TodoList from './components/todo-list'
import { TodoInterface } from './interfaces'
import './styles/styles.css'
import { array } from 'prop-types'

//app component
const TodoListApp = () => {
    // eslint-disable-next-line
    const [todos, setTodos] = React.useState<TodoInterface[]>([])

    //creating new todo item
function handleTodoCreate(todo: TodoInterface) {
    //prepares new todosstate
    const newTodosState: TodoInterface[] = [...todos]

    //update new todo state
    newTodosState.push(todo)

    //update todos state
    setTodos(newTodosState)
}

    //update exisiting todo item
    function handleTodoUpdate(event: React.ChangeEvent<HTMLInputElement>, id:string){
        //Prepare new todos state
        const newTodosState: TodoInterface[] = [...todos]

    //find correct todo item to update
    newTodosState.find((todo:TodoInterface) => todo.id === id )!.text = event.target.value

    //update todos state
    setTodos(newTodosState)
}

    // removing existing todo item
    function handleTodoRemove(id:string){
    //prepare new tool state
    const newTodosState: TodoInterface[] = todos.filter((todo: TodoInterface) => todo.id !== id)

    //update todos state
    setTodos(newTodosState)
}

//check existing todo item as completed
function handleTodoComplete(id: string){
    //copy current todos state
    const newTodosState: TodoInterface[] = [...todos]

    //Find the correct todo item and update its 'isCompleted' key
    newTodosState.find((todo:TodoInterface) => todo.id === id)!.isCompleted = !newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted

    //update todos state
    setTodos(newTodosState)
}

    //check if todo item has title
    function handleTodoBlur(event: React.ChangeEvent<HTMLInputElement>){
        if (event.target.value.length === 0){
            event.target.classList.add('todo-input-error')
        } else {
            event.target.classList.remove('todo-input-errror')
        }
    }

    return(
        <div className="todo-list-app">
            <TodoForm
                todos={todos}
                handleTodoCreate={handleTodoCreate}/>

            <TodoList 
            todos={todos}
            handleTodoUpdate={handleTodoUpdate}
            handleTodoRemove={handleTodoRemove}
            handleTodoComplete={handleTodoComplete}
            handleTodoBlur={handleTodoBlur}/>
        </div>  
    )
}

const rootElement = document.getElementById('root')
render(<TodoListApp />, rootElement)

