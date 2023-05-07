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
    on(ToDoRequestActions.loadToDoModelsSuccess, (state, { toDoList }) => {
        return {
            ...state,
            toDoList: toDoList
        }
    }),
    on(ToDoRequestActions.loadToDoModelsFailure, (state, { error }) => {
        return {
            ...state,
            error: error
        }
    }),
    on(ToDoRequestActions.addTask, (state, { task }) => {
        return {
            ...state,
            toDoList: [...state.toDoList, task]
        }
    }),
    on(ToDoRequestActions.toggleStatus, (state, { id }) => {
        const updatedTasks = state.toDoList
            .map(x => {
                let obj;
                if (x.id === id) {
                    obj = {
                        ...x,
                        status: !x.status
                    }
                }
                else {
                    obj = x;
                }

                return obj;
            });

        return {
            ...state,
            toDoList: updatedTasks
        }
    })
)