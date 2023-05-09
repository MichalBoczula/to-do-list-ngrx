import { Component, OnInit } from '@angular/core';
import { ToDoModel } from '../model/ToDoModel';
import { Store } from '@ngrx/store';
import * as ToDoRequestActions from '../state-manager/actions/to-do.request.actions';
import { Observable } from 'rxjs';
import { getToDoList, getLoaded, getError } from '../state-manager/selectors/to-do.selector';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})

export class ToDoListComponent implements OnInit {

  toDoList$?: Observable<ToDoModel[]>;
  loaded$!: Observable<boolean>;
  error$!: Observable<string>;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch(ToDoRequestActions.loadToDoModels());
    this.toDoList$ = this.store.select(getToDoList);
    this.loaded$ = this.store.select(getLoaded);
    this.error$ = this.store.select(getError);
  }

  changeStatus(id: number): void {
    this.store.dispatch(ToDoRequestActions.toggleStatus({ id: id }));
  }
}