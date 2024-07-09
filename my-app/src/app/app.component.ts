import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { TaskComponent } from './component/task/task.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NgClass} from '@angular/common';
import { FooterComponent } from './component/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,TaskComponent,FooterComponent,FontAwesomeModule,NgClass],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected property name
})
export class AppComponent {
  
}
