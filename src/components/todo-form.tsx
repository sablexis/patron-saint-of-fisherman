//import dependencies
import * as React from 'react'
import shortid from 'shortid'
import {TodoInterface, TodoFormInterface} from './../interfaces'
import { func } from 'prop-types'

//Todo form components 
const TodoForm = (props: TodoFormInterface) => {
    // Create ref for form input
    const inputRef= React.useRef<HTMLInputElement>(null)

    //create form state
    const [formState, setFormState] = React.useState('')

    //Handle todo inupt change
    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>){
        //update form state with the text from input
        setFormState(event.target.value)
    }

    //Handle 'Enter' todo input
        function handleInputEnter(event: React.KeyboardEvent){
        //Checking for 'Enter' key
        if (event.key === 'Enter'){
            //Preapre new todo object
            const newTodo: TodoInterface = {
                id: shortid.generate(),
                text: formState,
                isCompleted: false
            }

            //Create new todo item
            props.handleTodoCreate(newTodo)

            //reset input field
            if (inputRef && inputRef.current){
                inputRef.current.value = ''
            }
        }
    }

    return (
        <div className="todo-form">
            <input
                ref={inputRef}
                type="text"
                placeholder="New Todo"
                onChange={event => handleInputChange(event)}
                onKeyPress={event => handleInputEnter(event)}
            />
        </div>
    )
}

export default TodoForm