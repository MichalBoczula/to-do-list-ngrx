import { Component, OnInit } from '@angular/core';
import { ToDoModel } from '../model/ToDoModel';
import { ToDoService } from '../service/to-do.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})

export class ToDoListComponent implements OnInit {

  toDoList!: ToDoModel[]

  constructor(private toDoService: ToDoService) { }

  ngOnInit(): void {
    this.toDoService.toDoList$
      .subscribe(list => this.toDoList = list);
  }

  changeStatus(id: number): void {
    this.toDoList
      .filter(x => x.id === id)
      .map(x => x.status = !x.status);
  }
}