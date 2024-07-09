import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Task } from '../../../Task';
import { Subscription } from 'rxjs';
import { UiService } from '../../service/ui.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {

  showAddtask: boolean = false;
  subscription!: Subscription;

  @Output() onaddTask: EventEmitter<Task> = new EventEmitter();
  model: Task = {
    text: '',
    day: '',
    reminder: false
  };

  /**
   *
   */
  constructor(private uiService: UiService) {
    this.uiService.onToggle().subscribe((value) => {
      this.showAddtask = value;
    })
  }

  ngOnInit(): void {
    // Initialization logic if needed
  }

  onSubmit() {
    //this.submitted = true;

    const formData: Task = {
      text: this.model.text,
      day: this.model.day,
      reminder: this.model.reminder,
    };

    console.log(formData);
    this.onaddTask.emit(formData)
    //this.taskAdded(formData);
    this.model.text = '';
    this.model.day = '';
    this.model.reminder = false;
  }
}
