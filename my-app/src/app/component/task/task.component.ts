import { Component, OnInit } from '@angular/core';
import { Tasklist } from '../../../mock-task';
import { Task } from '../../../Task';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskServiceService } from '../../service/task-service.service';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, TaskItemComponent, AddTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent implements OnInit {

  taskData: Task[] = [];

  constructor(private TaskService: TaskServiceService) {


  }

  ngOnInit(): void {
    this.TaskService.getTask().subscribe((taskData) => (
      this.taskData = taskData
    ))
  }

  deleteTask(recievedtaskitem: Task) {
    this.TaskService.deleteTask(recievedtaskitem).subscribe(() => (
      this.taskData = this.taskData.filter((t) => t.id !== recievedtaskitem.id)
    ))
  }

  ToggleReminder(recievedtaskitem: Task) {
    console.log("hello to the  task");

    recievedtaskitem.reminder = !recievedtaskitem.reminder;
    this.TaskService.updateTask(recievedtaskitem).subscribe()
  }

  taskAdded(receivedformData: Task) {
    this.TaskService.addTask(receivedformData).subscribe((receivedData) => {
      //console.log(receivedData.day);

      this.taskData.push(receivedData)
    })


  }
}