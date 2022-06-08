import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { ITask } from 'src/app/types/task.types';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks: ITask[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      return (this.tasks = tasks);
    });
  }

  deleteTask(task: ITask): void {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
    });
  }

  toggleTask(task: ITask): void {
    const toggledTask = {
      ...task,
      reminder: !task.reminder,
    };

    this.taskService.updateTask(toggledTask).subscribe((updatedTask) => {
      // refresh this.tasks state
      this.tasks = this.tasks.map((t) =>
        t.id === updatedTask.id ? updatedTask : t
      );
    });
  }
}
