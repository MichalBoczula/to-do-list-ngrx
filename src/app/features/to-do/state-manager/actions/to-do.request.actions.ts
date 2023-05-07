import { createAction, props } from "@ngrx/store";
import { ToDoModel } from "../../model/ToDoModel";

export const loadToDoModels = createAction(
    'Loading tasks to do...'
);

export const loadToDoModelsSuccess = createAction(
    'Loaded tasks array succes',
    props<{ toDoList: ToDoModel[] }>()
);

export const loadToDoModelsFailure = createAction(
    'Loaded tasks array fail',
    props<{ error: string }>()
);

export const addTask = createAction(
    'Add new task',
    props<{ task: ToDoModel }>()
);

export const toggleStatus = createAction(
    'Toggle tasks status',
    props<{ id: number }>()
);
