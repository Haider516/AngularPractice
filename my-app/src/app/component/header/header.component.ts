import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { Subscription } from "rxjs";
import { UiService } from '../../service/ui.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-header',
  imports: [CommonModule,ButtonComponent],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit {

  title: string = "Task Tracker";
  showAddtask: boolean = false;
  subscription: Subscription;

  ngOnInit(): void {

  }

  //Here I subscribed to the ui service toggle method that return  a  subject as an observable 
  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService.onToggle().subscribe((value) => {
      this.showAddtask = value;
    })
  }

  toggleAddTask() {
    this.uiService.toggleShowaddTask()
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
