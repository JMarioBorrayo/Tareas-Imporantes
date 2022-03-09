import { Component } from '@angular/core';
import { TaskserviceService} from "../services/taskservice.service"

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {
  public tasks: string[];
  
  constructor(private taskService:TaskserviceService) {
    this.tasks = this.taskService.getImportantTasks();
  }


  public removeTask(pos: number){
    this.taskService.removeImportant(pos);
    this.tasks = this.taskService.getImportantTasks();
  }

  public completeTask(pos: number){
    this.taskService.importantDone(pos);
    this.tasks = this.taskService.getImportantTasks();
  }
  public getImportant(){
    this.taskService.getImportantTasks();
  }

  
  public backLess(pos:number){
    this.taskService.backLess(pos)
    this.tasks = this.taskService.getImportantTasks();
  }

}
