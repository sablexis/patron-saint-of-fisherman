import { StringLiteral } from "@babel/types";

//todo interface
export interface TodoInterface {
    id: string;
    text: string;
    isCompleted: boolean;
}

//todo form interface
export interface TodoFormInterface {
    todos: TodoInterface[];
    handleTodoCreate: (todo: TodoInterface) => void;
}

//todo list interface
export interface TodoListInterface {
    handleTodoUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
    handleTodoRemove: (id:string) => void;
    handleTodoComplete: (id:string) => void
    handleTodoBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
    todos: TodoInterface[];

}

//todo item interface
export interface TodoItemInterface {
    handleTodoUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
    handleTodoRemove: (id:string) => void;
    handleTodoComplete: (id:string) => void
    handleTodoBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
    todo: TodoInterface;
}