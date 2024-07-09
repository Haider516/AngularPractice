import { Routes } from '@angular/router';
import { TaskComponent } from './component/task/task.component';
import { AboutComponent } from './component/about/about.component';

export const routes: Routes = [

  { path: '', component: TaskComponent },
  { path: 'about', component: AboutComponent },
  
];
