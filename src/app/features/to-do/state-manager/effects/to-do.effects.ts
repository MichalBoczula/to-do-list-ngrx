import { ToDoService } from "../../service/to-do.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as ToDoRequestActions from "../actions/to-do.request.actions"
import { catchError, map, mergeMap, of } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class ToDoEffects {

    constructor(private action$: Actions, private toDoService: ToDoService) { }

    loadToDoList$ = createEffect(() => {
        return this.action$.pipe(
            ofType(ToDoRequestActions.loadToDoModels),
            mergeMap(() => this.toDoService.toDoListStore$.pipe(
                map(list => ToDoRequestActions.loadToDoModelsSuccess({toDoList: list})),
                catchError(err => of(ToDoRequestActions.loadToDoModelsFailure({error: err})))
            ))
        )
    })
}