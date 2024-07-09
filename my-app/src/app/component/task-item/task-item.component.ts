import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../../Task';
import { CommonModule, NgClass } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, NgClass],
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() taskitem!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;

  onDelete(taskitem: Task) {
    this.onDeleteTask.emit(taskitem)
  }


  onToggle(taskitem: Task) {
    this.onToggleReminder.emit(taskitem)
  }
}
