import { Injectable } from '@angular/core';
import { Task } from '../../Task'; // Ensure the path to Task is correct
import { Tasklist } from '../../mock-task'; // Ensure the path to Tasklist is correct
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";


const HttpOptions = {
  'headers': new HttpHeaders({
    'Content-Type': 'application/json'
  })

}

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  private apiUrl = "http://localhost:5000/tasks"
  constructor(private http: HttpClient) { }

  getTask(): Observable<Task[]> {
    //  const tasks = of(Tasklist); // Use a lowercase variable name
    return this.http.get<Task[]>(this.apiUrl);
  }
  deleteTask(task: Task): Observable<Task[]> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task[]>(url);
  }

  updateTask(task: Task): Observable<Task[]> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task[]>(url, task, HttpOptions);
  }

  // addTask(task: Task): Observable<Task[]> {
  //   // const url = `${this.apiUrl}/${task.id}`;
  //   return this.http.post<Task[]>(this.apiUrl, task,HttpOptions);
  // }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, HttpOptions);
  }
}
