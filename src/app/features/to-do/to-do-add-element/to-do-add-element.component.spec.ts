import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoAddElementComponent } from './to-do-add-element.component';

describe('ToDoAddElementComponent', () => {
  let component: ToDoAddElementComponent;
  let fixture: ComponentFixture<ToDoAddElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoAddElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoAddElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
