import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToDoModel } from '../model/ToDoModel';
import { ToDoService } from '../service/to-do.service';

@Component({
  selector: 'app-to-do-add-element',
  templateUrl: './to-do-add-element.component.html',
  styleUrls: ['./to-do-add-element.component.css']
})
export class ToDoAddElementComponent {
  isActive: boolean = false;
  taskForm!: FormGroup;
  errors?: string[];

  constructor(private formBuilder: FormBuilder, private toDoService: ToDoService) { }

  activePanel() {
    this.isActive = true;
    this.taskForm = this.formBuilder.group({
      status: false,
      title: ['', [Validators.required]],
      desc: ['', [Validators.required]]
    })
  }

  addTask() {
    if (this.taskForm.valid) {
      this.isActive = false;
      this.errors = undefined;

      const task: ToDoModel = this.taskForm.getRawValue();
      task.id = this.toDoService.getActualId() + 1;
      this.toDoService.addTask(task);
    }
    else {
      this.errors = [];

      Object.keys(this.taskForm.controls).forEach(input => {
        const errorList = this.taskForm.get(input)?.errors;
        if (errorList != null) {
          Object.keys(errorList).forEach(error => {
            if (error === 'required') {
              this.errors?.push(`'${input.charAt(0).toUpperCase() + input.slice(1)}' is ${error}`);
            }
          });
        }
      });
    }
  }

  discard() {
    this.isActive = false;
    this.errors = undefined;
  }
}