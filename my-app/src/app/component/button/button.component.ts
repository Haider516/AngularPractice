import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'] // Corrected property name
})
export class ButtonComponent {
  @Input() color: string = '';
  @Input() text: string = '';
  @Output() btnClick = new EventEmitter();

  onClick() {
    this.btnClick.emit();
  }
}
