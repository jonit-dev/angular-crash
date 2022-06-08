import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string = 'Text';
  @Input() color: string = 'red';
  @Output() btnClick = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    console.log('button clicked');
    this.btnClick.emit();
  }
}
