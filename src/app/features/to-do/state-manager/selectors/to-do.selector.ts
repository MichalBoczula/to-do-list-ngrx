import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ToDoState } from "../states/to-do.state";

const getToDoState = createFeatureSelector<ToDoState>('ToDoReducer');

export const getToDoList = createSelector(
    getToDoState,
    state => state.toDoList
);

export const getLastEleFromList = createSelector(
    getToDoState,
    state => state.toDoList[state.toDoList.length - 1]
);

export const getLoaded = createSelector(
    getToDoState,
    state => state.loaded
);

export const getError = createSelector(
    getToDoState,
    state => state.error
);
