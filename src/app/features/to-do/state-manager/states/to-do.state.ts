import { ToDoModel } from "../../model/ToDoModel";

export interface ToDoState {
    toDoList: ToDoModel[],
    error: string,
    loaded: boolean
}