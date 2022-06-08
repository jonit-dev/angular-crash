import { Component, OnInit } from '@angular/core';
import { TASKS } from 'src/app/mocks/mock-tasks';
import { ITask } from 'src/app/types/task.types';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks: ITask[] = TASKS;

  constructor() {}

  ngOnInit(): void {}
}
