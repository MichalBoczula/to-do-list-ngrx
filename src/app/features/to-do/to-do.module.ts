import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoElementComponent } from './to-do-element/to-do-element.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

@NgModule({
  declarations: [
    ToDoListComponent,
    ToDoElementComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToDoListComponent,
    ToDoElementComponent
  ]
})
export class ToDoModule { }
