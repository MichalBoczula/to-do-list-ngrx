import { createReducer, on } from "@ngrx/store";
import { ToDoState } from "../states/to-do.state";
import * as ToDoRequestActions from "../actions/to-do.request.actions";

export interface ToDoStore {
    toDo: ToDoState;
}

const initialState: ToDoState = {
    toDoList: [],
    error: ''
}

export const ToDoReducer = createReducer<ToDoState>(
    initialState,
    on(ToDoRequestActions.loadToDoModelsSuccess, (state, action) => {
        return {
            ...state,
            toDoList: action.toDoList
        }
    }),
    on(ToDoRequestActions.loadToDoModelsFailure, (state, action) => {
        return {
            ...state,
            error: action.error
        }
    })
)