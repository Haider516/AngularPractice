import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddtask: boolean = false;
  private subject = new Subject<any>();
  constructor() { }

  toggleShowaddTask() {

    this.showAddtask = !this.showAddtask;
    this.subject.next(this.showAddtask)
  }

  onToggle() {
    return this.subject.asObservable();
  }

}
