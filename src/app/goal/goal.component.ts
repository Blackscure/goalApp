import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
import { GoalService } from '../goal-service/goal.service';
import { AlertService } from '../alert-service/alert.service';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})



export class GoalComponent implements OnInit {

  goal:Goal[];
  alertService:AlertService;
  

  
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  toggleDetails(index){
    this.goal[index].showDescription = !this.goal[index].showDescription;
  }

  deleteGoal(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goal[index].name}?`)

      if (toDelete){
        this.goal.splice(index,1)
        this.alertService.alertMe("The goal has been deleted")
      }
    }
  }

  constructor(goalService:GoalService, alertService:AlertService) {
    this.goal = goalService.getGoal()
    this.alertService = alertService;
  }


  addNewGoal(goal){
    let goalLength = this.goal.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goal.push(goal)
  }

 
}