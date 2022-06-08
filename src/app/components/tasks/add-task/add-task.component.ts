import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export interface INewTask {
  text: string;
  day: string;
  reminder: boolean;
}

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddNewTask = new EventEmitter<INewTask>();

  text: string;
  date: string;
  reminder: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onSaveTask(): void {
    console.log('onSaveTask...');

    const newTask: INewTask = {
      text: this.text,
      day: this.date,
      reminder: this.reminder,
    };

    this.onAddNewTask.emit(newTask);
  }
}
