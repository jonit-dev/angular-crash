import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITask } from '../types/task.types';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private httpClient: HttpClient) {}

  // how to handle async calls with observables...
  getTasks(): Observable<ITask[]> {
    return this.httpClient.get<ITask[]>(this.apiUrl);
  }

  deleteTask(task: ITask): Observable<ITask> {
    return this.httpClient.delete<ITask>(`${this.apiUrl}/${task.id}`);
  }

  updateTask(updatedTask: ITask): Observable<ITask> {
    return this.httpClient.put<ITask>(
      `${this.apiUrl}/${updatedTask.id}`,
      updatedTask
    );
  }
}
