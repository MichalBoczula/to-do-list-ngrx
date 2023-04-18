import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ToDoInMemoryDatabase } from './data/ToDoInMemoryDatabase';
import { ToDoAddElementComponent } from './to-do-add-element/to-do-add-element.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ToDoListComponent,
    ToDoAddElementComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forFeature(ToDoInMemoryDatabase, { delay: 1000 }),
    ReactiveFormsModule
  ],
  exports: [
    ToDoListComponent,
  ]
})
export class ToDoModule { }
