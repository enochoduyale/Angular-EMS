import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/task.interface';
import { faCoffee, faBackward, faStepBackward } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-in-progress',
  templateUrl: './in-progress.component.html',
  styleUrls: ['./in-progress.component.css']
})
export class InProgressComponent implements OnInit {

  constructor() { }
  faBack = faStepBackward

  @Input() task! : Task
  @Output() backToPending : EventEmitter<Task> = new EventEmitter()
  @Output() forwardToDone : EventEmitter<Task> = new EventEmitter()

  reverseToPending(task: Task){
    this.backToPending.emit(task)
  }

  moveToDone(task: Task){
    this.forwardToDone.emit(task)
  }


  ngOnInit(): void {
  }

}
