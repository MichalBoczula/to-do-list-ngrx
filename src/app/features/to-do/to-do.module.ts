import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ToDoInMemoryDatabase } from './data/ToDoInMemoryDatabase';
import { ToDoAddElementComponent } from './to-do-add-element/to-do-add-element.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { ToDoReducer } from './state-manager/reducers/to-do.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ToDoEffects } from './state-manager/effects/to-do.effects';

@NgModule({
  declarations: [
    ToDoListComponent,
    ToDoAddElementComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forFeature(ToDoInMemoryDatabase, { delay: 1000 }),
    ReactiveFormsModule,
    StoreModule.forFeature('ToDoReducer', ToDoReducer),
    EffectsModule.forFeature([ToDoEffects])
  ],
  exports: [
    ToDoListComponent,
  ]
})
export class ToDoModule { }
