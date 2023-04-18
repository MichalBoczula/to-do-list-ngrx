import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ToDoState } from "../states/to-do.state";

const getToDoState = createFeatureSelector<ToDoState>('ToDoReducer');

export const getToDoList = createSelector(
    getToDoState,
    state => state.toDoList
);
