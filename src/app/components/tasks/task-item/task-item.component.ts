import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ITask } from 'src/app/types/task.types';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: ITask;
  @Output() onDeleteTask = new EventEmitter<ITask>();
  @Output() onToggleTask = new EventEmitter<ITask>();
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  onDeleteItem(task: ITask): void {
    console.log('deleting task id', task.id);

    this.onDeleteTask.emit(task);
  }

  onToggleReminder(task: ITask): void {
    this.onToggleTask.emit(task);
  }
}
